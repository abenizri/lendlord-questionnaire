import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
          fontSize: '20px',
          borderColor: '#2F353A',
          lineHeight: '25px',
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }
      }
      return (
        <Col sm="5" className="colStyle">
        <section id="existingPortfolio" >
          <Form >
          <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
            <h1 style={style}>Are you interested in Remortgage opportunities on your existing portfolio</h1>
            <div style={{height: '10px'}}></div>
            <Card style={{border: 'transparent'}}>
              <p className="tiptext">We can provide you with ongoing insights on interest rate, capital raising, and remortgage opportunities</p>
            </Card>
            <div style={{height: '100px'}}/>
            <Row>
              <Col>
                <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.goToSignIn} value="No">Yes </Button>
              </Col>
              <Col>
                <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.goToSorry}>No</Button>
              </Col>
            </Row>
            </div>
          </Form>
        </section>
        </Col>
      );
    }
}

export default ExistingPortfolio;
