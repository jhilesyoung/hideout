import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'


class ChannelItem extends React.Component{
    constructor(props) {
        super(props)

    //    const {channel} = this.props;
    }

    loadChat(e, channelId) {
        e.preventDefault();
        console.log(channelId)
        App.cable.subscriptions.subscriptions[0].load(channelId);
        console.log(App.cable.subscriptions)
    }

    render() {
        const {channel} = this.props;
        return (
            <li className="channel-items">
                <button className="channel-title" onClick={(e) => {this.loadChat(e, channel.id)}}>
                    <i className="fas fa-hashtag"></i> {channel.title}
                    
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