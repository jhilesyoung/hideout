import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="auth-buttons">
                <Link to="/login">
                    <button>Login</button>
                </Link>

                <Link to="/" className="logout-button" onClick={()=> logout()}>
                    <button>
                        Logout
                    </button>
                </Link>
            </div>
        )
    }
}

export default NavBar;