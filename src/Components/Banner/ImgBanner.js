import React, { Component } from "react";
import ImgBan from "../../images/1.jpeg";

class ImgBanner extends Component {
  render() {
    return (
      <div>
        <img src={ImgBan} alt="banner" style={{ width: "100%", height: 400 }} />
      </div>
    );
  }
}

export default ImgBanner;
