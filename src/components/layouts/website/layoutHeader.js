import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Nav,
  Navbar ,
  Form,
  Button
} from 'react-bootstrap'

class LayoutHeader extends Component {
  render() {

    return (
      <React.Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor: "rgb(242, 134, 10)", opacity: '0.8'}} >
            <div style={{width: '200px',fontSize: '3.50rem'}}>
            <Navbar.Brand style={{fontSize: '3.25rem'}} href="#home">
            <h3 className="font_3" style={{fontSize:'46px', lineHeight:'34px', textAlign:'center'}}>
              <span style={{fontSize:'46px'}}>
                <span style={{lineHeight: '34px', color:'#00000'}}>Lend</span>
                <span style={{lineHeight: '34px',color:'#fff'}}>Lord</span>
                </span>
            </h3>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center mr-auto" activeKey="#home">
              <Nav.Link style={{ fontWeight: '800', paddingLeft: '80px', paddingRight: '80px', textAlign: 'right', lineHeight: '34px'}} eventKey="home" href="#home">Home</Nav.Link>
              <Nav.Link style={{ fontWeight: '800', paddingLeft: '80px', paddingRight: '80px', textAlign: 'right', lineHeight: '34px'}} eventKey="about" href="#about">About</Nav.Link>
              <Nav.Link style={{ fontWeight: '800', paddingLeft: '80px', paddingRight: '80px', textAlign: 'right', lineHeight: '34px'}} eventKey="howItWorks" href="#howItWorks">How It Works</Nav.Link>
              <Nav.Link style={{ fontWeight: '800', paddingLeft: '80px', paddingRight: '80px', textAlign: 'right', lineHeight: '34px'}} eventKey="signUp" href="#signUp">Sign Up</Nav.Link>
            </Nav>
            <Nav>
              <Form inline>
                <Button variant="outline-warning">Login</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}


export default LayoutHeader;
