import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'


function productReducer(state = [], action) {
  return 'product';
}

function userReducer(){
  return 'avi';
}

const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
})

const store = createStore(
    allReducers,
    {
      products: [ { 'name': 'iphone' } ],
      users: 'nir'
    }
  )


 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
