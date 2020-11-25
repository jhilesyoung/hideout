import React from 'react';


class ChannelItem extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        const {channel} = this.props;
        debugger
        return (
            <li>
               <i className="fas fa-hashtag"></i> {channel.title}
            </li>
        )
    }
}

export default ChannelItem