import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id, username: window.currentUser.username }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  // window.dispatch = store.dispatch
  // window.setState = store.getState
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
});


/* <Root store={store}/> */
