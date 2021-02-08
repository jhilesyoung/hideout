import React from 'react';
import { Link } from 'react-router-dom'
// import SessionErrors from './session_errors.jsx'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    .then(() => this.props.history.push('/servers'));
  }

  handleDemoSubmit() {
    const user = {
        username: 'demo',
        password: 'password'
    };
    this.props.login(user)
}

        renderErrors() {
            return(
            <ul>
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
            );
        }

  render() {
 
    return (
      <div className="login-form">
          <img className="auth-background" src={window.loginurl}/>
          <img className="blob-background" src={window.bloburl}/>
          <div className="login-form-box">
        <h2 className="welcome-text">Welcome back!</h2>
        <h3 className="excited-text">We're so excited to see you again!</h3>
        <form>

        
        {this.renderErrors()}

          <label className="login-username-text">USERNAME
              <br/>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            className="login-username-input"
          />
          </label>
        <br/>
          <label className="login-password-text">PASSWORD
              <br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            className="login-password-input"
          />
          <br/>
          <br/>
            <button className="session-submit-button" onClick={this.handleSubmit}>Login</button>
          </label>
          <br/>
          <p className="need-account-text">Need an account? <Link to="/signup" className="register-link">Register</Link></p>
            <Link to={`/servers`} className="demo-button">
                        <button onClick={this.handleDemoSubmit}>
                        <img src={window.demourl} className="logo" width="125px"/>
                        <br /> Demo User
                        </button>
            </Link>

        </form>
        </div>
      </div>
    );
  }
}

export default Login;

