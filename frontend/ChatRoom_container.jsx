import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
// import { login, logout } from '../../actions/session_actions'

const mSTP = ({ state }) => {
    return {
        channelId: state.entities.channels.id,
        username: state.entities.users.id.username
      };
};

const mDTP = dispatch => {
    return {
      
    };
};

export default connect(mSTP, mDTP)(ChatRoom);