import React, { Component } from 'react';
import {
  Col,
  FormGroup,
  Row,
} from 'reactstrap';

class Result extends Component {

  render() {

    let criteria = this.props.criteria ? (<Row>{this.props.criteria}</Row>) : ""
    return (
      <FormGroup row type="result"  style={{ backgroundColor: '#f0f3f5', marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
        <Row style={{ width: '100%'}}>
          <Col sm="1" style={{alignItems: 'center', justifyContent: 'center', display: 'flex', paddingRight: '0px' }}>
          <div>
            <img alt={this.props.logo} src={"http://app.ex4solutions.com/images/" + this.props.logo + ".png"} width="150px" height="50px"/>
          </div>
          </Col>
          <Col sm="4">
            <FormGroup style={{marginBottom: '0'}}>
              <div>
                <label style={{marginBottom: '0px', fontWeight: 700}}>{this.props.lender}</label>
              </div>
              <div>
                <Row style={{ width: '100%'}}>
                  <Col sm="4" style={{ paddingRight: '0px'}}>
                    <label className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.product}</label>
                  </Col>
                  <Col sm="4" style={{paddingLeft: '0px'}}>
                    <label className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.rate}</label>
                  </Col>
                  <Col sm="4" style={{paddingLeft: '0px'}}>
                    <label className="resultDetail" style={{marginBottom: '0px', color: '#384047'}}>{this.props.return}</label>
                  </Col>
                </Row>
                {criteria}
              </div>
            </FormGroup>
          </Col>
          <Col sm="7" style={{position: 'relative'}}>
          <div className="resultAmount">
            <label className="amount" style={{marginBottom: '0px'}}>{this.props.amount}</label>
          </div>
          </Col>
        </Row>
      </FormGroup>
    );
  }

}

export default Result;
