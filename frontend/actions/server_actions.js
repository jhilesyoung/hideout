import * as ServerApiUtil from '../util/server_api_util'

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

export const getServers = () => dispatch => {
    return ServerApiUtil.getServers()
        .then((servers) => dispatch({
            type: RECEIVE_SERVERS,
            servers
        }));
};

export const getServer = (serverId) => dispatch => {
    return ServerApiUtil.getServer(serverId)
        .then((server) => dispatch({
            type: RECEIVE_SERVER,
            server
        }));
};

export const createServer = (server) => dispatch => {
    return ServerApiUtil.createServer(server)
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

    

