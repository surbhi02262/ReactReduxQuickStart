import React, { Component } from "react";
import { HeaderMenu } from "../../Constants";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import MenuBar from "../MenuBar/MenuBar";
class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="top-header">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="header-title">{title}</span>
        </div>

        <div className="main-menu">
          <ul>
            {HeaderMenu.map((menuItem, index) => (
              <li key={`menu-${index}`}>
                <Link to={menuItem.state}>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <MenuBar />
      </div>
    );
  }
}
export default Header;
