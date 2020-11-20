import React from "react";

class SessionErrors extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.errors

    }

    render() {

        const { errors } = this.state

        return (
            <ul>
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )   
    }

}

export default SessionErrors;