import React, { Component } from "react";
import Header from "../Header/Header";
import { cart } from "../../Constants";
import _ from "lodash";
class BuyNow extends Component {
  state = {
    sortBy: "price"
  };

  sortByChanged = event => {
    this.setState({ sortBy: event.target.value });
  };
  render() {
    const { sortBy } = this.state;
    let displayCart = _.sortBy(cart, [
      function(cardItem) {
        return cardItem[sortBy];
      }
    ]);
    return (
      <div>
        <Header title="ReactRedux | Cart" />

        <div className="buy-now-cart">
          <div className="filter-bar">
            <select value={sortBy} onChange={e => this.sortByChanged(e)}>
              <option value="">Select sortBy</option>
              {cart.length > 0 &&
                Object.keys(cart[0]).map((sortOption, index) => (
                  <option value={sortOption}>{sortOption}</option>
                ))}
            </select>
          </div>
          <div className="cart-view">
            {displayCart.map((item, index) => (
              <div key={item.id} className="cart-item">
                <div className="image-holder">
                  <img src={item.image} alt={item.description} />
                </div>
                <div className="item-detail">
                  <b>{item.title}</b>

                  <div>Price: Rs. {item.price}</div>
                  <div>Description :{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="payment">
            <h2>Payment Details</h2>
            <div>Total item in cart : {cart.length}</div>
            <div>
              Total Price : {cart.reduce((sum, item) => sum + item.price, 0)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyNow;
