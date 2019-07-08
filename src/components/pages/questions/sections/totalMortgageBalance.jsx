import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import Autocomplete from "./autocomplete.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Card, Col, FormGroup, Label, Input, Row, Button } from "reactstrap";

class TotalMortgageBalance extends Component {
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

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

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

  saveAndContinue = e => {
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

    return (
      <Col sm="5">
      <section id="moreThan3PropProperties">
        <Form>
        <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
          <h1 style={style}>What is the total mortgages </h1>
          <h1 style={style}>balance with this Lender?</h1>
          <div style={{height: '10px'}}></div>
          <Card style={{border: 'transparent', marginBottom: '0' }}>
            <p style={{SegoePro:'14px', color:  '#636363', textAlign: 'center' }}>
               Do you have more than 3 properties with one Lender?
            </p>
          </Card>
          <Form.Field >
              <React.Fragment>

                <FormGroup className="col-sm-12" type="question" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                      <Col sm="9" style={{ paddingRight: '0px', marginLeft: '-15px'}}>
                        <div className="input-prepend input-group">
                        <div className="input-group-prepend">
                          <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                        </div>
                          <Input id="totalMortgagesBalance" onChange={this.props.handleChange('totalMortgagesBalance')}  defaultValue={values.totalMortgagesBalance} maxLength="10" type="tel" className="form-control" placeholder="Total mortgages balance" required="required"/>
                        </div>
                      </Col>
                </FormGroup>
              </React.Fragment>

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

          <div style={{ height: "100px" }}></div>
          </div>
        </Form>
      </section>
      </Col>
    );
  }
}

export default TotalMortgageBalance;
