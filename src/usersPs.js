import React from 'react';
class usersPs extends React.Component{
    users=[
        {username:"abc"
        isAdmin:false,
        emailid:"user@gmail.com" 
    }
    {username:"bbc"
        isAdmin:true,
        emailid:"adminuser@gmail.com" 
    }
    {username:"cbc"
        isAdmin:false,
        emailid:"user123@gmail.com" 
    }
    ]
}
render(){
    console.log(this.props);
    return(
        <div>
           <h2>this is problem staement</h2>
           
        </div>
    );
}
}
export default usersPs;