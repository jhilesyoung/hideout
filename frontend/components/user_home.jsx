import ServerIndexContainer from './server/server_index_container';
import React from 'react';
import ChannelBarContainer from './channels/channel_bar_container';
import { Route } from 'react-router-dom';
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
                {/* <ChannelMessageContainer /> */}
            </div>
        )
    }
}

// create click handler on serverindex item
// wrap serverIndexItem with react link tag /servers/:serverId/channels | interpolate :serverId



export default UserHome;