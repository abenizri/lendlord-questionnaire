import React from 'react';
import logo from './assets/images/logo-dark.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainHeader from './components/layouts/website/mainLayout.js'
import Questions  from './components/layouts/shortForm/mainLayout.js'

function App() {
  return (
    <Router >
      <Route path='/home' component={MainHeader}/>
      <Route path='/questions' component={Questions}/>
    </Router>
  );
}

export default App;
