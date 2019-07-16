import React, { Component } from 'react';
import {
  Col,
  FormGroup,
  Row,
} from 'reactstrap';

class Result extends Component {

  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth
    }
  }

  renderProduct() {
    if(this.props.product) {
      return (
        <label id="product" className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.product}</label>
      )
    }
  }

  renderRate() {
    if(this.props.rate) {
      return (
        <label id="rate" className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.rate}</label>
      )
    }
  }

  renderReturn() {
    if(this.props.return) {
      return (
        <label id="return" className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.return}</label>
      )
    }
  }

  renderCriteriaMessages() {
    if(this.props.criteria) {
      return (
        <label id="return" className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.criteria}</label>
      )
    }
  }

  renderAmount() {
    if(this.props.amount) {
      return (
        <div className="resultAmount">
          <label className="amount" style={{marginBottom: '0px'}}>{this.props.amount}</label>
        </div>
      )
    }
  }

  render() {

    const { width } = this.state
    const isMobile = width <= 800

    if(!isMobile) {
      return (
        <FormGroup row type="result"  style={{ backgroundColor: '#f0f3f5', marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
          <Row style={{ width: '100%'}}>
            <Col sm="1" style={{alignItems: 'center', justifyContent: 'center', display: 'flex', paddingRight: '0px' }}>
            <div>
              <img alt={this.props.logo} src={"http://app.ex4solutions.com/images/" + this.props.logo + ".png"} width="30px" height="30px"/>
            </div>
            </Col>
            <Col sm="8">
              <FormGroup style={{marginBottom: '0'}}>
                <div>
                  <label style={{marginBottom: '0px', fontWeight: 700}}>{this.props.lender}</label>
                </div>
                <div>
                  <Row style={{ width: '100%'}}>
                    <Col sm={{size: 3, offset: 1}} style={{ paddingRight: '0px'}}>{this.renderProduct()}</Col>
                    <Col sm="3" style={{paddingLeft: '0px'}}>{this.renderRate()}</Col>
                    <Col sm="3" style={{paddingLeft: '0px'}}>{this.renderReturn()}</Col>
                    <Col sm={{size: 7, offset: 1}} style={{paddingLeft: '0px'}}>{this.renderCriteriaMessages()}</Col>
                  </Row>
                </div>
              </FormGroup>
            </Col>
            <Col sm="3" style={{position: 'relative'}}>{this.renderAmount()}</Col>
          </Row>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup row type="result"  style={{ backgroundColor: '#f0f3f5', marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
          <Row style={{ width: '100%'}}>
            <Col xs="1" style={{alignItems: 'center', justifyContent: 'center', display: 'flex', paddingRight: '0px' }}>
            <div>
              <img alt={this.props.logo} src={"http://app.ex4solutions.com/images/" + this.props.logo + ".png"} width="30px" height="30px"/>
            </div>
            </Col>
            <Col xs="8">
              <FormGroup style={{marginBottom: '0'}}>
                <div>
                  <label style={{marginBottom: '0px', fontWeight: 700}}>{this.props.lender}</label>
                </div>
                <div>
                  <Row style={{ width: '100%'}}>
                    <Col xs={{size: 3, offset: 1}} style={{ paddingRight: '0px'}}>{this.renderProduct()}</Col>
                    <Col xs="3" style={{paddingLeft: '0px'}}>{this.renderRate()}</Col>
                    <Col xs="3" style={{paddingLeft: '0px'}}>{this.renderReturn()}</Col>
                    <Col xs="8" style={{paddingLeft: '0px'}}>{this.renderCriteriaMessages()}</Col>
                  </Row>
                </div>
              </FormGroup>
            </Col>
            <Col xs="3" style={{position: 'relative'}}>{this.renderAmount()}</Col>
          </Row>
        </FormGroup>
      )
    }
  }


}

export default Result;
