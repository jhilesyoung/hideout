import { connect } from 'react-redux';
import UserHome from './user_home.jsx'


const mSTP = (state) => {
    return {
        // currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(UserHome);