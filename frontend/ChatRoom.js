import React from "react";
import MessageForm from "./MessageForm.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    let channelId = channelId
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = { 
      messages: [],
      channelId: this.props.channelId,
      username: '',
      currentDate: date
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
    this.bottom.current.scrollIntoView();
    this.bottom = React.createRef()
  }
  
  render() {
    // const  username  = this.state.session.username ? this.state.session.username : ''
    const username = this.props.username
    // let messageList = <div ref={this.bottom} />
   
    let messageList = this.state.messages.map((message, idx) => {
      return (
        <li className="chat-messages" key={idx}> 
        {/* OR key ={message.id} */}
        <img className="profile-in-chat" src={window.servericonurl} />
              <div className="username-in-chat">{message.username} <div className="date-in-chat">{this.state.currentDate}</div>
                <div className="message-in-chat">{message.body}</div>
              </div> 
            
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