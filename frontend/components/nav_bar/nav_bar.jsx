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
                    {/* <Link to="https://github.com/jhilesyoung">
                        Github
                    </Link> */}
                    <a href="https://github.com/jhilesyoung" target="_blank">Github</a>

                    {/* <Link  to="https://github.com/jhilesyoung">
                        LinkedIn
                    </Link> */}
                    <a href="https://linkedin.com/in/jhilesyoung" target="_blank">LinkedIn</a>

                    {/* <Link  to="https://discord.com/">
                        Discord
                    </Link> */}
                    <a href="https://discord.com" target="_blank">Discord</a>
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