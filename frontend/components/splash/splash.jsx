import React from 'react'
import { Link } from 'react-router-dom';


class Splash extends React.Component{
        constructor(props) {
            super(props)
        }

// if user is logged_in, pressing login button will take them to their list of joined servers
// if user is NOT logged_in, pressing login will render login and page to input

    render() {
        const { logout, currentUser }  = this.props;

        return (
            <div className="homepage">
                {/* <li>
                    <button type="button" className="login-button" onClick={}>
                        Login
                    </button>
                </li>  */}
                
                <div className="background-pics" >
                <div className="splash-description">
                    <h1>Your place to talk</h1>
                    <br/>
                        Whether you’re part of a school club, gaming group, worldwide art community, 
                        or just a handful of friends that want to spend time together, hideout makes it 
                        easy to talk every day and hang out more often.
                    <br/>
                    <br/>
                    <Link className="github" to="https://github.com/jhilesyoung">
                        ReadME
                    </Link>
                    </div>
                    <img className="background-pic-left" src={window.backlefturl} width="500px"/>
                    <img className="background-pic-right" src={window.backrightlurl} width="500px"/>
                </div>
                <footer className="footer-splash">Anyone can be a programmer &hearts; - Jhiles Young</footer>
            </div>
        )
    }
}

export default Splash;