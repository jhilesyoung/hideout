import { connect } from "react-redux";
import { login } from '../../actions/session_actions'
import SessionForm from './session_form.jsx'

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        fromType: 'login'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
    }
}

export default connect(mSTP, mDTP)(SessionForm)