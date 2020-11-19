import { connect } from "react-redux";
import { signup } from '../../actions/session_actions'
import SignUp from './signup'

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        fromType: 'signup'
    }
}

const mDTP = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SignUp)