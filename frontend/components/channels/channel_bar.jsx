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
        
        this.props.getChannels(this.props.serverId).then((res) => {
            let channelVals = Object.values(res.channels) 
            this.setState({channels: channelVals, serverId: channelVals[0].serverId, boolean: true})
            if (channelVals === null)  {
                return null
            } else {
                this.props.getChannels(serverId)
            }
        })
    }

    componentDidUpdate(prevprops) {
       
        if (this.state.serverId !== this.props.serverId) {
           
           
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