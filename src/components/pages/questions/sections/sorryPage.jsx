import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  Row,
  Col,
  Button,
} from 'reactstrap';


class SorryPage extends Component{

  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };

  }

  back = (e) => {
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

        justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"

    }

    if (isMobile) {
      style = {
          fontFamily: 'SegoePro-Semibold',
          fontSize: '23px',
          borderColor: '#2F353A',
          lineHeight: '20px',
          justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"

      }
    }

      return(
        <Col sm="5">
        <section id="islandlord" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <Form >
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
              <h1 className="ui centered" style={style}>Sorry...</h1>
              <h1 className="ui centered" style={style}>It looks like we can’t help you.</h1>
              <div style={{height: '50px'}}>
              </div>
              <Form.Field>
              <Row>
                <Col>
                  <Button block  color="warning" style={{ ontFamily: 'SegoePro-Semibold', width: '100px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.props.clearForm} value="Yes">StartOver</Button>
                </Col>
                <Col>
                  <Button block color="light" style={{ fontFamily: 'SegoePro-Semibold',  width: '100px', backgroundColor: '#F0F0F0', color: '#74818F', padding: '0', borderRadius: '4px', height: '34px'}} id="" onClick={this.back} value="No">Return</Button>
                </Col>
              </Row>
              </Form.Field>
              <div style={{height: '100px'}}>
              </div>
            </div>
          </Form>
        </section>
        </Col>
      )
  }
}

export default SorryPage;
