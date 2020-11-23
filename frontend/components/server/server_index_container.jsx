import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { getServers, deleteServer } from '../../actions/server_actions';
import { createServer } from '../../util/server_api_util';

const mSTP = (state) => {
    return {
        servers: Object.values(state.entities.servers)
    };
};

const mDTP = (dispatch) => {
    return {
        getServers: () => dispatch(getServers()),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        createServer: (server) => dispatch(createServer(server))
    };
};

export default connect(mSTP, mDTP)(ServerIndex)