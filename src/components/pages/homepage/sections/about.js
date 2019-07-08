import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Col,
  FormGroup,
  Row
} from 'reactstrap';

class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about" >
      <div style={{height: '250px'}}>
      </div>
        <Row>
          <Col sm="4">
            <FormGroup>
              <div>
                <i className="fa fa-eye fa-lg mt-1" style={{marginBottom: '0px',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' ,fontSize: '76.5px', lineHeight: 'normal', marginLeft: '6px', color: '#ff9f07'}}></i>
              </div>
              <div>
                  <label style={{marginBottom: '0px', color: '#F2860A',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' , font: 'normal normal bold 20px/1.4em raleway,sans-serif'}}>Our Vision</label>
              </div>
              <div style={{paddingLeft: '100px', paddingRight: '100px'}}>
                  <p className="control-label" align="center" style={{marginBottom: '0px', color: '#8f9ba6',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    To improve the lives of brokers, lenders and borrowers through the utilisation of cutting-edge technology that eases knowledge sharing between all parties</p>
              </div>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <div>
                  <i className="fa fa-users fa-lg mt-1" style={{marginBottom: '0px',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' ,fontSize: '76.5px', lineHeight: 'normal', marginLeft: '6px', color: '#ff9f07'}}></i>
              </div>
              <div>
                  <label style={{marginBottom: '0px', color: '#F2860A',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' , font: 'normal normal bold 20px/1.4em raleway,sans-serif'}}>Our Team</label>
              </div>
              <div style={{paddingLeft: '100px', paddingRight: '100px'}}>
                  <p className="control-label" align="center" style={{marginBottom: '0px', color: '#8f9ba6',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    Ex4 is a group of experienced professionals from the fields of business, technology and mortgage broking</p>
              </div>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <div>
                  <i className="fa fa-object-group fa-lg mt-1" style={{marginBottom: '0px', height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' ,fontSize: '76.5px', lineHeight: 'normal', marginLeft: '6px', color: '#ff9f07'}}></i>
              </div>
              <div>
                  <label style={{marginBottom: '0px', color: '#F2860A',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' , font: 'normal normal bold 20px/1.4em raleway,sans-serif'}}>Our Technology</label>
              </div>
              <div style={{paddingLeft: '100px', paddingRight: '100px'}}>
                  <p className="control-label" align="center" style={{marginBottom: '0px', color: '#8f9ba6',height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    Our technology combines AI, machine learning and web automation to bridge impossible gaps in knowledge sharing and streamline the mortgage industry</p>
              </div>
            </FormGroup>
          </Col>
        </Row>
        <div style={{height: '350px'}}>
        </div>
      </section>
      </React.Fragment>
    );
  }
}


export default About;
