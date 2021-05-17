import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
// import { login, logout } from '../../actions/session_actions'

const mSTP = ({ state, ownProps }) => {
    // const channelId = parseInt(ownProps.match.params.channelId)
    console.log(state)
    return {
    //     authorId: state.entities.users.id,
    //     channels: Object.values(state.entities.channels).filter(channel => {
    //         return channel.channelId === channelId
    //   })
    }
};

const mDTP = (dispatch) => {
    return {
      
    };
};

export default connect(mSTP, mDTP)(ChatRoom);