import React from 'react';

class ChannelForm extends React.Component{

    constructor(props) {
        super(props)

        this.state = this.props.channel
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then(() => this.props.getServers())
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add Channel
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        >
                    </input>
                    <button>Submit</button>
                </label>
            </form>
        );
    };
};

export default ChannelForm;