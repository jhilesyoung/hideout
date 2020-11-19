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

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/chirps'));
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Create an account</h2>
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <br/>
          <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
          </label>
          <br/>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <br/>
            <Link to="/">
                <button className="submit-button" onClick={this.handleSubmit}>Continue</button>
            </Link>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;