import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import Autocomplete from "./autocomplete.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Card, Col, FormGroup, Row, Button } from "reactstrap";

class moreThanThreeProperties extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth
    };
  }

  componentDidMount(prevProps) {
    if (this.props.values.moreThan3PropWithLender === "Yes") {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  jumpToLTV = e => {
    this.props.jumpSteps(5)
  }

  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

  doChange(input) {
    document.querySelectorAll('[name="moreThan3PropWithLender"]').forEach( x => $(x).prop("checked", false))
    $(input).prop("checked", true);

    let elem = document.querySelector('[name="moreThan3PropWithLender"]:checked');
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

    let backButton = (
      <Button block color="secondary" style={{ position: 'absolute', left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
    )

    if (isMobile) {
      backButton = ""
    }

    return (
      <React.Fragment>
        {backButton}
        <Col sm="5" className="colStyle">
        <section id="moreThan3PropWithLenderProperties">
          <Form>
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
            <h1 className="header">Do you have more than 3 properties with one Lender?</h1>
            <div style={{height: '10px'}}></div>
            <Card style={{border: 'transparent', marginBottom: '0' }}>
              <p className="tiptext">
                Some lenders limit the number of mortgages they can provide on a certain portfolio
              </p>
            </Card>
            <Form.Field >
              <Col sm="12">
                <React.Fragment>
                <FormGroup className="col-sm-12" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                  <div id="auto">
                    <Autocomplete
                      style={{ outline: "none" }}
                      handleChange = {this.props.handleChange}
                      values={values}
                    />
                  </div>

                </FormGroup>
                </React.Fragment>
              </Col>
            </Form.Field>
            <div style={{height: '100px'}}/>
            <Row>
              <Col>
                <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="No">Yes</Button>
              </Col>
              <Col>
                <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.jumpToLTV}>No</Button>
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

export default moreThanThreeProperties;
