import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  Row,
  Col,
  Button,
  Card
} from 'reactstrap';

class MortgageForInvestment extends Component{

  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth

    }
  }


  cancel = (e) => {
    this.props.jumpSteps(13)
  }

  saveAndContinue = (e) => {
    this.props.jumpSteps(6)
  }

  render(){

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
          lineHeight: '25px',
          justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"

      }
    }
      return(
        <Col sm="5">
        <section id="mortgageForInvestment">
        <Form>
        <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
            <h1 style={style}>Do you want to get a </h1>
            <h1 style={style}>mortgage for an investment </h1>
            <h1 style={style}>property?</h1>
            <div style={{height: '10px'}}></div>
            <Card style={{border: 'transparent'}}>
              <p style={{SegoePro:'14px', color:  '#636363', textAlign: 'center' }}>
                Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Card>

              <div style={{height: '50px'}}></div>
              <Form.Field>
              <Row>
                <Col>
                  <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="No">Yes </Button>
                </Col>
                <Col>
                  <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.cancel}>No</Button>
                </Col>
              </Row>
              </Form.Field>
              <div style={{height: '100px'}}></div>
              </div>
          </Form>
        </section>
        </Col>
      )
  }

}

export default MortgageForInvestment;
