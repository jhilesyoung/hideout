import { connect } from 'react-redux';
import  ChatRoom  from './ChatRoom';
import { withRouter } from 'react-router-dom'


const mSTP = ( state, ownProps ) => {
    let channelLocation = ownProps.location.pathname.split("/")
    let id = channelLocation[channelLocation.length-1]
    const channelId = parseInt(id)
 
    return {
        authorId: state.session.id,
        // channelId: ownProps.match.params.channelId,
        channelId: channelId,
        username: Object.values(state.entities.users)[0].username
        // messageUsername
       
      };
};

const mDTP = (dispatch) => {
    return {
      
    };
};

export default withRouter(connect(mSTP, mDTP)(ChatRoom));