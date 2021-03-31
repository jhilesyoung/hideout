import React from 'react';
import ChannelItem from './channel_item';
import CreateChannelContainer from './create_channel_container'
import { loadChat } from '../../ChatRoom';


class ChannelBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            channels: this.props.channels
        }
        
    }

    // 

    componentDidMount() {
        // debugger
        
        this.props.getChannels(this.props.serverId).then((res) => {
            this.setState({channels: Object.values(res.channels)})
        })
    }

    componentDidUpdate(prevprops) {
        if (this.props.serverId !== prevprops.serverId) {
            this.props.getChannels(this.props.serverId)
        }
    }

    render() {
        // const { loadChat } = this.props
        const {channels} = this.state;
        console.log(channels);
        const {createChannel} = this.props;
        const channelItems = channels.map((channel) => {
           return <ChannelItem channel={channel} serverId={this.props.serverId} key={channel.id} createChannel={createChannel}/>
        })
        
        return (
            // if we have a channelitem, render that item
            // else render first server
            <div className="channel-container">
                        {channelItems}
                    <CreateChannelContainer />
            </div>

        )
    }

}

export default ChannelBar;