import { connect } from 'react-redux';
import ServerShow from './server_show';
import { getServer } from '../../actions/server_actions';

const mSTP = (state, ownProps) => {
    return {
        server: state.servers[ownProps.match.params.serverId]
    }
};

const mDTP = (dispatch) => {
    return { 
        getServer: (serverId) => dispatch(getServer(serverId))
    }
};

export default connect(mSTP, mDTP)(ServerShow);

