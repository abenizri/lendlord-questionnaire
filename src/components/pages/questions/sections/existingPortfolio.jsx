import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import backButtonIcon from './../../../../assets/images/ico_arrow_left.svg';

import {
  Row,
  Col,
  Button,
  Card
} from 'reactstrap';

class ExistingPortfolio extends Component{

  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth

    };
  }

  componentDidMount(prevProps) {
    if (this.props.values.moreThan3PropWithLender === "Yes") {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  doChange(input) {
    document.querySelectorAll('[name="moreThan3PropWithLender"]').forEach( x => $(x).prop("checked", false))
    $(input).prop("checked", true);

    let elem = document.querySelector('[name="moreThan3PropWithLender"]:checked');
    if (elem && elem.value === "No") {
      this.setState({ isHidden: true });
    } else {
      this.setState({ isHidden: false });
    }
  }

  handleChangeLable = (e) => {
    let tagName = e.target.tagName
    let input = e.target

    if (tagName === 'LABEL') input = $(e.taeget).previousSibling
    if (tagName === 'DIV') input = $(e.taeget).find('input')

    this.doChange(input)
  }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    goToSignIn  = (e) => {
        e.preventDefault();
        this.props.jumpSteps(13);
    }

    goToSorry = (e) => {
        e.preventDefault();
        this.props.jumpSteps(14);
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
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

      return (
        <React.Fragment>
          {backButton}
          <Col sm="5" className="colStyle">
          <section id="existingPortfolio" >
            <Form >
            <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
              <h1 className="header">Are you interested in Remortgage opportunities on your existing portfolio</h1>
              <div style={{height: '10px'}}></div>
              <Card style={{border: 'transparent'}}>
                <p className="tiptext">We can provide you with ongoing insights on interest rate, capital raising, and remortgage opportunities</p>
              </Card>
              <div style={{height: '20px'}}/>
              <Row>
                <Col>
                  <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.goToSorry}>No</Button>
                </Col>
                <Col>
                  <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px'}} onClick={this.goToSignIn} value="No">Yes</Button>
                </Col>
              </Row>
              {backButtonMobile}
              </div>
            </Form>
          </section>
          </Col>
        </React.Fragment>
      );
    }
}

export default ExistingPortfolio;
