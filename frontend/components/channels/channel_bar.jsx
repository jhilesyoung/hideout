import React from 'react';
import ChannelItem from './channel_item';
import CreateChannelContainer from './create_channel_container'
import { loadChat } from '../../ChatRoom';


class ChannelBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            channels: this.props.channels,
            // channelTitle: this.props.channels.title,
            serverId: this.props.serverId,
            boolean: false
        }
    }

    componentDidMount() {
        // debugger
        this.props.getChannels(this.props.serverId).then((res) => {
            let channelVals = Object.values(res.channels) 
            // console.log(channelVals[0].serverId)
            this.setState({channels: channelVals, serverId: channelVals[0].serverId, boolean: true})
        })
    }

    componentDidUpdate(prevprops) {
       
        if (this.state.serverId !== this.props.serverId) {
            // console.log("anyth")
            // debugger
            this.props.getChannels(this.props.serverId).then((res) => {
                this.setState({
                    channels: Object.values(res.channels),
                    serverId: prevprops.serverId
                })
            })
        }
    }

    render() {
        const {channels} = this.state;
        // const {channelTitle} = this.props;
        // console.log(channels);
        const {createChannel} = this.props;
        const channelItems = channels.map((channel) => {
           return <ChannelItem channel={channel} serverId={this.props.serverId} key={channel.id} createChannel={createChannel}/>
        })
        // const serverTitle = this.props.serverTitle;
        
        return (
           
            <div className="channel-container">
                {/* <div>{channelTitle}</div> */}
                        {channelItems}
                    <CreateChannelContainer />
            </div>

        )
    }

}

export default ChannelBar;