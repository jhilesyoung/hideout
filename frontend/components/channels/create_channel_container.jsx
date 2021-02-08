import React from 'react';
import { createChannel } from '../../actions/channel_actions';
import ChannelForm from './channel_form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
   return { 
       channel: {
           title: '',
           serverId: ownProps.match.params.serverId,
        //    authorId: ownProps.match.params.authorId
            authorId: state.session.id
       }
    }
}

const mDTP = (dispatch) => {
    return {
        createChannel: (channel, serverId) => dispatch(createChannel(channel, serverId)),
        getChannels: (serverId) => dispatch(getChannels(serverId)),
    }
}


export default withRouter(connect(mSTP, mDTP)(ChannelForm))