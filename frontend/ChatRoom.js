import React from "react";
import MessageForm from "./MessageForm.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [],
      channelId: this.props.channelId
     };
    this.bottom = React.createRef();
  }
  
  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
            case "messages":
              this.setState({ messages: data.messages });
              break;
          }
        },
        speak: function(data) {return this.perform("speak", data)},
        load: function(channelId) {return this.perform("load", channelId)}
      }
    );
  }
  
  loadChat(e, channelId) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load(channelId);
  }
  
  componentDidUpdate() {
    // debugger
    this.bottom.current.scrollIntoView();
  }
  
  render() {
    const { username } = this.props;
    // let messageList = <div ref={this.bottom} />
    // debugger
    let messageList = this.state.messages.map((message, idx) => {
      return (
        <li className="chat-messages" key={message.id}>
          {message} 
          <div ref={this.bottom} />
        </li>
      );
    });
    // debugger
    if (messageList.length === 0) {
      // debugger
      messageList = <div ref={this.bottom} />
      // debugger
    }
    // debugger
    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        {/* <button className="load-button" 
          onClick={this.loadChat.bind(this)}>
          Launch Hideout
        </button> */}
        <div className="message-list">{username}{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default ChatRoom;