import React from 'react'
import Login from './Login'
import Products from './Products'
import Employee from './Employee'
import Users from './Users'
import Register from './Register'  



 class App extends React.Component{
  products=[
    {
      id:101,
      Name:"product1",
      price:1000,
      seller:"seller1"
    },
    {
      id:102,
      Name:"product2",
      price:2000,
      seller:"seller2"
    },
    {
      id:103,
      Name:"product3",
      price:3000,
      seller:"seller3"
    }

  ]
details=
  {Name:"srinu",
  address:"hyd",
  eid:123}

  usersList;
  addUserData=(users=[])=>
  {console.log(users),
  this.usersList=users};

  render(){
    return(
      <div>
        <center>
        <h1>Hello World!!</h1>
        
        </center>
        {this.products[1].Name} is available ,for order please login. <hr />
        <Login></Login> <hr/>
        <Products productlist={this.products}></Products> <hr></hr>
        <Employee empdet={this.details}></Employee>  <hr></hr> <hr></hr>
        <Users onuserslist={this.addUserData}></Users> <hr></hr>
        <usersPs></usersPs>
        <Register></Register>
        
      </div>
       
    );
  }
 }
 export default App;