import { connect } from 'react-dom';
import OnlineList from './online_list';

const mSTP = (state) => {
    return {
        users: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels)
    };
};

const mDTP = (dispatch) => {
    return {
        getChannels: () => dispatch(getChannels())
    }
};

export default connect(mSTP, mDTP)(OnlineList)