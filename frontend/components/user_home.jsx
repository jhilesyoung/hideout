import ServerIndexContainer from './server/server_index_container';
import React from 'react';
import ChannelBarContainer from './channels/channel_bar_container';
import { Route } from 'react-router-dom';
import ChatRoomContainer from '../ChatRoom_container';
import ProfileFormContainer from './profile/profile_container';
import VideoCall from './video/VideoCall';
import OnlineContainer from './online/online__container';
import SearchBarContainer from './search/search_container'
// import OnlineContainer from './online/online__container';
// import ChannelMessageContainer from '../messages/message_bar


class UserHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="user-home">
                <ServerIndexContainer />
                <Route path="/servers/:serverId/channels" component={ChannelBarContainer}/>
                <ChatRoomContainer />
                <ProfileFormContainer />
                {/* <VideoCall /> */}
                <OnlineContainer />
                <SearchBarContainer />
                {/* <OnlineList /> */}
                {/* <ChannelMessageContainer /> */}
            </div>
        )
    }
}

// create click handler on serverindex item
// wrap serverIndexItem with react link tag /servers/:serverId/channels | interpolate :serverId



export default UserHome;