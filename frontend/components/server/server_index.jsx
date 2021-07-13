import React from 'react';
import ServerIndexItem from './server_index_item';
import CreateServerContainer from './create_server_container'
import ServerShowContainer from './server_show_container'
import { createServer } from '../../util/server_api_util';
import server_show_container from './server_show_container';
import Modal from '../modal';
import '@fortawesome/fontawesome-free/js/all.js'

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
                <ul className="server-icon">
                     {serverItem}
                     <p></p>
                </ul>
                <Modal />
                <button className="server-additional" onClick={() => this.props.openModal('Add Server')}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        )
    }
}

export default ServerIndex;