import React from 'react'
import { Link } from 'react-router-dom';


class Splash extends React.Component{
        constructor(props) {
            super(props)


            this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
        }

// if user is logged_in, pressing login button will take them to their list of joined servers
// if user is NOT logged_in, pressing login will render login and page to input


    handleDemoSubmit() {
        const user = {
            username: 'demo',
            password: 'password'
        };
        this.props.login(user)
    }

    render() {
        const {login, logout, dispatch} = this.props;

        return (
            <div className="homepage">
                {/* <li>
                    <button type="button" className="login-button" onClick={}>
                        Login
                    </button>
                </li>  */}

                <Link to="/login">
                    Login
                </Link>

                <Link to="/login" className="demo-button">
                    <button onClick={this.handleDemoSubmit}>
                        Demo User
                    </button>
                </Link>

                <Link to="/" className="logout-button" onClick={()=> logout()}>
                    <button>
                        Logout
                    </button>
                </Link>

                <h1 className="splash-title">Your place to talk</h1>

                <h2 className="splash-description">
                    Whether you’re part of a school club, gaming group, worldwide art community, 
                    or just a handful of friends that want to spend time together, hideout makes it 
                    easy to talk every day and hang out more often.
                </h2>

                <div>
                    <img src={window.backlefturl} className="background-left"/>
                </div>

                <div>
                    <img src={window.backrightlurl} className="background-right"/>
                </div>

            </div>
        )
    }
}

export default Splash;