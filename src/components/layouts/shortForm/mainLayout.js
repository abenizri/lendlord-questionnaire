import React, { Component } from 'react';
import LayoutHeader from './layoutHeader.js'
import SideBarLayout from './sideBarLayout.js'
import Questions from '../../../components/pages/questions/questions.js'
import {
  Row,
  Col,
  FormGroup
} from 'reactstrap';

class MainLayout extends Component {

  constructor(props){
    super(props);

    this.state = {
        step: 1
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
        <LayoutHeader/>
        <FormGroup>
          <Row style={{ paddingTop: "150px"}}>
            <Col xl="2">
              <div>
                <SideBarLayout updateStep={this.updateStep} step={this.state.step}/>
              </div>
            </Col>
            <Col sm="9">
              <div  style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
              <Questions
                updateStep={this.updateStep}
              />
              </div>
            </Col>
          </Row>
      </FormGroup>
      </React.Fragment>
    );
  }
}

export default MainLayout;
