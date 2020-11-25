import React from 'react';
import { createChannel } from '../../util/channel_api_util';
import ChannelForm from './channel_form';
import {connect} from 'react-redux'


const mSTP = (state) => {
   return { 
       channel: {
           title: ''
       }
    }
}

const mDTP = (dispatch) => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel))
    }
}


export default connect(mSTP, mDTP)(ChannelForm)