import React from 'react';

class ChannelForm extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            serverId: this.props.channel.serverId,
            authorId: this.props.channel.authorId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const channel = this.state;
        this.props.createChannel(channel);
        this.setState({ title: '' });
            // .then(() => this.props.getServers())
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