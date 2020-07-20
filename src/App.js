import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Carts from './components/Carts';
class App extends Component {
  constructor(){
    super();
    this.state= {
      menu: "products"
    }
this.onAddProductClicked=this.onAddProductClicked.bind(this);
this.onProductsClicked=this.onProductsClicked.bind(this);
this.onCartsClicked=this.onCartsClicked.bind(this);
  }
  onAddProductClicked(){
    this.setState({
      menu: "add-product"
    })
  }
  onProductsClicked(){
    this.setState({
      menu: "products"
    })
  }
  onCartsClicked(){
    this.setState({
      menu: "carts"
    })
  }
  onOrdersClicked(){
    this.setState({
      menu: "orders"
    })
  }

render(){
  return(
    
    <div className="App">
      <div className="menu">
        <button onClick={this.onProductsClicked}>Products</button>
        <button onClick={this.onAddProductClicked}>Add-product</button>
        <button onClick={this.onCartsClicked}>Carts</button>
        <button onClick={this.onOrdersClicked}>Orders</button>
      </div>
      {this.state.menu =="products" ? <Products /> :null}
      {this.state.menu =="add-product" ?  <AddProduct/> :null}
      {this.state.menu =="carts" ?  <Carts/> :null}
    </div>
  )
}
}
export default App;