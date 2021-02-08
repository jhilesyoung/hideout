import { connect } from 'react-redux';
import ChannelItem from './channel_item'
import { getChannels } from '../../actions/channel_actions';

const mSTP = (state) => {
    return {
        servers: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels)
    };
};

const mDTP = (dispatch) => {
    return {
        getChannels: () => dispatch(getChannels())
    }
};

export default connect(mSTP, mDTP)(ChannelItem)
