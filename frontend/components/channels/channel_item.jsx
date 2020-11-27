import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'
import { Link } from 'react-router-dom';


class ChannelItem extends React.Component{
    constructor(props) {
        super(props)

        
    }


    render() {
        const {channel} = this.props;
        return (
            <li className="channel-items">
                <div className="channel-title">
                    <i className="fas fa-hashtag"></i> {channel.title}
                </div>
            </li>
        )
    }
}

export default ChannelItem