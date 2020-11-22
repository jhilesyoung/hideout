import React from 'react';
import { connect } from 'react-redux';
import ServerForm from './server_form';
import { getServer, updateServer } from '../../actions/server_actions';

class EditServerForm extends React.Component {
    componentDidMount() {
        this.props.getServer(this.props.match.params.serverId)
    }

    render() {
        const { action, server } = this.props;
    
        
        if (!server) return null;
        return (
          <ServerForm
            action={action}
            server={server} />
        );
      };
};

const mSTP = (state, ownProps) => {
    return {
        server: state.server[ownProps.match.params.serverId]
    };
};

const mDTP = (dispatch) => {
    return {
        action: (server) => dispatch(updateServer(server)),
        getServer: (serverId) => dispatch(getServer(serverId))
    };
};

export default connect(mSTP, mDTP)(EditServerForm);