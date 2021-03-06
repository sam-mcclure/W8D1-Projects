import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    link: <Link to='/login'>Log In</Link>,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
