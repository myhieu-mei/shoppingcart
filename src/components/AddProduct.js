import React, { Component } from 'react';
class AddProduct extends Component {

    onAddProduct(event){
        event.preventDefault();
            let title = event.target["title"].value;
            let price = event.target["price"].value;
            let product= {
                title: title,
                price: price
            }
            let products= JSON.parse(localStorage.getItem("lsc-products"));
            if(!products){
                products = [];
            }
            products.push(product);
            localStorage.setItem("lsc-products",JSON.stringify(products));
         
    }

    render(){
        return(
            <form className="AddProduct" onSubmit={this.onAddProduct}>
            <input type="text" name="title" />
            <input type="text" name="price" />
            <button>Add</button>
           
        </form>
        );
    }
}
export default AddProduct;