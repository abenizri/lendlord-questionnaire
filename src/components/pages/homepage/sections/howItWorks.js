import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';

class HowItWorks extends Component {
  render() {

    return (
      <React.Fragment>
      <section id="howItWorks">
      <div style={{height: '120px'}}>
      </div>
        <div className="align-items-center" style={{justifyContent: 'center', alignItems: 'center',  display: 'flex', flexDirection: 'column'}}>
          <div>
            <h3 className="font_3" style={{fontSize:'46px', lineHeight:'34px', textAlign:'center',color: 'rgba(242, 134, 10, 1)' }}>How It Works</h3>
            </div>
          <Row>
            <Col sm="4">
              <div data-packed="true" style={{width: '310px', pointerEvents: 'none', float: 'right'}} className="txtNew" id="comp-irqduxb1">
                <h4 className="font_4">
                  <span style={{color:'#000000'}}>Enter a client profile on:<br/>
                    Buy to Let or Residential
                  </span>
                </h4>
              </div>
            </Col>
            <Col sm="4">
            <div data-packed="true" style={{width: '310px', pointerEvents: 'none'}} className="txtNew" id="comp-irqduxb1">
              <img style={{width: '396px', height: '304px'}} alt="Form"  src="https://ucaab054dc14449ce1424c1c9d45.previews.dropboxusercontent.com/p/thumb/AAeZko9iuDSZXEsmPdVxKy4LDX4vQVFAwgkdcrIk4y-c8dq-NXJcKCCBzbn1oQQAmt2Nq9-oDvba2PcHPzs6L8xDsp4wd1k9r5fbXf90eCTK50Qn4tXaLNwc5avCc9a2kRfed2qeGsKVJmDQP7Rj1frS4rPGrY8a6K7HjurAZkZqGWvh_9yo6vdBbBaabVYsjx1hFKHxc6TQJDOeT7wnWWgsmTlAvHSWR5E-AwVNgXg0-h0SnxT1W3hDGrSMgLfA4NFI2IEeVyFyoD68xI93TArbUKrJPlM58Y7rxE23GxjBr0tQjxrDayFmkoDY6W8F0bhbydXskhxv_ELLymBqKODv/p.png?fv_content=true&size_mode=5"/>
            </div>
            </Col>
          </Row>
          <div style={{height: '120px'}}>
          </div>
          <Row>
          <Col sm="4">
          <div data-packed="true" style={{width: '310px', pointerEvents: 'none', float: 'right'}} className="txtNew" id="comp-irqduxb1">
            <img src="https://ucda4bb76ab5c873e5cf188bc0eb.previews.dropboxusercontent.com/p/thumb/AAd-qLDycTLbH3sRzb8HrMPEbIEsOKJeVjSuzSUUh7YTXlE8Px7OR8srKizSAV4XzyK2oRA7tqkVEg_yLXC_iTO5UF3_3i4c0veaTM7FQZWC-qIs5CWe_kF0g73_59kGOCjyq6T2SPN55tTGhuK21zbLkXhkMUtZIXQ6JEJzKAeT1turd6FySQJMCaVJhOPfROvk6GZ945chLOW62by68tskijJiO3VWggCrdd67uvApS346d_eSKFHcxLta35YLgMfsrGyUFypdTopnY7un4mPxhJrmFkNAjDWpjEvbjfc-Vtq6AWvXvWKOv3DQzlveml_LpD0kWcL4epe9TxfizXSD/p.png?fv_content=true&size_mode=5" style={{width: '396px', height: '304px'}} alt="Results"/>
          </div>
          </Col>
            <Col sm="8">
              <div data-packed="true" style={{width: '310px', pointerEvents: 'none', float: 'right'}} className="txtNew" id="comp-irqduxb1">
                <h4 className="font_4">
                  <span style={{color:'#000000'}}>Get affordability results from selected Lenders
                  </span>
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      </React.Fragment>
    );
  }
}


export default HowItWorks;
