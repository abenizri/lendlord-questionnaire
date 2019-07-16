import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import $ from "jquery";
import Result from '../../../result.jsx';
import ContentLoader from 'react-content-loader'

const willLend = require('../../../services/whoWillLend.js')

const logos = {
	"Accord Mortgages" : "accordmortgages",
	"Aldermore": "aldermore",
	"Barclays": "barclays",
	"BM Solutions": "bmsolutions",
	"Cambridge": "cambridge",
	"Clydesdale": "clydesdale",
	"Coventry": "coventry",
	"Family Building": "familybuilding",
	"Halifax": "halifax",
	"HSBC": "hsbc",
	"Kent Reliance": "kentreliance",
	"Platform": "platform",
	"Santander": "santander",
	"The Mortgage Works": "themortgageworks",
	"Precise Mortgages": "precise",
	"Leeds Building Society": "leedsbuildingsociety",
	"The Mortgage Lender": "themortgagelender",
	"Virgin Money": "virginmoney"
}

let meta = {
	"annualBonus1": "0",
	"annualBonusPrev1": "0",
	"annualIncome1": "30000",
	"annualNonTaxableIncome1": "0",
	"annualPensionIncome1": "0",
	"applicationType": "Purchase",
	"creditCardBalances": "0",
	"dayOfBirth1": "11",
	"employmentStatus1": "Employed",
	"grossAnuualBtl1": "0",
	"icr": "BTL High rate tax 145%",
	"incomeFromUK1": "0",
	"incomeTaxBand1": "0%",
	"loanValue": "100000",
	"maintenancePayments": "0",
	"methodOfRepayment": "Capital and interest",
	"monthOfBirth1": "09",
	"monthlySubtainableAllownecs1": "0",
	"mortgageTermMonths": "0",
	"mortgageTermYears": "25",
	"numOfApplying": "1",
	"numOfFinancialDependants": "0",
	"otherCommittedPayments": "0",
	"otherProperty": "No",
	"productRate": "5.5",
	"propertyEstimatedRentalIncome": "1250",
	"propertyValue": "400000",
	"rateFixedFor5Years": "No",
	"serviceCharge": "0",
	"totalCommissionAnnually1": "0",
	"totalCreditCards": "0",
	"totalOvertimeAnnually1": "0",
	"yearOfBirth1": "1982"
}

let lendersCriteria = {}
let numberOfResultsToReturn = 0;
let numberOfReturnedResults = 0;

const endPoint = `http://${window.location.hostname}:3000`

