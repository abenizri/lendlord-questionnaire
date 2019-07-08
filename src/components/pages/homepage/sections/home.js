import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './../../../../assets/images/house.jpg';
import { FormGroup,  Button } from 'reactstrap';

class Home extends Component {
  render() {

    return (
      <React.Fragment>
      <section id="home" style={{height: '500px', width: '100%' ,backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage:  `url(${Background})`}}>
      <FormGroup>
        <div style={{paddingTop: '200px'}}>
          <h3 className="font_3" style={{fontSize:'46px', lineHeight:'34px', textAlign:'center'}}>
            <span style={{fontSize:'46px'}}>
              <span style={{lineHeight: '34px', color:'#fff'}}>Communicate With </span>
              <span style={{lineHeight: '34px',color:'#F2860A'}}>All</span>
              <span style={{lineHeight: '34px',color:'#fff'}}> Lenders<br/> in </span>
              <span style={{lineHeight: '34px',color:'#F2860A'}}>One</span>
              <span style={{lineHeight: '34px',color:'#fff'}}> Place</span>
              </span>
          </h3>
          <div style={{paddingTop: '50px'}}>
            <h3 className="font_3" style={{fontSize:'26px', lineHeight:'34px', textAlign:'center'}}>
              <span style={{fontSize:'20px'}}>
                <span style={{lineHeight: '34px', color:'#fff'}}>Get the most accurate Lenders affordability results on both </span>
                <span style={{lineHeight: '34px',color:'#F2860A'}}>Residential</span>
                <span style={{lineHeight: '34px',color:'#fff'}}> and<br/> in </span>
                <span style={{lineHeight: '34px',color:'#F2860A'}}>Buy to Let</span>
              </span>
            </h3>
          </div>
          <div className="align-items-center" style={{justifyContent: 'center', alignItems: 'center',  display: 'flex', flexDirection: 'column', paddingTop: '20px'}}>
            <Button block href="#signUp" color="warning" className="btn-pill" style={{backgroundColor: 'rgba(242, 134, 10, 1)' , borderColor: 'rgba(242, 134, 10, 1)', width: '300px', borderRadius:' 1.35rem'}} >Start your 30 days free trial </Button>
          </div>
        </div>
      </FormGroup>
      </section>
      </React.Fragment>
    );
  }
}


export default Home;
