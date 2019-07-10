import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
      <Button block color="secondary" style={{ position: 'absolute', left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
    )

    let backButtonMobile = ""

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
        fontSize: '25px',
        borderColor: '#2F353A',
        lineHeight: '25px',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
      }

      backButton = ""
    }
      return(
        <React.Fragment>
          {backButton}
          <Col sm="5" className="colStyle">
            <section id="mortgageForInvestment">
              <Form>
                <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
                  <h1 style={style}>Do you want a new mortgage for an investment property</h1>
                  <div style={{height: '10px'}}></div>
                  <Card style={{border: 'transparent'}}>
                    <p className="tiptext">
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimen book.
                    </p>
                  </Card>

                  <Form.Field>
                  <div style={{height: '100px'}}/>
                    <Row>
                      <Col>
                        <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.jumpToNewProperty} value="No">Yes </Button>
                      </Col>
                      <Col>
                        <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.jumpToSorry}>No</Button>
                      </Col>
                    </Row>
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
