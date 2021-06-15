import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { getServers, deleteServer } from '../../actions/server_actions';
import { createServer } from '../../util/server_api_util';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    // ownProps
    return {
        servers: Object.values(state.entities.servers),
        // serverTitle: 
    };
};

const mDTP = (dispatch) => {
    return {
        getServers: () => dispatch(getServers()),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        createServer: (server) => dispatch(createServer(server)),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(ServerIndex)