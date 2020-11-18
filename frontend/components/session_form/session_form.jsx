class SessionForm extends React.Component {

    constructor(props) {
        super(props)

        this.props = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        const { user } = this.props;
        const submitButtonText = '';
        if (this.props.formType === 'login') {
            submitButtonText = 'Jump In'
        } else {
            submitButtonText = 'Register'
        }

        return (
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit}>
                <h1>Welcome back!</h1>
                <br/>
                <h2>We're so excited to see you again!</h2>
                <h1>{this.props.formType}</h1>
                <label>Username
                    <input 
                        type="text"
                        value={user.username}>
                    </input>
                </label>

                <label>Password
                    <input
                        type="password"
                        value={user.password}>
                    </input>
                </label>
                <button type="submit" value={this.props.formType}>{submitButtonText}</button>
            </form>
            <h3>Need an account? <Link to="/signup">Register</Link></h3>
        </div>
        )
    }

}

export default SessionForm;