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
            
            <div className="auth-buttons">

                <Link to="/" className="nav-left">
                    <img src={window.logourl} className="logo" width="125px"/>
                </Link>

                <div className="nav-right">
                    <Link className="nav-login"to="/login">
                        Login
                    </Link>

                    <Link to="/" className="nav-logout" onClick={()=> logout()}>
                            Logout
                    </Link>
                </div>

            </div>
        )
    }
}

export default NavBar;