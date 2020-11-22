import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = () => ({
    
    render() {
        
        const { server, deleteServer } = this.props;

        return(
            <li>
                <Link to={`/servers/${server.id}`}>{server.title}</Link>
            </li>
        );
    }
});

export default ServerIndexItem;