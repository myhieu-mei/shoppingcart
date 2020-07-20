import React, { Component } from 'react';
import './ProductItem.css';
class CartItem extends Component {
    render(){
        return(
            <div className='CartItem product-show' >
               <h3>{this.props.item.title}</h3>
                <p>{this.props.item.price}</p>
                <p>Quantity: {this.props.item.quantity}</p>
                <button onClick={this.props.onClick}>Remove</button>
            </div>

        );
    }
}
export default CartItem;