import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
import { withRouter } from 'react-router-dom'
// import { login, logout } from '../../actions/session_actions'

const mSTP = ( state, ownProps ) => {
    const channelId = parseInt(ownProps.match.params.channelId)
    // debugger
    return {
        authorId: state.session.id,
        channelId: Object.values(state.entities.channels).filter(channel => {
            return channel.id === channelId
        }),
        channelId: channelId,
        username: state.session.username
      };
};

const mDTP = (dispatch) => {
    return {
      
    };
};

export default withRouter(connect(mSTP, mDTP)(ChatRoom));