import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Card, InputGroup, Col, FormGroup, Input, Row, Button } from "reactstrap";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true
    };
  }

  back = e => {
    this.props.prevStep()
  };

  handleChange = e => {
    $('[name="moreThan3PropWithLender"]').prop("checked", false);
    $(e.target).prop("checked", true);
    let elem = document.querySelector('[name="moreThan3PropWithLender"]:checked');
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
    const style = {
        fontFamily: 'SegoePro-Semibold',
        fontSize: '32px',
        borderColor: '#2F353A',
        lineHeight: '40px',
        justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"
    }

    return (
      <Col sm="6" className="colStyle">
      <section id="signUp">
        <Form>
        <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
          <h1 style={style}>Sign Up</h1>
          <div style={{height: '10px'}}></div>
          <Card style={{border: 'transparent'}}>
            <p style={{SegoePro:'14px', color:  '#636363', textAlign: 'center' }}>
              Sign up free to refine the results with more data and to get remortgage opportunities for your existing portfolio:
            </p>
          </Card>

          <Form.Field >
              <React.Fragment>
              <Col sm="16" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                  <FormGroup className="col-sm-8" >
                    <InputGroup>
                      <Input type="email" id="username3" placeholder="email"  name="username3" autoComplete="name"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="col-sm-8">
                    <InputGroup>
                      <Input type="email" id="email3" name="email3" placeholder="username" autoComplete="username"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="col-sm-8">
                    <InputGroup>
                      <Input type="password" id="password3" name="password3" placeholder="password" autoComplete="current-password"/>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <span style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>Sign in with Google</span>
              </React.Fragment>
          </Form.Field>
          <div style={{height: '100px'}}/>
          <Row>
            <Col>
              <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="Yes">Yes </Button>
            </Col>
            <Col>
              <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>No</Button>
            </Col>
          </Row>
          </div>
        </Form>
      </section>
      </Col>
    );
  }
}

export default SignUp;
