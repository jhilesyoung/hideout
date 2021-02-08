import React from 'react';


class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            photoFile: null,
            photoUrl: null,
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
        // console.log(this.props)
        const { username } = this.props
        // const { currentUser } = this.props
        const  preview  = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
       
        return (
        <div className="icon-change">
          <form className="icon-form" onSubmit={this.handleSubmit.bind(this)}>
              <label>preview</label>
                  <input type="file"
                      onChange={this.handleFile.bind(this)}/>
                      <div>
                        {username}
                      </div>
                        {preview}
                      
                    
                      {/* <Modal /> */}
              <button className="icon-submit" value={this.props.formType}> 
              {/* /* onClick={() => this.props.openModal('Change Icon')} */}
                Change Icon
              </button>
          </form>
        </div>
      );
    }
}

export default ProfileForm;