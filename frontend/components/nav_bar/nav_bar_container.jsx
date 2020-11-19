import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
  });
  
  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);