import React from "react";
import ReactDOM from "react-dom";
import {configureStore} from 'react';
// import { login, logout, signup } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  
  const root = document.getElementById("root");
  ReactDOM.render(
  <div>
    <h1>Welcome To Hideout</h1>
    <button>Sign Up</button>
    <button>Log In</button>
    <ul>
      <li>
        <button>Jhiles' Github</button>
      </li>
      <li>
      <button>Jhiles' LinkedIn</button>
      </li>
      <li>
      <button>Jhiles' Resume</button>
      </li>
    </ul>
  </div>, root);
  const store = configureStore();
});

// window.login = login;
// window.logout = logout;
// window.signup = signup;

// window.getState = store.getState;
// window.dispatch = store.dispatch;