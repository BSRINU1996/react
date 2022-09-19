import React from 'react';
class Products extends React.Component{
    render(){
        
        return(
            <div>
                <h2>this is Products Component.</h2>
                I am the Products Component. <br/>
                the number of products in the productlist is {this.props.productlist.length} <br/>
                the price of the product 2 is {this.props.productlist[1].price}.
            </div>
        );
    }
}
export default Products;