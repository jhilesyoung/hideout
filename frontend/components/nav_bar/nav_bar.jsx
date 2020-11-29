import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { logout} = this.props
        if (this.props.currentUser) { 
            
         return null }

        return (

            <div>
            <div className="auth-buttons">

                <div>
                    <Link to="/" className="nav-left">
                        <img src={window.logourl} className="logo" width="125px"/>
                    </Link>
                </div>

                <div className="nav-middle">
                    <Link to="https://github.com/jhilesyoung">
                        Github
                    </Link>

                    <Link  to="https://github.com/jhilesyoung">
                        LinkedIn
                    </Link>

                    <Link  to="https://github.com/jhilesyoung">
                        Discord
                    </Link>
                </div>

                <div className="nav-right">
                    <Link className="nav-login"to="/login">
                        Login
                    </Link>

                    <Link to="/" className="nav-logout" onClick={()=> logout()}>
                            Logout
                    </Link>
                </div>

            </div>
        </div>
        )
    }
}

export default NavBar;