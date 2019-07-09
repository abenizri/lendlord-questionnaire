import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Col, Row, Button, Card } from "reactstrap";

class RemortgageQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      width: window.innerWidth

    };
  }

  componentDidMount(prevProps) {}

  back = e => {
    e.preventDefault();
    this.props.jumpSteps(10);
  };

  handleChange = e => {
    $('[name="moreThan3PropWithLender"]').prop("checked", false);
    $(e.target).prop("checked", true);
    let elem = document.querySelector('[name="moreThan3PropWithLender"]:checked');
    if (elem && elem.value === "No") {
      this.setState({ isHidden: true });
    } else {
      this.setState({ isHidden: false });
    }
  };

  saveAndContinue = e => {
    this.props.nextStep();
  };

  render() {

    const { width } = this.state;
    const isMobile = width <= 800;

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
        fontSize: '23px',
        borderColor: '#2F353A',
        lineHeight: '25px',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"

      }
    }

    return (
      <Col sm="5" className="colStyle">
      <section id="RemortgageQuestion">
        <Form>
        <div style={{  width: '100%' , paddingLeft: '15px', paddingRight: '15px'}}>
          <h1 style={style}>Are you interested in new mortgage for new investment property?</h1>
          <div style={{height: '10px'}}></div>

          <Card style={{border: 'transparent'}}>
            <p style={{SegoePro:'14px', color:  '#636363', textAlign: 'center' }}>
              Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </Card>

          <Form.Field style={{ marginLeft: "100px" }}>

          </Form.Field>
          <Row className="rowStyle">
            <Col>
              <Button block  color="warning" style={{width: '100px', color: '#fff', backgroundColor: '#FF9F08', padding: '0', borderRadius: '4px', height: '34px', float: 'right'}}  onClick={this.saveAndContinue} value="No">Yes </Button>
            </Col>
            <Col>
              <Button block color="secondary" style={{ width: '100px', padding: '0', backgroundColor: '#74818F', borderRadius: '4px', height: '34px'}} id="" onClick={this.back}>No</Button>
            </Col>
          </Row>
        </div>
        </Form>
      </section>
      </Col>
    );
  }
}

export default RemortgageQuestion;