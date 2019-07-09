import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Col, FormGroup, Input, Row, Button } from "reactstrap";

class IncomeQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth

    };
  }

  back = e => {
    this.props.prevStep()
  };

  handleChange = e => {
    $('[name="moreThan3Prop"]').prop("checked", false);
    $(e.target).prop("checked", true);
    let elem = document.querySelector('[name="moreThan3Prop"]:checked');
    if (elem && elem.value === "No") {
      this.setState({ isHidden: true });
    } else {
      this.setState({ isHidden: false });
    }
  };

  saveAndContinue = e => {
    // e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values } = this.props;
    const { width } = this.state;
    const isMobile = width <= 800;

    let style = {
        fontFamily: 'SegoePro-Semibold',
        fontSize: '32px',
        borderColor: '#2F353A',
        lineHeight: '40px',

        justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"

    }

    if (isMobile) {
      style = {
          fontFamily: 'SegoePro-Semibold',
          fontSize: '25px',
          borderColor: '#2F353A',
          lineHeight: '20px',
          justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"

      }
    }

    const labeltSyle = {
        fontFamily: 'SegoePro-Semibold',
        fontSize: '16px',
        borderColor: '#CCCCCC'
    }

    return (
      <Col sm="6">
      <section id="incomeQuestions">
        <Form>
        <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
          <h1 style={style}>Property Details</h1>


          <div style={{ height: "10px" }}></div>
          <Form.Field >
              <React.Fragment>
              <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', paddingTop: '10px', marginRight: '0px', marginLeft: '0px'}}>
                <Row style={{ width: '100%'}}>
                    <Col sm="8" style={{ paddingRight: '0px'}}>
                      <FormGroup style={{marginBottom: '0.1rem'}}>
                        <div className="input-group">
                          <label className="control-label required"  style={labeltSyle}>What is the estimated property value?
                          </label>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col sm="4" style={{ paddingRight: '0px'}}>
                      <div className="input-prepend input-group">
                      <div className="input-group-prepend">
                        <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                      </div>
                        <Input id="propertyValue" defaultValue={values.propertyValue} onChange={this.props.handleChange('propertyValue')} maxLength="10" type="tel" className="form-control" placeholder="0.00" required="required"/>
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
                        <Input id="rentalIncome" defaultValue={values.propertyEstimatedRentalIncome} onChange={this.props.handleChange('propertyEstimatedRentalIncome')}  maxLength="10" type="tel" className="form-control" placeholder="0.00" required="required"/>
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
                        <Input id="loanValue" defaultValue={values.loanValue} onChange={this.props.handleChange('loanValue')} maxLength="10" type="tel" className="form-control" placeholder="0.00" required="required"/>
                      </div>
                    </Col>
                  </Row>
              </FormGroup>

              </React.Fragment>
          </Form.Field>
          <div style={{ height: "20px" }}></div>
          <Row>
            <Col>
              <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="Yes">Yes </Button>
            </Col>
            <Col>
              <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>No</Button>
            </Col>
          </Row>
          <div style={{ height: "100px" }}></div>
          </div>
        </Form>
      </section>
      </Col>
    );
  }
}

export default IncomeQuestions;
