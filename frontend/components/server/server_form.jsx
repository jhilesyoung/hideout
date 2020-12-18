import React from 'react';
import { getServers } from '../../util/server_api_util';
import '@fortawesome/fontawesome-free/js/all.js'

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.server;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then(() => this.props.getServers())
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                {/* <h1><i class="fas fa-plus"></i></h1> */}
                    <form onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="close-x"><i className="fas fa-times-circle"></i></div>
                        <label className="modal-title"> Server Title
                            <input className="add-server-input"
                                type="text"
                                value={this.state.server}
                                onChange={this.update('title')}
                            />
                        </label>
                        <br/>
                    <button className="add-server-modal"type="submit" value={this.props.formType}>Add Server</button>
                </form>
            </div>
        );
    };
};

export default ServerForm;