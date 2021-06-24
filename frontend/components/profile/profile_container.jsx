import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { logout } from '../../actions/session_actions'
// import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
      formType: 'Change Icon',
      username: state.session.username
   
  }


}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(ProfileForm);