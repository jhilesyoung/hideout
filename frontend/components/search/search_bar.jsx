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
                    <i class="fab fa-linkedin fa-3x"></i>
                    <i class="fab fa-angellist fa-3x"></i>
                    <i class="far fa-file fa-3x"></i>
                    <i class="fab fa-github fa-3x"></i>
                </div>

                <div className="chatname">
                    # general
                </div>
                
            </div>
        )
    }
}

export default SearchBar