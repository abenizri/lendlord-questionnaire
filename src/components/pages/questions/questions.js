import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landlord from './sections/landlord.jsx'
import NumOfProperties from './sections/numOfProperties.jsx'
import MoreThanThreeProperties from './sections/moreThanThreeProperties.jsx'
import MortgageForInvestment from './sections/mortgageForInvestment.jsx'
import PortfolioLtv from './sections/portfolioLtv.jsx'
import RemortgageQuestion from './sections/remortgageQuestion.jsx'
import NewPropertyQuestions from './sections/newPropertyQuestions.jsx'
import Results from './sections/results.jsx'
import ExistingPortfolio from './sections/existingPortfolio.jsx'
import IncomeAbove30 from './sections/incomeAbove30.jsx'
import IncomeTax from './sections/incomeTax.jsx'
import SignUp from './sections/signUp.jsx'
import SorryPage from './sections/sorryPage.jsx'
import TotalMortgageBalance from './sections/totalMortgageBalance.jsx'

const inputsWithCommas = ['totalMortgagesBalanceForLender', 'propertyEstimatedRentalIncome', 'propertyValue', 'loanValue']

class Questions extends Component {

    state = {
        step: 1,
        steps: [],
        isLandLord: 'Yes',
        moreThan3PropWithLender: 'No',
        numOfProperties: 1,
        incomeTaxBand1: 0,
        loanValue: '',
        propertyValue: '',
        propertyEstimatedRentalIncome: '',
        approximatePropertyValue: '0',
        approximateRemaining: '0',
        ltv: '',
        notSure: 'false',
        lender: '',
        totalMortgagesBalanceForLender: '',
        minimumIncome: '0'
    }

    clearForm = () => {
      window.location.reload()
    }

    nextStep = () => {
        const { step, steps } = this.state
        steps.push(step)
        this.setState({
            step : step + 1,
            steps: steps
        })
        this.props.updateStep(step + 1)
    }

    prevStep = () => {
        const { step, steps } = this.state
        let lastStep = steps.pop()
        this.setState({
            step : lastStep,
            steps: steps
        })
        this.props.updateStep(step - 1)
    }

    jumpSteps = num => {
        const { step, steps } = this.state
        steps.push(step)
        this.setState({
            step : num,
            steps: steps
        })
        this.props.updateStep(num)
    }

    numberWithCommas(x) {
      x = x.replace(/\D+/g,'')
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    handleChange = (input) => {
      if (input === 'lender') {
        let elem = document.getElementById('downshift-simple-input')
        if(elem && elem.value) {
          setTimeout(() => {
            this.setState({ [input] : elem.value })
          }, 100)
        }
      }
      inputsWithCommas.forEach( id => {
        let elem = document.getElementById(id)
        if(elem && elem.value) {
          elem.value = this.numberWithCommas(elem.value)
        }
      })
      return (e) => {
        this.setState({ [input] : e.target.value })
      }
    }

    // handleChange = input => event => {
    //   this.setState({ [input] : event.target.value })
    // }

    render(){
      const {step} = this.state;

      const {
        moreThan3PropWithLender,
        numOfProperties,
        numOfProp,
        incomeTaxBand1,
        loanValue,
        propertyValue,
        propertyEstimatedRentalIncome,
        approximatePropertyValue,
        approximateRemaining,
        ltv,
        notSure,
        lender,
        totalMortgagesBalanceForLender,
        isLandLord,
        minimumIncome
       } = this.state;

      const values = {
        totalMortgagesBalanceForLender,
        isLandLord,
        lender,
        notSure,
        moreThan3PropWithLender,
        numOfProperties,
        numOfProp,
        incomeTaxBand1,
        loanValue,
        propertyValue,
        propertyEstimatedRentalIncome,
        approximatePropertyValue,
        approximateRemaining,
        ltv,
        minimumIncome
      };
        //
        switch(step) {
        case 1:
          return <Landlord
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
          return <NumOfProperties
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
          return <MoreThanThreeProperties
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />
        case 4:
          return <TotalMortgageBalance
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 5:
          return <PortfolioLtv
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 6:
          return <RemortgageQuestion
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />

        case 7:
          return <NewPropertyQuestions
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />

        case 8:
          return <IncomeAbove30
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />

        case 9:
          return <IncomeTax
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />
        case 10:
          return <Results
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 11:
          return <ExistingPortfolio
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 12:
          return <MortgageForInvestment
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 13:
          return <SignUp
                      prevStep={this.prevStep}
                      nextStep={this.nextStep}
                      jumpSteps={this.jumpSteps}
                      handleChange = {this.handleChange}
                      values={values}
                      />
        case 14:
          return <SorryPage
                      prevStep={this.prevStep}
                      nextStep={this.nextStep}
                      jumpSteps={this.jumpSteps}
                      clearForm={this.clearForm}
                      handleChange = {this.handleChange}
                      values={values}
                      />
        default:
            return <h3>dss</h3>
            }

    }
}
export default Questions;
