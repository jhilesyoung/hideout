import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/servers'));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
          <img className="auth-background" src={window.loginurl}/>
          <div className="signup-form-box">
        <h2 className="create-text">Create an account</h2>
        <form>  
            {this.renderErrors()}
            <label className="register-email-text">EMAIL
          <br/>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                className="register-username-and-email-input"
              />
          </label>
          <br/>
          <label className="register-username-text">USERNAME
          <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              className="register-username-and-email-input"
            />
          </label>
          <br/>
          <label className="register-password-text">PASSWORD
          <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              className="register-password-input"
            />
            <br/>
            <br/>
            <Link to="/">
                <button className="register-submit-button" onClick={this.handleSubmit}>Continue</button>
            </Link>
          </label>
          <br/>
          <br/>
          <Link to="/login" className="have-an-account-text">
              Already have an account?
            </Link>
            
        </form>
        </div>
      </div>
    );
  }
}

export default Signup;