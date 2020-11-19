// import React from 'react';
// import { Link } from 'react-router-dom';

// class SessionForm extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             username: '',
//             password: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     update(field) {
//         return e => this.setState({[field]: e.target.value})
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         this.props.processForm(user);
//     }

    

//     render() {
//         const { user } = this.state;
        

//         return (
//         <div className="login-form-container">
//             <form onSubmit={this.handleSubmit}>
//                 <h1>Welcome back!</h1>
//                 <br/>
//                 <h2>We're so excited to see you again!</h2>
//                 <h1>{this.props.formType}</h1>
//                 <label>Email
//                     <input
//                         type="text"
//                         value={this.state.email}
//                         onChange={this.update("email")}>
//                     </input>
//                 <br/>
//                 </label>
//                 <label>Username
//                     <input 
//                         type="text"
//                         value={this.state.username}
//                         onChange={this.update("username")}>
//                     </input>
//                 </label>
//                 <br/>
//                 <label>Password
//                     <input
//                         type="password"
//                         value={this.state.password}
//                         onChange={this.update("password")}>
//                     </input>
//                 </label>
//                 <br/>
//                 <button type="submit" value={this.props.formType}>Submit</button>
//             </form>
//             <h3>Need an account? <Link to="/signup">Register</Link></h3>
//         </div>
//         )
//     }

// }

// export default SessionForm;