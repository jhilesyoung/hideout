import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            
            <div className="search-container">

                <div className="userhome-links">
                    <i className="fab fa-linkedin fa-3x"></i>
                    <i className="fab fa-angellist fa-3x"></i>
                    <i className="far fa-file fa-3x"></i>
                    <i className="fab fa-github fa-3x"></i>
                </div>

                <div className="chatname">
                    
                </div>
                
            </div>
        )
    }
}

export default SearchBar