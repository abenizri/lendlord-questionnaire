import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landlord from './sections/landlord.jsx'
import NumOfProperties from './sections/numOfProperties.jsx'
import MoreThanThreeProperties from './sections/moreThanThreeProperties.jsx'
import MortgageForInvestment from './sections/mortgageForInvestment.jsx'
import PortfolioLtv from './sections/portfolioLtv.jsx'
import RemortgageQuestion from './sections/remortgageQuestion.jsx'
import IncomeQuestions from './sections/incomeQuestions.jsx'
import Results from './sections/results.jsx'
import ExistingPortfolio from './sections/existingPortfolio.jsx'
import IncomeTax from './sections/incomeTax.jsx'
import SignUp from './sections/signUp.jsx'
import SorryPage from './sections/sorryPage.jsx'
import TotalMortgageBalance from './sections/totalMortgageBalance.jsx'

class Questions extends Component {

    state = {
        step: 1,
        islandlord: 'No',
        moreThan3PropWithLender: 'No',
        numOfProperties: 1,
        incomeTaxBand1: 0,
        loanValue: '0',
        propertyValue: '0',
        propertyEstimatedRentalIncome: '0',
        approximatePropertyValue: '0',
        approximateRemaining: '0',
        ltv: '0',
        notSure: 'false',
        lender: '',
        totalMortgagesBalanceForLender: '0'
    }

    clearForm = () => {
      window.location.reload()
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
        this.props.updateStep(step + 1)
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
        this.props.updateStep(step- 1)
    }

    jumpSteps = num => {
        this.setState({
            step : num
        })
        this.props.updateStep(num)
    }

    handleChange = (input) => {
      console.log(input);
      if (input === 'incomeTaxBand1') {
        let elem = document.querySelector('input[type="hidden"]')

        if (elem && elem.value) {
          //this.setState({ [input] : elem.value })

        }
        // console.log(value);
        // this.setState({ [input] : value })
      }
      return (e) => {
      // console.log(e);
      // console.log($(e.target).closes('input[type="hidden"]') );
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
        totalMortgagesBalanceForLender
       } = this.state;

      const values = {
        totalMortgagesBalanceForLender,
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
        ltv
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
          return <IncomeQuestions
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />

        case 8:
          return <IncomeTax
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    prevStep={this.prevStep}
                    jumpSteps={this.jumpSteps}
                    values={values}
                    />
        case 9:
          return <Results
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 10:
          return <ExistingPortfolio
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 11:
          return <MortgageForInvestment
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    jumpSteps={this.jumpSteps}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 12:
          return <SignUp
                      prevStep={this.prevStep}
                      nextStep={this.nextStep}
                      jumpSteps={this.jumpSteps}
                      handleChange = {this.handleChange}
                      values={values}
                      />
        case 13:
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
