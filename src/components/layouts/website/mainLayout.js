import React, { Component } from 'react';
import LayoutHeader from './layoutHeader.js'
import Homepage from '../../../components/pages/homepage/homePage.js'

class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <LayoutHeader/>
        <Homepage/>
      </React.Fragment>
    );
  }
}

export default MainLayout;
