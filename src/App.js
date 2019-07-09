import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import MainHeader from './components/layouts/website/mainLayout.js'
import MainLayout  from './components/layouts/shortForm/mainLayout.js'

function App() {
  return (
    <Router >
      <Switch>
        <Route path='/home' component={MainHeader}/>
        <Route path='/questions' component={MainLayout}/>
        <Redirect from="/" to="/questions"/>
      </Switch>
    </Router>
  );
}

export default App;
