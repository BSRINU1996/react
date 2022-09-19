import React from 'react';
class Users extends React.Component{
    users=[
        {
            Name:"kalyan",
            address:"hyd"
        },
        {
            Name:"kirann",
            address:"vizag"
        },
        {
            Name:"kamesh",
            address:"rajamundry"
        }
    ]
     componentDidMount(){
        console.log("i am loaded");
        console.log("this.props");
        this.props.onuserslist(this.users);
     }
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>this is User Component.</h2>
                <p>we are going to send the data from child component to parent component.</p>
            </div>
        );
    }
}
export default Users;