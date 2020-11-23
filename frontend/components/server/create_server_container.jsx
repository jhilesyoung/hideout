import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../actions/server_actions';

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
        action: (server) => dispatch(createServer(server))
    }
}

export default connect(mSTP, mDTP)(ServerForm);