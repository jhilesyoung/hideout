import React from 'react'
import { Link } from 'react-router-dom'


class Splash extends React.Component{
        constructor(props) {
            super(props)
        }

// if user is logged_in, pressing login button will take them to their list of joined servers
// if user is NOT logged_in, pressing login will render login and page to input

    render() {
        const {login} = this.props;

        return (
            <div className="homepage">
                <Link to="/login" className="login-button">
                    <button type="button">
                        Login
                    </button>
                </Link>

                <h1 className="splash-title">Your place to talk</h1>

                <h2>
                    Whether you’re part of a school club, gaming group, worldwide art community, 
                    or just a handful of friends that want to spend time together, hideout makes it 
                    easy to talk every day and hang out more often.
                </h2>

            </div>
        )
    }
}

export default Splash;