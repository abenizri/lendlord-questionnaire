import React, { Component } from 'react';
import circleDone from './../../../assets/images/ico-done.svg';
import circleCurrent from './../../../assets/images/ico-current.svg';
import circleNext from './../../../assets/images/ico-next.svg';

const sideBarObjects =
["Interest", "New Mortgage", "Results", "Sign Up"]

class SideBarLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: '1',
      width: window.innerWidth,
      activeTab: '1',
      previousStep: ''
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
    // console.log(nextProps.step)
    let previous, next, current
    switch(nextProps.step) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      case 6:
      case 11:
        previous = document.querySelector('[step="1"]')
        next = document.querySelector('[step="3"]')
        current = document.querySelector('[step="2"]')
        break;
      case 7:
      case 8:
      case 9:
      case 12:
        previous = document.querySelector('[step="2"]')
        next = document.querySelector('[step="4"]')
        current = document.querySelector('[step="3"]')
        break;
      case 10:
        previous = document.querySelector('[step="3"]')
        next = document.querySelector('[step="5"]')
        current = document.querySelector('[step="4"]')
        break;
      case 13:
        previous = document.querySelector('[step="4"]')
        next = ""
        current = document.querySelector('[step="5"]')
        break;
      default:
        break;
    }
    if (current) {
      current.querySelector('img').src = circleCurrent
      if (current.querySelector('span')) {
        current.querySelector('span').style.color = '#74818F'
      }

    }
    if (previous) {
      previous.querySelector('img').src = circleDone
      if (previous.querySelector('span')) {
        previous.querySelector('span').style.color = '#FF9F08'
      }

    }
    if (next) {
      next.querySelector('img').src = circleNext
      if (next.querySelector('span')) {
        next.querySelector('span').style.color = '#CCCCCC'
      }
    }

    this.setState({
      previousStep: this.state.step,
      step: nextProps.step
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
        <ul style={{ float: 'left', paddingInlineStart: '0px', marginLeft: '80px', fontSize: '14px'}}>
          <li step="1" style={{listStyle: 'none', paddingBottom: '6px'}}>
           <img src={circleCurrent} alt="" style={{marginBottom: '3px',  width: '12px', height: '12px', display: 'inline-table'}} className="checkCircle"/>
           <span style={{marginLeft: '20px'}}>Portfolio</span>
          </li>
          {this.renderListItems()}
        </ul>
      </React.Fragment>
    );
      }
  }
}

export default SideBarLayout;
