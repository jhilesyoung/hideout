import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({server, deleteServer}) => {
    
    return (
            <li>
                <Link to={`/servers/${server.id}`}>{server.title}</Link>
                <Link to={`/servers/${server.id}/edit`}>Edit Server</Link>
                
                <button onClick={() => (deleteServer(server.id))}>Delete Server</button>
            </li>
    )

}

export default ServerIndexItem;