import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
// import { login, logout } from '../../actions/session_actions'

const mSTP = ({ state }) => {
    return {
        channelId: state.entities.channels.id
      };
};

const mDTP = dispatch => {
    return {
      
    };
};

export default connect(mSTP, mDTP)(ChatRoom);