import React, { Component } from 'react';
import LayoutHeader from './layoutHeader.js'
import SideBarLayout from './sideBarLayout.js'
import Questions from '../../../components/pages/questions/questions.js'
import Signup from './../../pages/questions/sections/signUp.jsx';
import {
  Row,
  Col,
  FormGroup
} from 'reactstrap';

class MainLayout extends Component {

  constructor(props){
    super(props);

    this.state = {
        step: 13
    }
  }

  updateStep = num => {
      this.setState({
          step : num
      })
  }

  render() {
    return (
      <React.Fragment>
        <LayoutHeader updateStep={this.updateStep} step={this.state.step}/>
        <FormGroup>
          <div className="container-fluid">
            <Row style={{ paddingTop: "150px"}} className="no-gutters">
              <Col xl="2" lg="3" sm="3">
                <div>
                  <SideBarLayout updateStep={this.updateStep} step={this.state.step}/>
                </div>
              </Col>
              <Col xl="9" lg="8" sm="9">
                <Row  style={{ justifyContent: "center", alignItems: "center", display: "flex", height: '100%'}}>
                <Signup/>
                </Row>
              </Col>
            </Row>
          </div>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default MainLayout;
