import * as ServerApiUtil from '../util/server_api_util'

export const RECEIVE_SERVERS = 'RECEIVE_SERVER';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const requestServers = () => dispatch => {
    return ServerApiUtil.gettServers()
        .then((server) => dispatch({
            type: RECEIVE_SERVERS,
            server
        }));
};

export const requestServer = (serverId) => dispatch => {
    return ServerApiUtil.fetchServer(serverId)
        .then((server) => dispatch({
            type: REMOVE_SERVER,
            server
        }));
};

export const createServer = (server) => dispatch => {
    return ServerApiUtil.fetchServer(server)
        .then((server) => dispatch({
            type: RECEIVE_SERVER,
            server
        }));
};

export const updateServer = (server) => dispatch => {
    return ServerApiUtil.updateServer(server)
        .then((server) => dispatch({
            type: RECEIVE_SERVER,
            server
        }))
}

export const deleteServer = (serverId) => dispatch => {
    return ServerApiUtil.deleteServer(serverId)
        .then(() => dispatch({
            type: REMOVE_SERVER,
            serverId
        }))
}

    

