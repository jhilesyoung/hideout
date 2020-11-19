import { connect } from "react-redux";
import { signup } from '../../actions/session_actions'
import SessionForm from './session_form.jsx'

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        fromType: 'signup'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm)