import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js'


class Splash extends React.Component{
        constructor(props) {
            super(props)
        }

// if user is logged_in, pressing login button will take them to their list of joined servers
// if user is NOT logged_in, pressing login will render login and page to input

    render() {
        const { logout, currentUser }  = this.props;

        return (
            <div className="entire-splash">
                <header>
                    <NavBarContainer />
                </header>
            <div className="homepage">

                {/* <li>
                    <button type="button" className="login-button" onClick={}>
                        Login
                    </button>
                </li>  */}
                
                <div className="background-pics" >
                <div className="splash-description">
                    <h1 className="description-title">Your place to talk</h1>
                    <br/>
                        Whether you’re part of a school club, gaming group, worldwide art community, 
                        or just a handful of friends that want to spend time together, hideout makes it 
                        easy to talk every day and hang out more often.
                    <br/>
                    <br/>
                    <br/>
                    <div className="bottom-buttons">
                    <Link className="github" to="https://github.com/jhilesyoung">
                        ReadME
                    </Link>
                    <Link className="other-splash-link" to="https://github.com/jhilesyoung">
                        Important Link
                    </Link>
                    </div>
                    </div>
                    <img className="background-pic-left" src={window.backlefturl} width="500px"/>
                    <img className="background-pic-right" src={window.backrightlurl} width="500px"/>
                </div>
                <footer className="footer-splash">
                    <h3 className="footer-text">2020 - Hideout<i class="fas fa-trademark"></i> by Jhiles Young <i class="fas fa-brain"></i>
                    </h3>
                </footer>
            </div>
            </div>
        )
    }
}

export default Splash;