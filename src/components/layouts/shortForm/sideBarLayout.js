import React, { Component } from 'react';
import circleDone from './../../../assets/images/ico-done.svg';
import circleCurrent from './../../../assets/images/ico-current.svg';
import circleNext from './../../../assets/images/ico-next.svg';

class SideBarLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: '1',
      width: window.innerWidth,
      activeTab: '1'
    };
    this.toggle = this.toggle.bind(this);

  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab,
        });
      }
    }

  componentWillReceiveProps(nextProps) {
    let previous = document.querySelector(`[step='${nextProps.step - 1}`)
    let next = document.querySelector(`[step='${nextProps.step + 1}`)
    let current =   document.querySelector(`[step='${nextProps.step}']`)
    if (current) {
      document.querySelector(`[step='${nextProps.step}'] img`).src = circleCurrent
      if (document.querySelector(`[step='${nextProps.step}'] span`)) {
        document.querySelector(`[step='${nextProps.step}'] span`).style.color = '#74818F'
      }

    }
    if (previous) {
      document.querySelector(`[step='${nextProps.step - 1}'] img`).src = circleDone
      if (document.querySelector(`[step='${nextProps.step - 1}'] span`)) {
        document.querySelector(`[step='${nextProps.step - 1}'] span`).style.color = '#FF9F08'
      }

    }
    if (next) {
      document.querySelector(`[step='${nextProps.step + 1}'] img`).src = circleNext
      if (document.querySelector(`[step='${nextProps.step + 1}'] span`)) {
        document.querySelector(`[step='${nextProps.step + 1}'] span`).style.color = '#CCCCCC'
      }
    }

    this.setState({
      step: nextProps.step,
    })
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const { width } = this.state;
    const isMobile = width <= 800;

    if (isMobile) {
       return (
         <div style={{  justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <div className="stepwizard">
            <div className="stepwizard-row setup-panel d-flex">
               <div step="1"  className="stepwizard-step">
                  <img src={circleCurrent} style={{marginBottom: '3px',  width: '20px', height: '20px', display: 'inline-table'}} className="checkCircle"/>
               </div>

               <div step="2" className="stepwizard-step">
                   <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table'}} className="checkCircle"/>
               </div>
               <div step="3" className="stepwizard-step">
                 <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
               </div>
               <div step="4" className="stepwizard-step">
                 <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
               </div>
               <div step="5" className="stepwizard-step">
                  <img src={circleNext} style={{marginBottom: '3px',  width: '20px', height: '20px', display: 'inline-table'}} className="checkCircle"/>
               </div>

               <div step="6" className="stepwizard-step">
                   <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table'}} className="checkCircle"/>
               </div>
               <div step="7" className="stepwizard-step">
                 <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
               </div>
               <div step="8" className="stepwizard-step">
                 <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
               </div>
               <div step="9" className="stepwizard-step">
                 <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
               </div>
            </div>
         </div>
         <div style={{ height: '80px'}}>
         </div>
        </div>

       )
    } else {

    return (

      <React.Fragment>
        <ul style={{ float: 'right'}}>
          <li step="1" style={{listStyle: 'none'}}>
            <img src={circleCurrent} style={{marginBottom: '3px',  width: '20px', height: '20px', display: 'inline-table'}} className="checkCircle"/>
            <span style={{marginLeft: '20px'}}>Landlord</span>
          </li>
          <li step="2" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table'}} className="checkCircle"/>
              <span style={{marginLeft: '20px', color: '#CCCCCC' }}>properties</span>
          </li>
          <li step="3" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
            <span style={{marginLeft: '20px', color: '#CCCCCC' }}>Lender</span>
          </li>
          <li step="4" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
              <span style={{marginLeft: '20px', color: '#CCCCCC' }}>LTV</span>
          </li>
          <li step="5" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
            <span style={{marginLeft: '20px', color: '#CCCCCC' }}>Investment</span>
          </li>
          <li step="6" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
            <span style={{marginLeft: '20px', color: '#CCCCCC' }}>Total Value</span>
          </li>
          <li step="7" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
            <span style={{marginLeft: '20px', color: '#CCCCCC' }}>Income Tax</span>
          </li>
          <li step="8" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
            <span style={{marginLeft: '20px', color: '#CCCCCC' }}>Results</span>
          </li>
          <li step="9" style={{listStyle: 'none'}}>
            <img src={circleNext} style={{marginBottom: '3px', width: '20px', height: '20px', display: 'inline-table' }} className="checkCircle"/>
            <span style={{marginLeft: '20px', color: '#CCCCCC' }}>Sign up</span>
          </li>
        </ul>

      </React.Fragment>
    );
      }
  }
}

export default SideBarLayout;
