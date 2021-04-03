import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../style/session.css'
import Cloud from'../images/happy_cloud.png'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  handleDemoSubmit() {
    let user = {
        email: 'miumiu@gmail.com',
        password: 'password'
    };
    this.props.login(user)
}

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul className="session-error">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-page">

          <form className="session-form" onSubmit={this.handleSubmit}>
            <Link to="/"><img src={Cloud} alt="logo" width="100px" height="auto" /></Link>
                {this.renderErrors()}
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <button>Submit</button>
              <p>if you don't have an account, please <Link to={'/signup'}>Signup</Link></p>
              <Link to={`/posts`} className="demo-user-button">
                <button onClick={this.handleDemoSubmit}>
                    DEMO USER LOGIN
                </button>
              </Link>
          </form>
      </div>
    );
  };
};


export default withRouter(LoginForm);