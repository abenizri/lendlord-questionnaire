import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Slider from '@material-ui/core/Slider';
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

const marks = [
{
  value: 0,
  label: '0%',
  },
  {
  value: 33,
  label: '20%',
  },
  {
  value: 66,
  label: '40%',
  },
  {
  value: 100,
  label: '45%',
  },
];


function valueLabelFormat(value) {
  let markObj = marks.find( x => x.value === value)
  return (markObj) ? markObj.label : '0%'
}

class IncomeTax extends Component{
    constructor(props) {
      super(props);

      this.state = {
        isHidden: true,
        width: window.innerWidth
      };

    }



    componentDidMount(props) {
      document.querySelector('.MuiSlider-rail').style.color = '#F5F5F5'
      document.querySelector('.MuiSlider-rail').style.height = '7px'

      document.querySelector('.MuiSlider-thumb').style.color = '#CCCCCC'


      document.querySelector('.MuiSlider-track').style.color = '#FF9F08'
      document.querySelector('.MuiSlider-track').style.height = '7px'
      document.querySelector('.MuiSlider-thumb').style.border = '#F5F5F5 solid 1px'
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
      let elem = document.querySelector('.MuiSlider-thumb.MuiSlider-active')
      if (elem) {
        let value = elem.getAttribute('aria-valuenow')
        let input = document.getElementById('input-large')
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(input, value);
        var ev2 = new Event('input', { bubbles: true});
        input.dispatchEvent(ev2);
      }
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
            <Button block color="secondary" style={{left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px', float: 'right'}} id="" onClick={this.back}>Back</Button>
            </Col>
          )
        }

        return(
          <React.Fragment>
            {backButton}
            <Col sm="5" className="colStyle">
            <section id="incomeTax">
              <Form>
              <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
                  <h1 className="header">What is your income tax band?</h1>
                  <div style={{height: '10px'}}></div>
                  <Card style={{border: 'transparent', marginBottom: '0' }}>
                    <p className="tiptext">
                      The tax band is important in order to understand how much you can borrow
                    </p>
                  </Card>
                  <Form.Field >
                  <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
                    <Row style={{ width: '100%'}}>

                        <Col sm="10" style={{paddingRight: '0px', marginLeft: '30px'}}>
                        <FormGroup  sm="1" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                          <Input disabled bsSize="lg" onChange={this.props.handleChange('incomeTaxBand1')}
                          defaultValue={valueLabelFormat(values.incomeTaxBand1)} style={{ display: 'none', backgroundColor: 'transparent', width: '50px', paddingLeft: '12px', paddingRight: '12px'}} id="input-large" name="input-large" className="input-lg" placeholder="0" />
                        </FormGroup>
                        <Slider
                           defaultValue={parseInt(values.incomeTaxBand1)}
                           valueLabelFormat={valueLabelFormat}
                           getAriaValueText={valueLabelFormat}
                           aria-labelledby="discrete-slider-restrict"
                           step={null}
                           valueLabelDisplay="auto"
                           marks={marks}
                           onChange={this.sliderChange}
                         />

                        </Col>
                      </Row>
                  </FormGroup>
                  </Form.Field>
                  <div style={{height: '20px'}}/>
                  <Row className="oneBtn">
                    {backButtonMobile}
                    <Col>
                      <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px'}}  onClick={this.saveAndContinue} value="No">Next</Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </section>
            </Col>
          </React.Fragment>
        )
    }
}

export default IncomeTax;
