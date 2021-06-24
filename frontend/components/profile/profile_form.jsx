import React from 'react';
import { Link } from 'react-router-dom';


class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            photoFile: null,
            photoUrl: null,
            username: ''
        };
    }

      handleFile(e) {
        
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
    
        reader.onloadend = () => {
          
          return this.setState({ photoUrl: reader.result, photoFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
      }

      handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('user[username]', this.state.title);
        if (this.state.photoFile) {
      
          formData.append('user[photo]', this.state.photoFile);
        }
      
        $.ajax({
          url: `api/users/${this.state.currentUser}`,
          method: 'PATCH', 
          data: formData,
          contentType: false,
          processData: false,
          enctype: 'multipart/form-data',
          cache: false
        });
      }

      render() {
      
        const { username, logout } = this.props
       
        const  preview  = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
       
        return (
        <div className="icon-change">
              <label><img className="profile-pic" src={window.servericonurl} /></label>
              <div className="profile text"> 
                <div className="welcome-message">Welcome, {username}!</div>
                  <Link to="/" className="nav-logout" onClick={()=> logout()}>
                            Logout
                  </Link>
              </div>
          {/* <form className="icon-form" onSubmit={this.handleSubmit.bind(this)}> */}
                  {/* <input type="file"
                      onChange={this.handleFile.bind(this)}/>
                      <div>
                        {username}
                      </div>
                        {preview} */}
                      
                    
                      {/* <Modal /> */}
              {/* <button className="icon-submit" value={this.props.formType}>  */}
              {/* /* onClick={() => this.props.openModal('Change Icon')} */}
                {/* Change Icon
              </button> */}
          {/* </form> */}
        </div>
      );
    }
}

export default ProfileForm;