import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './../../../../assets/images/house2.jpg';
import { Form, FormGroup,  Button , Input} from 'reactstrap';

class SignUp extends Component {
  render() {

    return (
      <React.Fragment>

      <section id="signUp" >
      <div style={{height: '100px'}}>
      </div>
      <div className="align-items-center" style={{height: '1000px', width: '100%'  ,justifyContent: 'center', alignItems: 'center',  display: 'flex', flexDirection: 'column', backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage:  `url(${Background})`}}>
         <Form style={{width: '664px'}}>
           <FormGroup>
            <Input type="email" placeholder="Email" />
           </FormGroup>
           <Button block variant="warning"  type="submit" color="warning" className="btn-pill" style={{backgroundColor: 'rgba(242, 134, 10, 1)'}} >Get Started </Button>
         </Form>
       </div>
      </section>
      </React.Fragment>
    );
  }
}


export default SignUp;
