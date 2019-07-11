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

  jumpToMortgageInvestments = (e) => {
    this.props.jumpSteps(12)
  }

  saveAndContinue = (e) => {
      this.props.nextStep()
  }

  render(){
      return(
        <Col sm="6" className="colStyle">
        <section id="isLandLord" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <Form >
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
              <h3 className="display-4 header">Are you an existing landlord?</h3>
              <div style={{height: '10px'}}></div>
              <Card style={{border: 'transparent', marginBottom: '0' }}>
                <p className="tiptext">Have at least one investment property</p>
              </Card>
              <Form.Field>
              <div style={{height: '100px'}}/>
              <Row>
                <Col>
                  <Button block  color="warning" style={{width: '100px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="Yes">Yes </Button>
                </Col>
                <Col>
                  <Button block color="secondary" style={{ width: '100px',backgroundColor: '#74818F',  padding: '0', borderRadius: '4px', height: '34px'}} id="" onClick={this.jumpToMortgageInvestments} value="No">No</Button>
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
