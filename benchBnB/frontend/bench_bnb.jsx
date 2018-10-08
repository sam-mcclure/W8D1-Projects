import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './actions/session_actions';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //Testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Helloooooo</h1>, root);
});
