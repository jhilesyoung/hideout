import { connect } from "react-redux";
import { login } from '../../actions/session_actions'
import Login from './login'

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        fromType: 'login',
    }
}

const mDTP = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
    }
}

export default connect(mSTP, mDTP)(Login)