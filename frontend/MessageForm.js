import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: "",
      authorId: this.props.authorId,
      channelId: this.props.channelId
    };
  };

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body, 
                                                     authorId: this.props.authorId, 
                                                     channelId: this.props.channelId });
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div>
        <form 
        className="chat-submit"
        onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Say something funny..."
            className="message-box"
          />
          <input className="message-submit"type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default MessageForm;