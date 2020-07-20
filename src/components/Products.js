import React, { Component } from 'react';
import ProductItem from './ProductItem';
class Products extends Component {
    constructor() {
        super();
        this.products = JSON.parse(localStorage.getItem("lsc-products"));
        if (!this.products) {
            this.products = [];
        }
    }
    onAddCart(item){
        return (event) =>{
            let carts=JSON.parse(localStorage.getItem("carts"));
            if (!carts) {
                carts = [];
            }
            let oldCart=carts.find((element)=> element.title == item.title);
            console.log(oldCart);
            if(oldCart){
                oldCart.quantity +=1;
            }
            else{
                item.quantity=1;
                carts.push(item);
            }
            localStorage.setItem("carts",JSON.stringify(carts));
            console.log(carts);
        }
    }
    render() {
        return (
            <div className="Products">
                {this.products.length && this.products.map((item, index) =>
                    <ProductItem
                        item={item}
                        key={index}
                        onClick={this.onAddCart(item)}
                    />
                )}
            </div>
        );
    }
}
export default Products;