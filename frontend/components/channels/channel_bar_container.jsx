import React from 'react';
import { connect } from 'react-redux';
import { getChannels } from '../../actions/channel_actions'
import ChannelBar from './channel_bar'

const mSTP = (state, ownProps) => {
    const serverId = parseInt(ownProps.match.params.serverId)
    
    return {
        serverId: ownProps.match.params.serverId,
        channels: Object.values(state.entities.channels).filter(channel => {
            return channel.serverId === serverId
        })
    };
};

const mDTP = (dispatch) => {
    return {
        getChannels: (serverId) => dispatch(getChannels(serverId)),
        createChannel: (channel, serverId) => dispatch(createChannel(channel, serverId))
    };
};

export default connect(mSTP, mDTP)(ChannelBar)