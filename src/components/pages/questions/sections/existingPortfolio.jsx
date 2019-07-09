import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

class ExistingPortfolio extends Component{

  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth

    };
  }

  componentDidMount(prevProps) {
    if (this.props.values.moreThan3Prop === "Yes") {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  doChange(input) {
    document.querySelectorAll('[name="moreThan3Prop"]').forEach( x => $(x).prop("checked", false))
    $(input).prop("checked", true);

    let elem = document.querySelector('[name="moreThan3Prop"]:checked');
    if (elem && elem.value === "No") {
      this.setState({ isHidden: true });
    } else {
      this.setState({ isHidden: false });
    }
  }

  handleChangeLable = (e) => {
    let tagName = e.target.tagName
    let input = e.target

    if (tagName === 'LABEL') input = $(e.taeget).previousSibling
    if (tagName === 'DIV') input = $(e.taeget).find('input')

    this.doChange(input)
  }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    goToSignIn  = (e) => {
        e.preventDefault();
        this.props.jumpSteps(12);
    }

    goToResultsPage = (e) => {
        e.preventDefault();
        this.props.jumpSteps(8);
    }

    render(){
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
            fontSize: '20px',
            borderColor: '#2F353A',
            lineHeight: '25px',
            justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"

        }
      }
      return (
        <Col sm="6">
        <section id="existingPortfolio" >
          <Form >
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
            <h1 style={style}>Are you interested to find remortgage opportunities on your existing portfolio?</h1>

            <div style={{ height: "10px" }}></div>
            <Form.Field >
              <div style={{ height: "10px" }}></div>
              {!this.state.isHidden && (
                <React.Fragment>
                <FormGroup>


                </FormGroup>
                <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', paddingTop: '10px', marginRight: '0px', marginLeft: '0px'}}>
                  <Row style={{ width: '100%'}}>
                      <Col sm="9" style={{ paddingRight: '0px'}}>
                        <FormGroup>
                          <div className="input-group">
                            <label className="control-label required"  style={{ marginBottom: '0px', fontWeight: 700}}>What is the total mortgages balance with this Lender?
                            </label>
                          </div>
                        </FormGroup>
                      </Col>
                      <Col sm="3" style={{ paddingRight: '0px'}}>
                        <div className="input-prepend input-group">
                        <div className="input-group-prepend">
                          <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                        </div>
                          <Input id="totalMortgagesBalance" onChange={this.props.handleChange('totalMortgagesBalance')}  defaultValue={values.totalMortgagesBalance} maxLength="10" type="tel" className="form-control" placeholder="0.00" required="required"/>
                        </div>
                      </Col>
                    </Row>
                </FormGroup>
                </React.Fragment>
              )}
            </Form.Field>
            <div style={{ height: "20px" }}></div>
            <Row>
              <Col>
                <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.goToSignIn} value="No">Yes </Button>
              </Col>
              <Col>
                <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.goToResultsPage}>No</Button>
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

export default ExistingPortfolio;
