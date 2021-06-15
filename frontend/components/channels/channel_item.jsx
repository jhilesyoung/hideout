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
        // console.log(channel)
        App.cable.subscriptions.subscriptions[0].load(channel);
        // console.log(App.cable.subscriptions)
    }
   
    componentDidUpdate(prevProps) {
        // console.log("test", prevProps, this.props);
        if (prevProps.channel != this.props.channel) {
            // debugger
            this.setState({channel: this.props.channel})
        }
    }
    // componentDidMount() {
    //     this.props.getChannels();
    // }

    render() {
        const {channel} = this.state;
        // console.log(channel.id)
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


// import React from 'react';
// import '@fortawesome/fontawesome-free/js/all.js'
// import { Link } from 'react-router-dom';
// import ChatRoom from '../../ChatRoom'


// class ChannelItem extends React.Component{
//     constructor(props) {
//         super(props)

        
//     }

//     loadChat(e) {
//         e.preventDefault();
//         App.cable.subscriptions.subscriptions[0].load();
//     }


//     render() {
//         const {channels, servers} = this.props;
//         return (
//             <Link to={`/servers/${servers.id}/channels/${channels.id}`}>
//                 <li className="channel-items">
//                     <button className="channel-title" onClick={this.loadChat}>
//                         <i className="fas fa-hashtag"></i> {channel.title}
                        
//                     </button>
//                 </li>
//             </Link>
//         )
//     }
// }

// export default ChannelItem