import React, { Component } from "react";
import Header from "../Header/Header";
// import Banner from "./../Banner";
import ViewProducts from "../ViewProducts/ViewProducts";
import ImgBanner from "../Banner/ImgBanner";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Header title="ReactRedux | Home" />
        <ImgBanner />
        <ViewProducts />
      </div>
    );
  }
}

export default HomePage;
