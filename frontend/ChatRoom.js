import React from "react";
import MessageForm from "./MessageForm.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    let channelId = channelId
    this.state = { 
      messages: [],
      channelId: this.props.channelId,
      username: ''
     };
    this.bottom = React.createRef();
  };

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
    // console.log(subscriptions)
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load(channelId);
  }
  
  componentDidUpdate() {
    // debugger
    this.bottom.current.scrollIntoView();
  }
  
  render() {
    // const  username  = this.state.session.username ? this.state.session.username : ''
    const username = this.props.username
    // let messageList = <div ref={this.bottom} />
   
    let messageList = this.state.messages.map((message, idx) => {
      return (
        <li className="chat-messages" key={idx}> 
        {/* OR key ={message.id} */}
        <div className="username-in-chat">{username}</div>
          {message} 
          <div ref={this.bottom} />
        </li>
      );
    });
  
    if (messageList.length === 0) {
      messageList = <div ref={this.bottom} />
    }
   
    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        {/* <button className="load-button" 
          onClick={this.loadChat.bind(this)}>
          Launch Hideout
        </button> */}
        
        <div className="message-list">{messageList}</div>
        <MessageForm
          authorId = {this.props.authorId}
          channelId = {this.props.channelId}
         />
      </div>
    );
  }
}

export default ChatRoom;