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


class Landlord extends Component{

  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
    };

  }

  cancel = (e) => {
    this.props.jumpSteps(11)
  }

  saveAndContinue = (e) => {
      this.props.nextStep()
  }

  render(){

  const { width } = this.state;
  const isMobile = width <= 800;


  let style = {
      fontFamily: 'SegoePro-Semibold',
      fontSize: '32px',
      borderColor: '#2F353A',
      lineHeight: '40px',
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
  }

  if (isMobile) {
    style = {
        fontFamily: 'SegoePro-Semibold',
        fontSize: '25px',
        borderColor: '#2F353A',
        lineHeight: '20px',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    }
  }
      return(
        <Col sm="5" className="colStyle">
        <section id="islandlord" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <Form >
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
              <h3 className="display-4" style={style}>Do you have at least one investment property?</h3>
              <div style={{height: '10px'}}></div>
              <Card style={{border: 'transparent', marginBottom: '0' }}>
                <p style={{SegoePro:'14px', color:  '#636363', textAlign: 'center' }}>
                  Lorem Ipsum has been the industrys standard dummy text
                  ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </Card>
              <Form.Field>
              <Row className="rowStyle">
                <Col>
                  <Button block  color="warning" style={{width: '100px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="Yes">Yes </Button>
                </Col>
                <Col>
                  <Button block color="secondary" style={{ width: '100px',backgroundColor: '#74818F',  padding: '0', borderRadius: '4px', height: '34px'}} id="" onClick={this.cancel} value="No">No</Button>
                </Col>
              </Row>
              </Form.Field>
            </div>
          </Form>
        </section>
        </Col>
      )
  }
}

export default Landlord;
