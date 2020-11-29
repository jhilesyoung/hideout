import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import SplashContainer from './splash/splash_container.js';
import SignUpFormContainer from './session_form/signup_form_container.jsx';
import LogInFormContainer from './session_form/login_form_container.jsx';
import UserHomeContainer from './user_home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/servers" component={UserHomeContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>
    </div>
);

export default App;