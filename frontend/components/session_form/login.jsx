import React from 'react';
import { Link } from 'react-router-dom'

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
      .then(() => this.props.history.push('/chirps'));
  }

  handleDemoSubmit() {
    const user = {
        username: 'demo',
        password: 'password'
    };
    this.props.login(user)
}

  render() {
 
    return (
      <div className="session-form">
        <h2>Welcome back!</h2>
        <h3>We're so excited to see you again!</h3>
        <form>

          <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
          />
          </label>

          <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
            <button className="session-submit-button" onClick={this.handleSubmit}>Login</button>
          </label>
          <br/>
          <Link to="/signup">Already have an account?</Link>
        <br/>
            <Link to={`/`} className="demo-button">
                        <button onClick={this.handleDemoSubmit}>
                            Demo User
                        </button>
            </Link>

        </form>
      </div>
    );
  }
}

export default Login;

