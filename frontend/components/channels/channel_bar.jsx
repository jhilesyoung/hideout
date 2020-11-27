import React from 'react';
import ChannelItem from './channel_item';
import CreateChannelContainer from './create_channel_container'


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
        
        const {channels, createChannel} = this.props;
        const channelItems = channels.map((channel) => {
           return <ChannelItem channel={channel} key={channel.id} createChannel={createChannel} />
        })
        
        return (

            <div className="channel-container">
               
                    <div>
                        {channelItems}
                    </div>
                    <CreateChannelContainer />
            </div>

        )
    }

}

export default ChannelBar;