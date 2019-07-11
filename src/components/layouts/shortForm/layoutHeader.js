import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../../assets/images/logo-bright.svg';

import {
  Nav,
  Navbar ,
  Form,
  Button
} from 'react-bootstrap'

class LayoutHeader extends Component {

  clearForm = () => {
    window.location.reload()
  }

  render() {
    let signUpButton = (<Button variant="secondary" href="/signup">Sign up</Button>)
    if(this.props.step === 13) {
      signUpButton = (
        <Button variant="secondary" onClick={this.clearForm} href="/">Start Over</Button>
      )
    }
    return (
      <React.Fragment>
        <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor: "#324452", opacity: '0.8'}}>
          <Navbar.Brand style={{fontSize: '1.25rem'}} href="./home">
            <img alt="logo" src={logo} />

          </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link style={{textAlign: 'right', color: 'white'}} eventKey="home" href="./home"> &#8249; Back to website</Nav.Link>
            </Nav>
          <Form inline>
            {signUpButton}
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}


export default LayoutHeader;
