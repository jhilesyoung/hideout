import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import SplashContainer from './splash/splash_container.js';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LogInFormContainer from './session_form/login_form_container.jsx';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
      <header>
        <Link to="/" className="header-link">
            <img src={window.logourl} className="logo" width="125px"/>
        </Link>
      </header>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>
    </div>
  );

export default App;