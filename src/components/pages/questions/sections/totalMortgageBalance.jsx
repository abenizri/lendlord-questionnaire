import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import backButtonIcon from './../../../../assets/images/ico_arrow_left.svg';

import { Card, Col, FormGroup, Input, Row, Button } from "reactstrap";

class TotalMortgageBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth
    };
  }

  componentDidMount(prevProps) {
    document.getElementById('btnNext').disabled = true
    if (this.props.values.moreThan3PropWithLender === "Yes") {
      this.setState({ isHidden: false });
    } else {
      this.setState({ isHidden: true });
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  saveAndContinue = e => {
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    const { width } = this.state;
    const isMobile = width <= 800;

    let backButton = (
      <Button className="backButtonIcon" onClick={this.back}>
      <img src={backButtonIcon} alt="back"/>
      </Button>
    )
    let backButtonMobile = ""

    if (isMobile) {
      backButton = ""
      backButtonMobile = (
        <Col>
        <Button block color="secondary" style={{ left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.back}>Back</Button>
        </Col>
      )
    }

    return (
      <React.Fragment>
        {backButton}
        <Col sm="5" className="colStyle">
          <section id="moreThan3PropProperties">
            <Form>
              <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
                <h1 className="header">What is the total mortgages balance with this Lender?</h1>
                <div style={{height: '10px'}}/>
                <Card style={{border: 'transparent', marginBottom: '0' }}>
                  <p className="tiptext">If you’re not sure, you can put an approximate number</p>
                </Card>
                <Form.Field >
                  <React.Fragment>
                    <FormGroup className="col-sm-12" type="question" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                      <Col sm="9" style={{ paddingRight: '0px', marginLeft: '-15px'}}>
                        <div className="input-prepend input-group">
                          <div className="input-group-prepend">
                            <span style={{ backgroundColor: 'white' }} className="input-group-text">£</span>
                          </div>
                          <Input id="totalMortgagesBalanceForLender"
                           onChange={this.props.handleChange('totalMortgagesBalanceForLender')}
                           defaultValue={values.totalMortgagesBalanceForLender} maxLength="10" type="tel" className="form-control commaNormalized" placeholder="0" required="required"/>
                        </div>
                      </Col>
                    </FormGroup>
                  </React.Fragment>
                </Form.Field>
                <div style={{height: '20px'}}/>
                <Row className="oneBtn">
                  {backButtonMobile}
                  <Col>
                    <Button block id="btnNext" color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px'}}  onClick={this.saveAndContinue} value="Next">Next</Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </section>
        </Col>
      </React.Fragment>
    );
  }
}

export default TotalMortgageBalance;
