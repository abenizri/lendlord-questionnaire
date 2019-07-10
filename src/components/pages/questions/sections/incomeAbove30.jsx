import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Slider from '@material-ui/lab/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
  label: '15k',
  },
  {
  value: 25,
  label: '18k'
  },
  {
  value: 50,
  label: '20k',
  },
  {
  value: 75,
  label: '25k',
  },
  {
  value: 100,
  label: '30k',
  },
];


function valueLabelFormat(value) {
  let markObj = marks.find( x => x.value === value)
  return (markObj) ? markObj.label : '0%'
}

class IncomeAbove30 extends Component{
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
            lineHeight: '20px',
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
          }

          backButton = ""
          backButtonMobile = (
            <Col>
            <Button block color="secondary" style={{ position: 'absolute', left: '10%', top: '0%', width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>Back</Button>
            </Col>
          )
        }

        return(
          <React.Fragment>
            {backButton}
            <Col sm="5" className="colStyle">
            <section id="incomeAbove30">
              <Form>
              <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
                  <h1 style={style}>Is your annual income above one of the following?</h1>
                  <div style={{height: '10px'}}></div>
                  <Card style={{border: 'transparent', marginBottom: '0' }}>
                    <p style={{SegoePro:'14px', color:  '#636363', textAlign: 'center' }}>
                      Some lenders will not lend if your annual income is below one of the following amounts
                    </p>
                  </Card>
                  <Form.Field >
                  <FormGroup row type="question" style={{ marginBottom: '0.3rem',borderRadius: '0.5rem', marginRight: '0px', marginLeft: '0px'}}>
                    <Row style={{ width: '100%'}}>

                        <Col sm="10" style={{paddingRight: '0px', marginLeft: '30px'}}>
                        <FormGroup  sm="1" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                          <Input disabled bsSize="lg" onChange={this.props.handleChange('minimumIncome')}
                          defaultValue={valueLabelFormat(values.minimumIncome)} style={{ display: 'none', backgroundColor: 'transparent', width: '50px', paddingLeft: '12px', paddingRight: '12px'}} id="input-large" name="input-large" className="input-lg" placeholder="0" />
                        </FormGroup>
                        <Slider
                           defaultValue={parseInt(values.minimumIncome)}
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
                  <Row className="rowStyle oneBtn">
                    <Col>
                      <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="No">Next </Button>
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

export default IncomeAbove30;
