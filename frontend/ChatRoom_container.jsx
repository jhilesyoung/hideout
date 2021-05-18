import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
import { withRouter } from 'react-router-dom'
// import { login, logout } from '../../actions/session_actions'

const mSTP = ( state, ownProps ) => {
    const channelId = parseInt(ownProps.match.params.channelId)

    return {
        authorId: state.entities.users.id,
        channels: Object.values(state.entities.channels).filter(channel => {
            return channel.id === channelId
        })
      };
};

const mDTP = (dispatch) => {
    return {
      
    };
};

export default connect(mSTP, mDTP)(withRouter(ChatRoom));