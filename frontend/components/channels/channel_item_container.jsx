import { connect } from 'react-redux';
import ChannelItem from './channel_item'
import { getChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    let serverId = ownProps.match.params
    // debugger
    return {
        servers: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels),
        serverId: serverId
    };
};
//ownprops.match.params
const mDTP = (dispatch) => {
    return {
        getChannels: (serverId) => dispatch(getChannels(serverId))
    }
};

export default withRouter(connect(mSTP, mDTP)(ChannelItem))
