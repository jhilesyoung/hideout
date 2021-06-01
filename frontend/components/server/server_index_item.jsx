import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';

class ServerIndexItem extends React.Component {

    constructor(props) {
        super(props)
        
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault()
        this.props.deleteServer(this.props.server.id)
    }

    render() {
        const { server } = this.props;
        let shortenedTitle = server.title.slice(0,3)

    return (
        <div>
            {/* <div> <img src={window.logourl} className="logo" width="125px"/></div> */}
            <li>
                <Link className="server-li"to={`/servers/${server.id}/channels`}>
                    {/* <img src ={window.servericonurl} className="server-icon" width="75px"/> */}
                    <button className="server-button">{shortenedTitle}</button>
                </Link>
                {/* <Link to={`/servers/${server.id}/edit`}>Edit Server</Link> */}
                {/* <button onClick={this.handleDelete}><i className="fas fa-trash-alt" ></i>
                
                </button> */}
            </li>
        </div>
        )
    }

}

export default ServerIndexItem;