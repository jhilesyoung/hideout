import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
import { withRouter } from 'react-router-dom'


const mSTP = ( state, ownProps ) => {
    let channelLocation = ownProps.location.pathname.split("/")
    let id = channelLocation[channelLocation.length-1]
    const channelId = parseInt(id)
    // debugger
    return {
        authorId: state.session.id,
        // channelId: ownProps.match.params.channelId,
        channelId: channelId,
        // channels: Object.values(state.entities.channels).filter(channel => {
        //     return channel.id === channelId
        // }),
        username: state.entities.users[id.username]
      };
};

const mDTP = (dispatch) => {
    return {
      
    };
};

export default withRouter(connect(mSTP, mDTP)(ChatRoom));