import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer, getServers } from '../../actions/server_actions';

const mSTP = (state) => {
    return {
        formType: 'Add Server',
        server: {
            title: ''
        }
    }
}

const mDTP = (dispatch) => {
    return {
        action: (server) => dispatch(createServer(server)),
        getServers: () => dispatch(getServers())
    }
}

export default connect(mSTP, mDTP)(ServerForm);