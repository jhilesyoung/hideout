import React from 'react';
import ChannelItem from './channel_item';
import CreateChannelContainer from './create_channel_container'
import { loadChat } from '../../ChatRoom';


class ChannelBar extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
        }
        
    }

    componentDidMount() {
        // debugger
        this.props.getChannels(this.props.serverId)
    }

    componentDidUpdate(prevprops) {
        if (this.props.serverId !== prevprops.serverId) {
            this.props.getChannels(this.props.serverId)
        }
    }

    render() {
        const { loadChat } = this.props
        const {channels, createChannel} = this.props;
        const channelItems = channels.map((channel) => {
           return <ChannelItem channel={channel} key={channel.id} createChannel={createChannel}/>
        })
        
        return (

            <div className="channel-container">
                        {channelItems}
                    <CreateChannelContainer />
            </div>

        )
    }

}

export default ChannelBar;