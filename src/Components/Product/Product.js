import React from "react";

const Product = ({ item, itemSelected }) => {
  return (
    <div key={item.id} className="product" onClick={() => itemSelected(item)}>
      <img src={item.image} alt={item.description} />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.description}</div>
    </div>
  );
};

export default Product;
