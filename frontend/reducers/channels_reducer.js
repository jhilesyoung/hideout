import { 
    RECEIVE_CHANNELS, 
    RECEIVE_CHANNEL, 
    REMOVE_CHANNEL } from '../actions/channel_actions';

import merge from 'lodash/merge';

const ChannelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    switch(action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, oldState, action.channels)
        case RECEIVE_CHANNEL:
            return Object.assign({}, oldState, {[action.channel.id]: action.channel})
        case REMOVE_CHANNEL:
            let nextState = merge({},oldState)
            delete nextState[action.channelId]
            return nextState
        default:
            return oldState;
    }
}

export default ChannelsReducer;