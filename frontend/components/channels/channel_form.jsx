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
        const channel = {
            title : this.state.title,
            server_id: this.state.serverId,
            author_id: this.state.authorId
        };
        this.props.createChannel(channel, this.props.channel.serverId);
        // this.props.createChannel(serverId);
        this.setState({ title: '' });
        this.props.getChannels(this.props.channel.serverId);
        window.location.reload(false);
            // .then(() => this.props.getServers())
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    

    render() {
        
        return(
            <form onSubmit={this.handleSubmit} className="create-channel-form">
                <label className="channel-form-title">
                    Create A New Channel
                    <input
                        className="channel-form-input"
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        >
                    </input>
                    <button className="channel-form-submit">Submit</button>
                </label>
            </form>
           
        );
    };

    
};

export default ChannelForm;