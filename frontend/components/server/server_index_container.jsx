import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { getServers, deleteServer } from '../../actions/server_actions';

const mSTP = (state) => {
    return {
        servers: Object.values(state.servers)
    };
};

const mDTP = (dispatch) => {
    return {
        getServers: () => dispatch(getServers()),
        deleteServer: (serverId) => dispatch(deleteServer(serverId))
    };
};

export default connect(mSTP, mDTP)(ServerIndex)