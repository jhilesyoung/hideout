import React from 'react';
import ServerIndexItem from './server_index_item';
import CreateServerContainer from './create_server_container'
import { createServer } from '../../util/server_api_util';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getServers()
    }

    render() {
        const { servers, deleteServer } = this.props;
        const serverItem = servers.map((server) => {
            return <ServerIndexItem server={server} deleteServer={deleteServer} key={server.id} />
        });
    
    
        return (
            <div className="server-container">
                <ul>
                    {serverItem}
                </ul>
                <CreateServerContainer />
            </div>
        )
    
    }
}

export default ServerIndex;


