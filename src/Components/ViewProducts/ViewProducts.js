import React, { Component } from "react";
import Product from "../Product/Product";
import ItemViewer from "../ItemViewer/ItemViewer";
class ViewProducts extends Component {
  state = {
    products: [],
    item: {}
  };
  componentDidMount() {
    fetch(" http://www.mocky.io/v2/5b6733813200000910ee1244")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  itemSelected = item => {
    this.setState({ item });
  };
  closeItemView = () => {
    this.setState({ item: {} });
  };
  render() {
    const { products, item } = this.state;
    console.log("products", products);
    return (
      <div className="view-products">
        {item.title ? (
          <ItemViewer item={item} closeItemView={this.closeItemView} />
        ) : (
          products.map(product => (
            <Product item={product} itemSelected={this.itemSelected} />
          ))
        )}
      </div>
    );
  }
}

export default ViewProducts;
