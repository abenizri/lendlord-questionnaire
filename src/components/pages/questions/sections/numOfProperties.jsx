import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import backButtonIcon from './../../../../assets/images/ico_arrow_left.svg';

import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Card
} from 'reactstrap';



function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

class NumOfProperties extends Component{
    constructor(props) {
      super(props);

      this.state = {
        width: window.innerWidth,
      };

    }

    componentDidMount(props) {
      // console.log(this.props)
      document.querySelector('.MuiSlider-rail').style.color = '#F5F5F5'
      document.querySelector('.MuiSlider-rail').style.height = '7px'

      document.querySelector('.MuiSlider-thumb').style.color = 'white'


      document.querySelector('.MuiSlider-track').style.color = '#FF9F08'
      document.querySelector('.MuiSlider-track').style.height = '7px'
      document.querySelector('.MuiSlider-thumb').style.border = '#9C9C9C solid 1px'
      document.querySelector('.MuiSlider-thumb').style.width = '16px'
      document.querySelector('.MuiSlider-thumb').style.height = '16px'

    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    sliderChange = (e) => {
     e.preventDefault();
      let elem = document.querySelector('.MuiSlider-root input')
      if (elem) {
        setTimeout(() => {
          let value = elem.getAttribute('value')
          let input = document.getElementById('input-large')
          var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
          nativeInputValueSetter.call(input, value);
          var ev2 = new Event('input', { bubbles: true});
          input.dispatchEvent(ev2);
        }, 50)
      }
    }

    updateSlider () {
        const elem = document.getElementById('input-large')
        const thumbIcon = document.querySelector('.MuiSlider-root .MuiSlider-thumb')
        const track = document.querySelector('.MuiSlider-root .MuiSlider-track')
        const input = document.querySelector('.MuiSlider-root input')
        const value = elem.value
        let width = value * 4
        if(width > 100) width = 100
        if (width < 0) width = 0
        thumbIcon.style.left = width + '%'
        track.style.width = width + '%'
        input.value = value
      }

    render(){
        const { values } = this.props
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
            <Button block color="secondary" style={{ position: 'absolute', left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
            </Col>
          )
        }

        return (
            <React.Fragment>
            {backButton}
            <Col sm="6" className="colStyle">
              <section id="numOfProperties">
                <Form>
                <div style={{  width: '100%' , paddingLeft: '15px'}}>
                  <h3 className="header">How many properties do you have in your portfolio?</h3>
                  <div style={{height: '10px'}}></div>
                  <Card style={{border: 'transparent', marginBottom: '0' }}>
                    <p className="tiptext">Some lenders limit the portfolio size in order to provide new mortgage</p>
                  </Card>
                  <Form.Field style={{marginLeft: '10%'}}>
                    <FormGroup className="col-sm-10" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                      <Input bsSize="lg" onChange={(e) => {this.props.handleChange('numOfProperties'); this.updateSlider()}}
                      defaultValue={values.numOfProperties} style={{backgroundColor: 'transparent', width: '50px', paddingLeft: '12px', paddingRight: '12px'}} id="input-large" name="input-large" className="input-lg" placeholder="0" />
                    </FormGroup>
                    <Col sm="10" >
                      <FormGroup >
                        <Slider
                          ValueLabelComponent={ValueLabelComponent}
                          aria-label="Custom thumb label"
                          defaultValue={parseInt(values.numOfProperties)}
                          max={25}
                          onChange={this.sliderChange}
                          />
                      </FormGroup>
                    </Col>
                  </Form.Field>
                  <div style={{height: '20px'}}/>
                  <Row className="oneBtn">
                    <Col>
                      <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="No">Next</Button>
                    </Col>
                    {backButtonMobile}
                  </Row>
                </div>
              </Form>
            </section>
          </Col>
          </React.Fragment>
        )
    }
}

export default NumOfProperties;
