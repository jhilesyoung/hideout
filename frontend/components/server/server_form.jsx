import React from 'react';

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.server;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <h1>Create Server</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label> Server Title
                            <input
                                type="text"
                                value={this.state.server}
                                onChange={this.update('title')}
                                />
                        </label>
                    <button type="submit" value={this.props.formType}/>
                </form>
            </div>
        );
    };
};

export default ServerForm;