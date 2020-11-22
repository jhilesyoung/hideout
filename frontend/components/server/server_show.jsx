import React from 'react';
import { Link } from 'react-router-dom';

class ServerShow extends React.Component {

    componentDidMount() {
        this.props.getServer(this.props.match.params.serverId);
    }

    render() {
        
        const { server } = this.props;

        return (
            <div>
                <h1>{server.title}</h1>
            </div>
        );
    };
};

export default ServerShow;