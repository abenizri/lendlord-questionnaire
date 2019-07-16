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
      return this.props.criteria.map((message, key) => {
        return (
          <label key={key} id="return" className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{message}</label>
        )
      })
    }
  }

  renderAmount() {
    if(this.props.amount) {
      return (
        <div className="resultAmount">
          <label id="amount" className="amount" style={{marginBottom: '0px'}}>{this.props.amount}</label>
        </div>
      )
    }
  }

  render() {

    const { width } = this.state
    const isMobile = width <= 800

    let productsContent = this.props.amount.includes("criteria") ?
    (
      <React.Fragment>
        <Col xs="6">
          <FormGroup style={{marginBottom: '0'}}>
            <div>
              <label style={{marginBottom: '0px', fontWeight: 700, fontSize: '14px'}}>{this.props.lender}</label>
            </div>
            <div>
              <Row style={{ width: '100%', fontSize: '8px'}}>
                <Col xs={{size: 3, offset: 1}} style={{ paddingRight: '2px', paddingLeft: '2px'}}>{this.renderProduct()}</Col>
                <Col xs="3" style={{paddingRight: '2px', paddingLeft: '2px'}}>{this.renderRate()}</Col>
                <Col xs="3" style={{paddingRight: '2px', paddingLeft: '2px'}}>{this.renderReturn()}</Col>
                <Col xs="8" style={{paddingLeft: '16px'}}>{this.renderCriteriaMessages()}</Col>
              </Row>
            </div>
          </FormGroup>
        </Col>
        <Col xs="5" style={{position: 'relative', fontSize: '12px'}}>{this.renderAmount()}</Col>
      </React.Fragment>
    ) :
    (
      <React.Fragment>
        <Col xs="8">
          <FormGroup style={{marginBottom: '0'}}>
            <div>
              <label style={{marginBottom: '0px', fontWeight: 700, fontSize: '14px'}}>{this.props.lender}</label>
            </div>
            <div>
              <Row style={{ width: '100%', fontSize: '8px'}}>
                <Col xs={{size: 3, offset: 1}} style={{ paddingRight: '2px', paddingLeft: '2px'}}>{this.renderProduct()}</Col>
                <Col xs="3" style={{paddingRight: '2px', paddingLeft: '2px'}}>{this.renderRate()}</Col>
                <Col xs="3" style={{paddingRight: '2px', paddingLeft: '2px'}}>{this.renderReturn()}</Col>
                <Col xs="8" style={{paddingLeft: '16px'}}>{this.renderCriteriaMessages()}</Col>
              </Row>
            </div>
          </FormGroup>
        </Col>
        <Col xs="3" style={{position: 'relative', fontSize: '12px'}}>{this.renderAmount()}</Col>
      </React.Fragment>
    )
    if(!isMobile) {
      productsContent = this.props.amount.includes("criteria") ?
      (
        <React.Fragment>
          <Col sm="5">
            <FormGroup style={{marginBottom: '0'}}>
              <div>
                <label style={{marginBottom: '0px', fontWeight: 700, fontSize: '14px'}}>{this.props.lender}</label>
              </div>
              <div>
                <Row style={{ width: '100%', fontSize: '8px'}}>
                  <Col sm="12" style={{paddingLeft: '16px'}}>{this.renderCriteriaMessages()}</Col>
                </Row>
              </div>
            </FormGroup>
          </Col>
          <Col sm="6" style={{position: 'relative', fontSize: '12px'}}>{this.renderAmount()}</Col>
        </React.Fragment>
      ) :
      (
        <React.Fragment>
          <Col sm="8">
            <FormGroup style={{marginBottom: '0'}}>
              <div>
                <label style={{marginBottom: '0px', fontWeight: 700, fontSize: '14px'}}>{this.props.lender}</label>
              </div>
              <div>
                <Row style={{ width: '100%', fontSize: '8px'}}>
                  <Col xs={{size: 3}} style={{ paddingRight: '2px', paddingLeft: '16px'}}>{this.renderProduct()}</Col>
                  <Col sm="3" style={{paddingRight: '2px', paddingLeft: '2px'}}>{this.renderRate()}</Col>
                  <Col sm="3" style={{paddingRight: '2px', paddingLeft: '2px'}}>{this.renderReturn()}</Col>
                </Row>
              </div>
            </FormGroup>
          </Col>
          <Col sm="3" style={{position: 'relative', fontSize: '12px'}}>{this.renderAmount()}</Col>
        </React.Fragment>
      )
      return (
        <FormGroup row type="result"  style={{ backgroundColor: '#f0f3f5', marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
          <Row style={{ width: '100%'}}>
            <Col sm="1" style={{alignItems: 'center', justifyContent: 'center', display: 'flex', paddingRight: '0px' }}>
            <div>
              <img alt={this.props.logo} src={"http://app.ex4solutions.com/images/" + this.props.logo + ".png"} width="30px" height="30px"/>
            </div>
            </Col>
            {productsContent}
          </Row>
        </FormGroup>
      );
    } else {
      return (
        <FormGroup row type="result"  style={{ backgroundColor: '#f0f3f5', marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
          <Row style={{marginLeft: '0px', width: '100%'}}>
            <Col xs="1" style={{alignItems: 'center', justifyContent: 'center', display: 'flex', paddingRight: '0px' }}>
            <div>
              <img alt={this.props.logo} src={"http://app.ex4solutions.com/images/" + this.props.logo + ".png"} width="30px" height="30px"/>
            </div>
            </Col>
            {productsContent}
          </Row>
        </FormGroup>
      )
    }
  }


}

export default Result;
