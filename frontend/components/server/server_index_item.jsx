import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js'
import { render } from 'react-dom';

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props)
        
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault()
        this.props.deleteServer(this.props.server.id)
    }

    // handleClick() {

    // }

    render() {
        const { server } = this.props;
    return (
            <li>
                <Link to={`/servers/${server.id}/channels`}>
                    <img src ={window.servericonurl} className="server-icon" width="75px"/>
                </Link>
                {/* <Link to={`/servers/${server.id}/edit`}>Edit Server</Link> */}
                <button onClick={this.handleDelete}><i className="fas fa-trash-alt" ></i>
                
                </button>
            </li>
    )
    }

}

export default ServerIndexItem;