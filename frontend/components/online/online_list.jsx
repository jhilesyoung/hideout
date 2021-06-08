import React from 'react';

class OnlineList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            
            <div className="online">
                <p className="members-list" >HIDEOUT MEMBERS</p>
                <li >
                <img className="profile1" width ="60px" src={window.profile1} />  JayHeezy
                </li>
                <li>
                <img className="profile2" width ="55px" src={window.profile2} />  Tahmikachu
                </li>
                <li>
                <img className="profile2" width ="55px" src={window.profile3} />  MiniMimi
                </li>
                <li>
                <img className="profile1" width ="55px" src={window.profile4} />  ChrisBeezy
                </li>
                <li>
                <img className="profile2" width ="55px" src={window.profile5} />  JasLeezy
                </li>
                <li>
                <img className="profile1" width ="55px" src={window.profile6} />  RayMeezy
                </li>
                <li>
                <img className="profile1" width ="55px" src={window.profile7} />  AverTeezy
                </li>
                <li>
                <img className="profile2" width ="55px" src={window.profile8} />  AlexanDreezy
                </li>
                <li>
                <img className="profile1" width ="55px" src={window.profile9} />  WishIBoughtAMC
                </li>
                <li>
                <img className="profile1" width ="55px" src={window.profile10} />  ILost$2500
                </li>
            </div>
        )
    }

}

export default OnlineList