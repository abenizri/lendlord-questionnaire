import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import backButtonIcon from './../../../../assets/images/ico_arrow_left.svg';

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

  componentDidMount(prevProps) {
    window.dataLayer.push({
      'event': 'Pageview',
      'pageTitle': 'new_mortgage_interest',
      'someUsefulInformation': '123abd'
      })
  }
  
  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

  jumpToSorry = (e) => {
    this.props.jumpSteps(14)
  }

  jumpToNewProperty = (e) => {
    this.props.jumpSteps(7)
  }

  render(){

    const { width } = this.state;
    const isMobile = width <= 800;

    let backButton = (
      <Button className="backButtonIcon" onClick={this.back}>
      <img src={backButtonIcon} alt="back"/>
      </Button>
    )

    let backButtonMobile

    if (isMobile) {
      backButton = ""
      backButtonMobile =
      (
        <Row style={{marginTop: '20px'}}>
          <Button block color="secondary" style={{position: 'absolute', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', left: '35%'}} id="" onClick={this.back}>back</Button>
        </Row>
      )
    }
      return(
        <React.Fragment>
          {backButton}
          <Col sm="5" className="colStyle">
            <section id="mortgageForInvestment">
              <Form>
                <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
                  <h1 className="header">Do you want a new mortgage for an investment property?</h1>
                  <div style={{height: '10px'}}></div>
                  <Card style={{border: 'transparent'}}>
                    <p className="tiptext"></p>
                  </Card>

                  <Form.Field>
                  <div style={{height: '20px'}}/>
                    <Row>
                      <Col>
                        <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.jumpToSorry}>No</Button>
                      </Col>
                      <Col>
                        <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px'}}  onClick={this.jumpToNewProperty} value="No">Yes</Button>
                      </Col>
                    </Row>
                    {backButtonMobile}
                  </Form.Field>
                </div>
              </Form>
            </section>
          </Col>
        </React.Fragment>
      )
  }

}

export default MortgageForInvestment;
