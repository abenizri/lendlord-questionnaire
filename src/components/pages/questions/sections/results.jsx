import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import $ from "jquery";
const willLend = require('../../../services/whoWillLend.js')

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

const endPoint = `http://localhost:3000`
class Results extends Component {
  constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoading: true,
       items: []
     };
   }

	componentDidMount() {
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
		meta.loanValue = loanValue
		meta.propertyValue = propertyValue
		meta.propertyEstimatedRentalIncome = propertyEstimatedRentalIncome
		meta.incomeTaxBand1 = incomeTaxBand1
		meta.lender = lender
		meta.totalMortgagesBalanceForLender = totalMortgagesBalanceForLender
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
			console.log(lenders)
			lenders = lenders.filter(lender => {
				return $.inArray(lender.lender, lendersCriteria.validLenders) !== -1
			})
			console.log(lenders)
			numberOfResultsToReturn = lenders.length

      for (var lenderMetaData of lenders ) {
        this.getBtlResults(lenderMetaData)
      }

    })
		.then( res => document.getElementById('loader').style.display = 'none')
    .catch(error => {
			document.getElementById('loader').style.display = 'none';
			console.error('Error:', error)
			this.setState({
				error: true,
			 	isLoading: false
			})
		});// parses JSON response into native JavaScript objects
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
      var table = document.getElementById('tableResults').getElementsByTagName('tbody')[0];
      for ( var extracted of response.results[0].extarcted) {
        var row = table.insertRow()
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var amount = (extracted && extracted.price) ? extracted.price.split('.')[0] : '0'
      	amount = amount.replace('£','').trim()
				cell1.innerHTML = '<img alt="loader" src="http://app.ex4solutions.com/images/' + response.results[0].logo + '.png" width="150px" height="50px"/>'

        cell2.innerHTML = response.results[0].lender
        cell3.innerHTML = `£${this.numberWithCommas(amount)}`
      }

      this.sortTable("tableResults")
   	})
  	.catch(error => {
			console.error('Error:', error)
			// console.log(numberOfReturnedResults)
			numberOfReturnedResults++
			if(numberOfReturnedResults === numberOfResultsToReturn) {
				this.setState({isLoading: false})
			}
	 	});// parses JSON response into native JavaScript objects
	}


	saveAndContinue = e => {
    this.props.nextStep();
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
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(id);
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
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

  render() {
		const { error, isLoading } = this.state;
		const style = {
			fontFamily: 'SegoePro-Semibold',
			fontSize: '32px',
			borderColor: '#2F353A',
	 		lineHeight: '40px'
		}

		let loading = (
			<React.Fragment>
			  <Col style={{ width: '40px', maxWidth: '40px', paddingRight: '0px', paddingLeft: '0px'}}>
				  <img id="loader"  alt="loader" style={{width: '35px', marginTop: '5px'}} className="rounded mx-auto d-block" src='http://app.ex4solutions.com/images/PwqR.gif'></img>
			  </Col>
			  <Col>
		    	<label className="control-label" style={{marginBottom: '0px', color: '#8f9ba6', marginTop: '10px'}}>It may take up to 2 minutes...</label>
			  </Col>
			</React.Fragment>
			)

		if(!isLoading) {
			loading = ""
		}
    if (error) {
      loading = <h1>Error</h1>
    }
    return (
			<Col sm="5">
        <section id="results">
          <Form>
    				<div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
							<Row style={{ width: '100%'}}>
								<Col style={{ width: '135px', maxWidth: '135px'}}>
									<h1 style={style}>Results</h1>
								</Col>
								{loading}
							</Row>

           	  <Form.Field>
	              <div style={{position: 'relative', height: '500px', overflow: 'auto'}}>
	              	<table style={{height: 50}} id="tableResults"  className="table table-fixed">
	             			<thead>
	                 		<tr>
		                    <th>Logo</th>
		                    <th>Lender</th>
		                    <th>Price</th>
	                 		</tr>
	              		</thead>
	              		<tbody>
	              		</tbody>
	              	</table>
	              </div>
              </Form.Field>
							<div style={{ height: "20px" }}></div>
						  <Row>
							  <Col>
								  <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="No">Next </Button>
							  </Col>
							  <Col>
								  <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
							  </Col>
						  </Row>
						</div>
          </Form>
        </section>
			</Col>
    );
  }
}

export default Results;
