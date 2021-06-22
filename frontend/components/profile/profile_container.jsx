import { connect } from 'react-redux';
import ProfileForm from './profile_form';
// import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
      formType: 'Change Icon',
      username: state.session.username
   
  }


}

const mDTP = (dispatch) => {
    return {
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('Change Icon'))}>
        //       Submit
        //     </button>
        //   ),
        //   closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP, mDTP)(ProfileForm);