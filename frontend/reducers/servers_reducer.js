import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER,
    REMOVE_SERVER,
} from '../actions/server_actions';

import merge from 'lodash/merge';

const ServersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    switch(action.type) {
        case RECEIVE_SERVERS:
            return Object.assign({}, oldState, action.servers)
        case RECEIVE_SERVER:
            return Object.assign({}, oldState, {[action.server.id]: action.server})
        case REMOVE_SERVER:
            let nextState = merge({}, oldState)
            delete nextState[action.serverId]
            return nextState
        default:
            return oldState;
    };
};

export default ServersReducer;