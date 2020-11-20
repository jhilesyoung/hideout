import { connect } from "react-redux"
import SessionErrors from './session_errors'

const mSTP = ({errors}) => {
    return {
        errors: errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mSTP,mDTP)(SessionErrors);