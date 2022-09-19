import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <h2>this is Login Component.</h2>
                <form>
                    Username: <input type="text" name="username" ></input> <br />
                    Password: <input type="text" name="password"></input>  <br />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
export default Login;