class Results extends Component {
  constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoading: true,
       items: [],
			 listResults: [],
			 width: window.innerWidth
     };
   }

	componentDidMount() {
		window.dataLayer.push({
			'event': 'Pageview',
			'pageTitle': 'results',
			'someUsefulInformation': '123abd'
			})
		const {
			loanValue,
			propertyValue,
			propertyEstimatedRentalIncome,
			incomeTaxBand1,
			lender,
			totalMortgagesBalanceForLender,
			moreThan3PropWithLender,
			isLandLord,
			numOfProperties,
			ltv,
			minimumIncome
		 } = this.props.values;
		meta.loanValue = loanValue.replace(',','')
		meta.propertyValue = propertyValue.replace(',','')
		meta.propertyEstimatedRentalIncome = propertyEstimatedRentalIncome.replace(',','')
		meta.incomeTaxBand1 = incomeTaxBand1
		meta.lender = lender
		meta.totalMortgagesBalanceForLender = totalMortgagesBalanceForLender.replace(',','')
		meta.moreThan3PropWithLender = moreThan3PropWithLender
		meta.isLandLord = isLandLord
		meta.numOfProperties = numOfProperties
		meta.ltv = ltv
		meta.minimumIncome = minimumIncome
		lendersCriteria = willLend.whoWillLend(meta)
		// console.log(lendersCriteria.validLenders)
		this.getMetaData(meta)
	}

  getMetaData(data = {}) {
    fetch(`${endPoint}/getBtlExtractioInput/`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(response => {
			let lenders = response.results
			// console.log(lenders)
			// console.log(lenders)
			let validLenders = lenders.filter(lender => {
				return $.inArray(lender.lender, lendersCriteria.validLenders) !== -1
			})
			let validLendersNames = validLenders.map(lender => {
				return lender.lender
			})
			let invalidLenders = lenders.filter(lender => {
				return $.inArray(lender.lender, lendersCriteria.validLenders) === -1
			})
			// console.log(validLendersNames)
			numberOfResultsToReturn = validLenders.length

      for (var lenderMetaData of validLenders ) {
        this.getBtlResults(lenderMetaData)
      }

			// console.log(lendersCriteria.deniedMessages)
			let reallyDeniedLenders = Object.keys(lendersCriteria.deniedMessages).filter(lender => {
				return $.inArray(lender, validLendersNames) === -1
			})
			for(let reallyDeniedLender of reallyDeniedLenders) {
				this.addToTable(reallyDeniedLender, lendersCriteria.deniedMessages)
			}

    })
    .catch(error => {
			document.getElementById('loader').style.display = 'none';
			console.error('Error:', error)
			this.setState({
				error: true,
			 	isLoading: false
			})
			if(!this.state.isLoading) {
				this.positionHeaders()
			}
		});// parses JSON response into native JavaScript objects
  }

	positionHeaders() {
		const resultsElement = document.getElementById('results')
		const productElement = document.getElementById('product')
		const rateElement = document.getElementById('rate')
		const returnElement = document.getElementById('return')
		const amountElement = document.getElementById('amount')
		const resultsElementX = resultsElement.getBoundingClientRect().x
		const productElementX = productElement.getBoundingClientRect().x
		const rateElementX = rateElement.getBoundingClientRect().x
		const returnElementX = returnElement.getBoundingClientRect().x
		const amountElementX = amountElement.getBoundingClientRect().x

		const productHeader = document.getElementById('productHeader')
		const rateHeader = document.getElementById('rateHeader')
		const returnHeader = document.getElementById('returnHeader')
		const amountHeader = document.getElementById('amountHeader')

		productHeader.style.paddingLeft = productElementX - resultsElementX - productElement.closest('div').style.paddingLeft.replace('px','')

		let distanceFromStart = rateElementX - resultsElementX
		let closestHeaderSize = productHeader.offsetWidth
		rateHeader.style.paddingLeft = distanceFromStart - closestHeaderSize - 16 + `px`

		distanceFromStart = returnElementX - resultsElementX
		closestHeaderSize += rateHeader.offsetWidth
		returnHeader.style.paddingLeft = distanceFromStart - closestHeaderSize - 16 + `px`

		distanceFromStart = amountElementX - resultsElementX
		closestHeaderSize += returnHeader.offsetWidth
		amountHeader.style.paddingLeft = distanceFromStart - closestHeaderSize + `px`
	}

  getBtlResults(data) {
    data.pdf = false
    return fetch(`${endPoint}/aff_calc/`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
      	'Content-Type': 'application/json',
           // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
   	})
   	.then(res => res.json())
   	.then(response => {
      // console.log('Success:', JSON.stringify(response))
			// console.log(numberOfReturnedResults)
			numberOfReturnedResults++
			if(numberOfReturnedResults === numberOfResultsToReturn) {
				this.setState({ isLoading: false })
			}
			if(!this.state.isLoading) {
				this.positionHeaders()
			}
      for ( var extracted of response.results[0].extarcted) {

				console.log(response.results[0])

				var amount = (extracted && extracted.price) ? extracted.price.split('.')[0] : '0'
      	amount = amount.replace('£','').trim()
				amount = `£${this.numberWithCommas(amount)}`

				var result = {
					lender: response.results[0].lender,
					logo: response.results[0].logo,
					product: '2 years fixed',
					rate: '1.9%',
					return: '£46 (monthly)',
					amount: amount
				}

				if(amount !== "£" && amount !== "£0") {
					let currentResults = this.state.listResults
					currentResults.push(result)
					this.setState({ listResults: currentResults })
				}

				// var listItem = document.createElement('li')
				// var listItem = this.renderResult(result)
        // var listItem = this.renderResult(result)
        // var amount = (extracted && extracted.price) ? extracted.price.split('.')[0] : '0'
      	// amount = amount.replace('£','').trim()
				// cell1.innerHTML = '<img alt="loader" src="http://app.ex4solutions.com/images/' + response.results[0].logo + '.png" width="150px" height="50px"/>'
				//
        // cell2.innerHTML = response.results[0].lender
        // cell3.innerHTML = `£${this.numberWithCommas(amount)}`
      }

      this.sortTable('list-results')
   	})
  	.catch(error => {
			console.error('Error:', error)
			// console.log(numberOfReturnedResults)
			numberOfReturnedResults++
			if(numberOfReturnedResults === numberOfResultsToReturn) {
				this.setState({isLoading: false})
			}
			if(!this.state.isLoading) {
				this.positionHeaders()
			}
	 	});// parses JSON response into native JavaScript objects
	}

	addToTable(lender, messages) {
		if(messages[lender]) {
			var result = {
				lender: lender,
				logo: logos[lender],
				criteria: Object.values(messages[lender]),
				amount: "Doesnt meet criteria"
			}
			let currentResults = this.state.listResults
			currentResults.push(result)
			this.setState({ listResults: currentResults })
			// var row = table.insertRow()
			// var cell1 = row.insertCell(0)
			// var cell2 = row.insertCell(1)
			// var cell3 = row.insertCell(2)
			// cell1.innerHTML = '<img alt="loader" src="http://app.ex4solutions.com/images/' + logos[lender] + '.png" width="150px" height="50px"/>'
			// cell2.innerHTML = lender
			// cell3.innerHTML = Object.values(messages[lender]).join('\n')
		}
	}
	jumpToSignup = e => {
    this.props.jumpSteps(13);
  };

	back  = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

  numberWithCommas(x) {
    x = x.replace(/\D+/g,'')
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  sortTable(id) {
    var list, rows, switching, i, x, y, shouldSwitch;
    list = document.getElementById(id);
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = list.children;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByClassName("amount")[0];
        y = rows[i + 1].getElementsByClassName("amount")[0];
        //check if the two rows should switch place:
        let firstNum = (x.innerHTML.toLowerCase().replace(/[^\d+]/g, '').length > 0) ? parseInt(x.innerHTML.toLowerCase().replace(/[^\d+]/g,'')) : 0
        let secondNum = (y.innerHTML.toLowerCase().replace(/[^\d+]/g, '').length > 0) ? parseInt(y.innerHTML.toLowerCase().replace(/[^\d+]/g,'')) : 0
        if (firstNum < secondNum) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

	renderResults() {
		return this.state.listResults.map((result, key) => {
			return (
					<Result key={key}
					lender={result.lender}
					logo={result.logo}
					product={result.product}
					rate={result.rate}
					return={result.return}
					amount={result.amount}
					criteria={result.criteria}
					/>
			)
		})


	}

  render() {
		const { error, isLoading, width } = this.state;
		const style = {
			fontFamily: 'SegoePro-Semibold',
			fontSize: '32px',
			borderColor: '#2F353A',
	 		lineHeight: '40px'
		}

		const isMobile = width <= 800

		let loader = (
			<React.Fragment>
				<ContentLoader
		    height={14}
		    width={300}
		    speed={2}
		    primaryColor="#c0c0c0"
		    secondaryColor="#fdfdfd"
				style={{backgroundColor: 'rgb(240, 243, 245)', borderRadius: '0.5rem', marginBottom: '0.3rem'}}
		  	>
		    <rect x="25" y="1" rx="4" ry="4" width="50" height="4"/>
		    <rect x="25" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="50" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="75" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="260" y="4" rx="3" ry="4" width="35" height="5"/>
		    <circle cx="10" cy="5" r="5" />
		  	</ContentLoader>
				<ContentLoader
		    height={14}
		    width={300}
		    speed={2}
		    primaryColor="#c0c0c0"
		    secondaryColor="#fdfdfd"
				style={{backgroundColor: 'rgb(245, 248, 250)', borderRadius: '0.5rem', marginBottom: '0.3rem'}}
		  	>
		    <rect x="25" y="1" rx="4" ry="4" width="50" height="4"/>
		    <rect x="25" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="50" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="75" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="260" y="4" rx="3" ry="4" width="35" height="5"/>
		    <circle cx="10" cy="5" r="5" />
		  	</ContentLoader>
				<ContentLoader
		    height={14}
		    width={300}
		    speed={2}
		    primaryColor="rgb(245, 248, 250)"
		    secondaryColor="#fdfdfd"
				style={{borderRadius: '0.5rem'}}
		  	>
		    <rect x="25" y="1" rx="4" ry="4" width="50" height="4"/>
		    <rect x="25" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="50" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="75" y="8" rx="3" ry="4" width="20" height="2"/>
				<rect x="260" y="4" rx="3" ry="4" width="35" height="5"/>
		    <circle cx="10" cy="5" r="5" />
		  	</ContentLoader>
			</React.Fragment>
		)

		let headers = (
			<Row style={{paddingLeft: '40px', position: 'relative', paddingBottom: '12px'}}>
			  <Col style={{ width: '40px', maxWidth: '40px', paddingRight: '0px', paddingLeft: '0px'}}>
				  <img id="loader"  alt="loader" style={{width: '25px', marginTop: '5px'}} className="rounded mx-auto d-block" src='http://app.ex4solutions.com/images/PwqR.gif'></img>
			  </Col>
			  <Col>
		    	<label className="control-label" style={{marginBottom: '0px', color: '#8f9ba6', marginTop: '10px'}}> Loading results...</label>
			  </Col>
				<Col>
					<label className="resultHeader" style={{position: 'absolute', right: '30px', bottom: '0', marginBottom: '0'}}>Max Amount</label>
				</Col>
			</Row>
			)

		if(!isLoading) {
			headers = (
				<React.Fragment>
					<label id="productHeader" className="resultHeader">Product Type</label>
					<label id="rateHeader" className="resultHeader">Inital and Revert Rates</label>
					<label id="returnHeader" className="resultHeader">Monthly Payment</label>
					<label id="amountHeader" className="resultHeader">Max Amount</label>
				</React.Fragment>
			)
			loader = ""
		}
    if (error) {
      headers = <h1>Error</h1>
    }
		if(isMobile) {
			headers = ""
			return (
				<Col sm="12" xs="12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
	        <section id="results">
	          <Form>
	    				<div style={{  width: '100%'}}>
								<Row style={{ width: '100%'}}>
									<Col style={{ paddingBottom: '30px', paddingLeft: '36px'}}>
										<h1 style={style}>Potential Lenders</h1>
									</Col>
								</Row>

	           	  <Form.Field>
		              <div style={{position: 'relative', height: '500px', overflow: 'auto'}}>
										<div>
											{headers}
										<div>
										</div>
		              		<ul id="list-results" style={{paddingLeft: '0px'}}>
												{this.renderResults()}
											</ul>
										</div>
										{loader}
		              </div>
	              </Form.Field>
								<div style={{ height: "20px" }}></div>
							  <Row>
									<Col>
										<Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.back}>Back</Button>
									</Col>
								  <Col>
									  <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px'}}  onClick={this.jumpToSignup} value="Next">Next</Button>
								  </Col>
							  </Row>
							</div>
	          </Form>
	        </section>
				</Col>
	    );
		} else {
			return (
				<Col sm="12" xs="12">
	        <section id="results">
	          <Form>
	    				<div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
								<Row style={{ width: '100%'}}>
									<Col style={{ paddingBottom: '40px'}}>
										<h1 style={style}>Potential Lenders</h1>
									</Col>
								</Row>

	           	  <Form.Field>
		              <div style={{position: 'relative', height: '500px', overflow: 'auto'}}>
										<div>
											{headers}
										<div>
										</div>
		              		<ul id="list-results" style={{paddingLeft: '0px'}}>
												{this.renderResults()}
											</ul>
										</div>
										{loader}
		              </div>
	              </Form.Field>
								<div style={{ height: "20px" }}></div>
							  <Row>
									<Col>
										<Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.back}>Back</Button>
									</Col>
								  <Col>
									  <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px'}}  onClick={this.jumpToSignup} value="Next">Next</Button>
								  </Col>
							  </Row>
							</div>
	          </Form>
	        </section>
				</Col>
	    );
		}
  }
}

export default Results;
