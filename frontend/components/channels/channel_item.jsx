import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js'


class ChannelItem extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            channel: this.props.channel
        }
    }

    loadChat(e, channel) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].load(channel);
    }
   
    componentDidUpdate(prevProps) {
        if (prevProps.channel != this.props.channel) {
            
            this.setState({channel: this.props.channel})
        }
    }

    render() {
        const {channel} = this.state;
        const {serverId} = this.props;
        if (!channel ) {
            return null
        }
        return (
            <li className="channel-items">
                <button className="channel-button" onClick={(e) => {this.loadChat(e, channel)}}>
                    <Link className="channel-title" to={`/servers/${serverId}/channels/${channel.id}`}>
                        <i className="fas fa-hashtag"></i> {channel.title}
                    </Link>
                </button>
            </li>
        )
    }
}

export default ChannelItem

