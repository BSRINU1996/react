import React from 'react';

class Employee extends React.Component{
    render(){
        return(
            <div> 
                <h2>We are in Employee component</h2> <br />
                <p>we accessing the 'details' object of App component in this Employee component using props. </p>
                {this.props.empdet.Name} <br />   
                {this.props.empdet.address}  <br/>   
                {this.props.empdet.eid}   
           </div>
           
        );
    }
}
export default Employee;