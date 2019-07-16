import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import backButtonIcon from './../../../../assets/images/ico_arrow_left.svg';

import { Card, Col, FormGroup, Input, Row, Button } from "reactstrap";


class PortfolioLtv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth
    };

  }

  componentDidMount(prevProps) {
    document.getElementById('btnNext').disabled = true
    if (this.props.values.notSure === "true") {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  onClick = e => {
    if (this.state.isHidden){
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  onInput = e => {
    let approximatePropertyValue = $('#approximatePropertyValue').val()
    let approximateRemaining = $('#approximateRemaining').val()

    let approximatePropertyValueNormalise = (approximatePropertyValue) ? parseInt(approximatePropertyValue.replace(/[^0-9.]/g, '')) : 0
    let approximateRemainingNormalise = (approximateRemaining) ? parseInt(approximateRemaining.replace(/[^0-9.]/g, '')) : 0
    let value = ((approximateRemainingNormalise / approximatePropertyValueNormalise) * 100).toFixed(2)
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    let input = document.getElementById('ltv')
    nativeInputValueSetter.call(input, value);

    var ev2 = new Event('input', { bubbles: true});
    input.dispatchEvent(ev2);
  }

  onChange = e => {
    let isChecked = $('#notSure').prop("checked");
    if (isChecked){
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  saveAndContinue = e => {
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    const { width } = this.state;
    const isMobile = width <= 800;

    let backButton = (
      <Button className="backButtonIcon" onClick={this.back}>
      <img src={backButtonIcon} alt="back"/>
      </Button>
    )

    let backButtonMobile = ""

    let nextBtnStyle = {
      width: '100px',
      color: '#fff',
      backgroundColor: '#FF9F08',
      padding: '0',
      borderRadius: '4px',
      height: '34px',
      marginRight: '40%'
    }

    if (isMobile) {
      backButton = ""
      backButtonMobile = (
        <Col>
        <Button block color="secondary" style={{left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.back}>Back</Button>
        </Col>
      )
      nextBtnStyle = {
        width: '100px',
        color: '#fff',
        backgroundColor: '#FF9F08',
        padding: '0',
        borderRadius: '4px',
        height: '34px'
      }
    }

    const notSureStyle = {
      marginTop: '0px',
      fontFamily: 'SegoePro-Semibold',
      fontSize: '16px',
      color: "#74818F",
      marginLeft: "0px",
      outline: 'none',
      border: '0',
      lineHeight: '2px',
      boxShadow: 'inset 0 0 0 #ddd'
    }

    return (
      <React.Fragment>
        {backButton}
        <Col sm="6" className="colStyle">
          <section id="portfolio">
            <Form>
              <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
                <h1 className="header">What is your portfolio LTV?</h1>
                <div style={{height: '10px'}}></div>
                <Card style={{border: 'transparent', marginBottom: '0', width: '80%', marginLeft: '10%' }}>
                  <p className="tiptext">
                  LTV means “Loan to Value”, the ratio between the total mortgages balance and the total properties value
                  </p>
                </Card>
                <Form.Field>
                  <FormGroup row type="question" style={{ marginBottom: '2.3rem',borderRadius: '0.5rem', paddingTop: '10px', marginRight: '0px', marginLeft: '0px'}}>
                    <Col sm="12" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                      <Row style={{ width: '100%'}}>
                        <Col sm={{size: 4, offset: 2}} style={{paddingRight: '0px'}}>
                          <div className="input-group">
                            <Input
                            onChange={this.props.handleChange('ltv')}
                            defaultValue={values.ltv} id="ltv" maxLength="10" type="tel" className="form-control" placeholder="0.00" required="required"/>
                            <div className="input-group-append">
                              <span style={{ backgroundColor: 'white' }} className="input-group-text">%</span>
                            </div>
                          </div>

                        </Col>
                        <Col sm={{size: 3, offset: 1}}>
                          <FormGroup>
                            <Input
                              className="form-check-input"
                              type="button"
                              id="notSure"
                              name="noSureLable"
                              value='Not Sure?'
                              onClick={this.onClick}
                              style={notSureStyle}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </FormGroup>
                {!this.state.isHidden && (
                  <React.Fragment>
                  <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', paddingTop: '10px', marginRight: '0px', marginLeft: '0px'}}>
                  <Row style={{ width: '100%'}}>
                    <Col sm="7" style={{ paddingRight: '0px'}}>
                      <FormGroup>
                          <div className="input-group">
                            <label className="control-label"  style={{ marginBottom: '0px', fontFamily: 'SegoePro-Regular', fontSize: '16px'}}>Approximate total value on all properties?</label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="5" style={{ paddingRight: '0px'}}>
                        <div className="input-prepend input-group">
                          <div className="input-group-prepend">
                            <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                          </div>
                          <Input onInput={this.onInput}  onChange={this.props.handleChange('approximatePropertyValue')}  defaultValue={values.approximatePropertyValue} id="approximatePropertyValue" maxLength="10" type="tel" className="form-control commaNormalized" placeholder="0"/>
                        </div>
                      </Col>
                    </Row>
                </FormGroup>
                <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', paddingTop: '10px', marginRight: '0px', marginLeft: '0px'}}>
                  <Row style={{ width: '100%'}}>
                      <Col sm="7" style={{ paddingRight: '0px'}}>
                        <FormGroup>
                          <div className="input-group">
                            <label className="control-label"  style={{ marginBottom: '0px', fontFamily: 'SegoePro-Regular', fontSize: '16px'}}>Approximate total remaining balance on all mortgages?</label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="5" style={{ paddingRight: '0px'}}>
                        <div className="input-prepend input-group">
                        <div className="input-group-prepend">
                          <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                        </div>
                          <Input onInput={this.onInput} id="approximateRemaining"  onChange={this.props.handleChange('approximateRemaining')}  defaultValue={values.approximateRemaining} maxLength="10" type="tel" className="form-control commaNormalized" placeholder="0"/>
                        </div>
                      </Col>
                    </Row>
                </FormGroup>
                </React.Fragment>
              )}
            </Form.Field>
            <div style={{height: '20px'}}/>
            <Row className="oneBtn">
              {backButtonMobile}
              <Col>
                <Button block id="btnNext" color="warning" style={nextBtnStyle} onClick={this.saveAndContinue} value="Next">Next</Button>
              </Col>
            </Row>
            </div>
          </Form>
        </section>
        </Col>
      </React.Fragment>
    );
  }
}

export default PortfolioLtv;
