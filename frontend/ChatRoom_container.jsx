import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
import { login, logout } from '../../actions/session_actions'

const mSTP = ({ session, entities: { users }}) => {
    return {
        currentUser: users[session.id] 
      };
};

const mDTP = dispatch => {
    return {
      
    };
};

export default connect(mSTP, mDTP)(ChatRoom);