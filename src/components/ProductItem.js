import React, { Component } from 'react';
import './ProductItem.css';
class ProductItem extends Component {
    render(){
        return(
            <div className='ProductItem product-show'>
               <h3>{this.props.item.title}</h3>
                <p>{this.props.item.price}</p>
                <button onClick={this.props.onClick}>Add</button>
            </div>

        );
    }
}
export default ProductItem;