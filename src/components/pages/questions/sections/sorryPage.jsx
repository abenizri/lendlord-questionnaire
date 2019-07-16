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

  componentDidMount() {
    window.dataLayer.push({
      'event': 'Pageview',
      'pageTitle': 'sorry',
      'someUsefulInformation': '123abd'
      })
  }

  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
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
            <h1 className="ui centered header">Sorry...</h1>
            <h1 className="ui centered header">It looks like we can’t help you.</h1>
            <Form.Field>
            <div style={{height: '20px'}}/>
            <Row className="rowStyle">
              <Col>
                <Button block color="secondary" style={{ width: '100px',backgroundColor: '#74818F',  padding: '0', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.back} value="No">Return</Button>
              </Col>
              <Col>
                <Button block  color="warning" style={{width: '100px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '4px', height: '34px'}}  onClick={this.props.clearForm} value="Yes">StartOver</Button>
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

export default SorryPage;
