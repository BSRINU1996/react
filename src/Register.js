import React from 'react';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            emailid: ''
        }
    }

    stateHandler = (event) => {
        //  event.preventDefault();
        var value = event.target.value;
        var name = event.target.name;
        console.log("name", name);
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>

                <form>

                    username <input onChange={this.stateHandler} type="text" name="username"></input> <br></br><br></br>
                    password <input onChange={this.stateHandler} type="password" name="password"></input> <br></br><br></br>
                    emailid <input onChange={this.stateHandler} type="email" name="emailid"></input> <br></br><br></br>
                    <button onClick={this.handleSubmit}>Register</button>

                </form>

            </div>
        )
    }
}
export default Register;