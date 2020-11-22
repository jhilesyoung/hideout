import React from 'react';
import { render } from 'react-dom';
import ServerIndexItem from './server_index_item';

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
                <CreateServerFormContainer />
            </div>
        )
    
    }
}

export default ServerIndex;


