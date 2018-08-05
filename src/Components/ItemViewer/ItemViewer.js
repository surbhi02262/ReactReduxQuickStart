import React, { Component } from "react";
import { cart } from "../../Constants";
import { Link } from "react-router-dom";
class ItemViewer extends Component {
  addToCart = item => {
    cart.push(item);
  };
  render() {
    const { item, closeItemView } = this.props;
    return (
      <div key={item.id}>
        <div>
          <button onClick={() => closeItemView()}>Close</button>
        </div>
        <img src={item.image} alt={item.description} />
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>{item.description}</div>
        <div>
          <Link to="/go_to_cart">Go to Cart</Link>
          <button onClick={() => this.addToCart(item)}>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default ItemViewer;
