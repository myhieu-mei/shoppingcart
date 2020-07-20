import React, { Component } from 'react';
import CartItem from './CartItem';
class Carts extends Component {
    constructor() {
        super();
        this.state = {
           carts: JSON.parse(localStorage.getItem("carts"))
    }
}
    onRemoveCart(key){
        return (event) =>{
            let cart=JSON.parse(localStorage.getItem("carts"));
            cart.splice(key,1);
            this.setState({
                carts: cart
            })
        }
    }
    render() {
        let cart=JSON.parse(localStorage.getItem("carts"));
        let total=0 ;
        if(cart.length){
          for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
          }
        }
        return (
            <div className="Carts">
                {this.state.carts.length && this.state.carts.map((item, key) =>
                    <CartItem
                        item={item}
                        onClick={this.onRemoveCart(key)}
                    />
                )}
                <p>Total: {total}</p>
            </div>
        );
    }
}
export default Carts;