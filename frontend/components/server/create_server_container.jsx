import React from 'react'
import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer, getServers } from '../../actions/server_actions';
import '@fortawesome/fontawesome-free/js/all.js'

const mSTP = (state) => {
    return {
        formType: 'Add Server',
        server: {
            title: ''
        }
    }
}

const mDTP = dispatch => {
    return {
      processForm: (server) => dispatch(createServer(server)),
      otherForm: (
        <button onClick={() => dispatch(openModal('Add Server'))}>
          Submit
        </button>
      ),
      closeModal: () => dispatch(closeModal()),
      getServers: () => dispatch(getServers())
    };
  };

export default connect(mSTP, mDTP)(ServerForm);