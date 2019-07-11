import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout  from './components/layouts/shortForm/mainLayout.js'
import SignupLayout  from './components/layouts/shortForm/signUpLayout.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainLayout}/>
        <Route path="/signup" component={SignupLayout}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
