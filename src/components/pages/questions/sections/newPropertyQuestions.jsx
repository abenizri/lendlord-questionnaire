import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Col, FormGroup, Input, Row, Button } from "reactstrap";

class NewPropertyQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth

    };
  }

  componentDidMount() {
    document.getElementById('btnNext').disabled = true
  }

  back = e => {
    this.props.prevStep()
  };

  saveAndContinue = e => {
    // e.preventDefault();
    this.props.nextStep();
  };

  toggleButton = () => {
    let inputs = Array.from(document.querySelectorAll('input[required]'))
    let nextBtn = document.getElementById('btnNext')
    let disabled = false
    inputs.forEach(input => {
      if(!input.value) {
        disabled = true
      }
    })
    if(disabled) {
      nextBtn.disabled = true
    } else {
      nextBtn.disabled = false
    }
  }


  render() {
    const { values } = this.props;
    const { width } = this.state;
    const isMobile = width <= 800;

    let backButton = (
      <Button block color="secondary" style={{ position: 'absolute', left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
    )

    let backButtonMobile = ""

    if (isMobile) {
      backButton = ""
      backButtonMobile = (
        <Col>
        <Button block color="secondary" style={{ position: 'absolute', left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
        </Col>
      )
    }


    const labeltSyle = {
        fontFamily: 'SegoePro-Semibold',
        fontSize: '16px',
        borderColor: '#CCCCCC'
    }

    return (
      <React.Fragment>
        {backButton}
        <Col sm="6" className="colStyle">
        <section id="NewPropertyQuestions">
          <Form>
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
            <h1 className="header">Property Details</h1>
            <div style={{ height: "10px" }}></div>
            <Form.Field >
                <React.Fragment>
                <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', paddingTop: '10px', marginRight: '0px', marginLeft: '0px'}}>
                  <Row style={{ width: '100%'}}>
                      <Col sm="8" style={{ paddingRight: '0px'}}>
                        <FormGroup style={{marginBottom: '0.1rem'}}>
                          <div className="input-group">
                            <label className="control-label required" style={labeltSyle}>What is the estimated property value?
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="4" style={{ paddingRight: '0px'}}>
                        <div className="input-prepend input-group">
                        <div className="input-group-prepend">
                          <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                        </div>
                          <Input
                           id="propertyValue" defaultValue={values.propertyValue}
                           onChange={e => { this.toggleButton(); this.props.handleChange('propertyValue')}}
                           maxLength="10" type="tel" className="form-control commaNormalized" placeholder="0" required="required"/>
                        </div>
                      </Col>
                    </Row>
                </FormGroup>
                <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
                  <Row style={{ width: '100%'}}>
                      <Col sm="8" style={{ paddingRight: '0px'}}>
                        <FormGroup  style={{marginBottom: '0.1rem'}}>
                          <div className="input-group">
                            <label className="control-label required" style={labeltSyle}>What is the expected rental income?
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="4" style={{ paddingRight: '0px'}}>
                        <div className="input-prepend input-group">
                        <div className="input-group-prepend">
                          <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                        </div>
                          <Input id="propertyEstimatedRentalIncome" defaultValue={values.propertyEstimatedRentalIncome}
                          onChange={e => { this.toggleButton(); this.props.handleChange('propertyEstimatedRentalIncome')}}
                          maxLength="10" type="tel" className="form-control commaNormalized" placeholder="0" required="required"/>
                        </div>
                      </Col>
                    </Row>
                </FormGroup>
                <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
                  <Row style={{ width: '100%'}}>
                      <Col sm="8" style={{ paddingRight: '0px'}}>
                        <FormGroup  style={{marginBottom: '0.1rem'}}>
                          <div className="input-group">
                            <label className="control-label required" style={labeltSyle}>What is the required loan amount?
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="4" style={{ paddingRight: '0px'}}>
                        <div className="input-prepend input-group">
                          <div className="input-group-prepend">
                            <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                          </div>
                            <Input id="loanValue" defaultValue={values.loanValue}
                            onChange={e => { this.toggleButton(); this.props.handleChange('loanValue')}}
                            maxLength="10" type="tel" className="form-control commaNormalized" placeholder="0" required="required"/>
                        </div>
                      </Col>
                    </Row>
                </FormGroup>

                </React.Fragment>
            </Form.Field>
            <div style={{height: '100px'}}/>
            <Row className="oneBtn">
              <Col>
                <Button block id="btnNext" color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="Yes">Next</Button>
              </Col>
              {backButtonMobile}
            </Row>
            </div>
          </Form>
        </section>
        </Col>
      </React.Fragment>
    )
  }
}

export default NewPropertyQuestions;
