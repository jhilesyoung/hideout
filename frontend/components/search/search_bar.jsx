import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            
            <div className="search-container">
                <div className="channel-name">
                    Channels
                </div>

                <div className="search-icons">
                    Icons
                </div>

                <div className="search-bar">
                    Bar goes here
                </div>

                <div className="users-list">
                    
                    Online Users
                </div>
                
            </div>
        )
    }

}

export default SearchBar