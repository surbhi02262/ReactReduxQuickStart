import React, { Component } from "react";
import { BannerImg } from "../Constants";
import DtaImg from "../images/images.jpeg";
let timmer;
class Banner extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    this.changeCount();
  }
  componentWillMount() {
    clearInterval(timmer);
  }
  changeCount = () => {
    timmer = setInterval(() => {
      if (this.state.count > 4) {
        timmer = setInterval(() => this.setState({ count: 0 }), 1000);
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ height: 400 }}>
        {BannerImg[count] && (
          <div key={`banner-${count}`}>
            <img
              style={{ height: "100%", width: "400px" }}
              src={DtaImg}
              alt={BannerImg[count].description}
            />
            <div>{BannerImg[count].description}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Banner;
