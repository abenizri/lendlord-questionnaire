import React, { Component } from 'react';
import circleDone from './../../../assets/images/ico-done.svg';
import circleCurrent from './../../../assets/images/ico-current.svg';
import circleNext from './../../../assets/images/ico-next.svg';

const sideBarObjects =
["Properties", "Lender", "Total Balance", "LTV", "Invesments", "Total Value", "Annual Income", "Income Tax", "Results", "New Mortgage", "Sign Up"]

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
    let previous = document.querySelector('[step="' + (nextProps.step - 1) + '"]')
    let next = document.querySelector('[step="' + nextProps.step +  1 + '"]')
    let current =   document.querySelector('[step="' + nextProps.step+ '"]')
    if (current) {
      document.querySelector('[step="' + nextProps.step + '"] img').src = circleCurrent
      if (document.querySelector('[step="' + nextProps.step + '"] span')) {
        document.querySelector('[step="' + nextProps.step + '"] span').style.color = '#74818F'
      }

    }
    if (previous) {
      document.querySelector('[step="' + (nextProps.step - 1) + '"] img').src = circleDone
      if (document.querySelector('[step="' + (nextProps.step - 1) + '"] span')) {
        document.querySelector('[step="' + (nextProps.step - 1) + '"] span').style.color = '#FF9F08'
      }

    }
    if (next) {
      document.querySelector('[step="' + nextProps.step + 1 + '"] img').src = circleNext
      if (document.querySelector('[step="' + nextProps.step + 1 + '"] span')) {
        document.querySelector('[step="' + nextProps.step + 1 + '"] span').style.color = '#CCCCCC'
      }
    }

    this.setState({
      step: nextProps.step,
    })
  }

  renderListItems() {
    return sideBarObjects.map((obj, key) => {
      key = key + 2
      return (
        <li key={key} step={key} style={{listStyle: 'none', paddingBottom: '6px'}}>
          <img src={circleNext} alt="circleNext" style={{marginBottom: '3px',  width: '12px', height: '12px', display: 'inline-table'}} className="checkCircle"/>
          <span style={{marginLeft: '20px', color: '#CCCCCC'}}>{obj}</span>
        </li>
      )
    })
  }

  renderMobileItems() {
    return sideBarObjects.map((obj, key) => {
      key = key + 2
      return (
        <div key={key} step={key} className="stepwizard-step" style={{marginRight: '4px'}}>
            <img src={circleNext} alt="circleNext" style={{marginBottom: '3px', width: '16px', height: '16px', display: 'inline-table'}} className="checkCircle"/>
        </div>
      )
    })
  }

  render() {
    
    const { width } = this.state;
    const isMobile = width <= 800;

    if (isMobile) {
      return (
        <div style={{  justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
          <div className="stepwizard" style={{width: '80%'}}>
            <div className="stepwizard-row setup-panel d-flex">
              <div step="1"  className="stepwizard-step" style={{marginRight: '4px'}}>
                <img src={circleCurrent} alt="circleCurrent" style={{marginBottom: '3px',  width: '16px', height: '16px', display: 'inline-table'}} className="checkCircle"/>
              </div>
              {this.renderMobileItems()}
            </div>
          </div>
          <div style={{ height: '80px'}}> </div>
        </div>
      )
    } else {

    return (

      <React.Fragment>
        <ul style={{ float: 'left', paddingInlineStart: '0px', marginLeft: '80px', fontSize: '12px'}}>
          <li step="1" style={{listStyle: 'none', paddingBottom: '8px'}}>
           <img src={circleCurrent} alt="" style={{marginBottom: '3px',  width: '12px', height: '12px', display: 'inline-table'}} className="checkCircle"/>
           <span style={{marginLeft: '20px'}}>Landlord</span>
          </li>
          {this.renderListItems()}
        </ul>
      </React.Fragment>
    );
      }
  }
}

export default SideBarLayout;
