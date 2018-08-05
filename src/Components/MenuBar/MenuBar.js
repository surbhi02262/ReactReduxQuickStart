import React, { Component } from "react";
import { MenuList } from "../../Constants";
import { Link } from "react-router-dom";
class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
      menus: MenuList
    };
  }
  //   componentDidMount() {
  //     fetch("http://www.mocky.io/v2/5b66fa2f3200005000ee1215")
  //       .then(res => res.json())
  //       .then(menus => this.setState({ menus }));
  //   }
  render() {
    const { menus } = this.state;
    console.log(menus);
    return (
      <div className="menu-bar">
        <ul>
          {Object.keys(menus).map((menuItem, index) =>
            Object.keys(menus[menuItem]).map((category, index) => {
              const { title, tabs } = menus[menuItem][category];
              let itemLength = Object.keys(menus[menuItem]);
              return (
                <li
                  key={`category-${index}`}
                  className="list-item"
                  style={{
                    width: `${100 / itemLength.length}%`
                  }}
                >
                  {title}

                  <div className="drop-menu" key={`drop-${index}`}>
                    {tabs &&
                      tabs.map((tab, index) => (
                        <div
                          style={{ backgroundColor: "white" }}
                          key={`drop-x-${index}`}
                        >
                          {tab.columns.map((itemList, index) => (
                            <div
                              key={`tab-list-${index}`}
                              style={{
                                width: `${100 / tab.columns.length}%`,
                                float: "left"
                              }}
                            >
                              <ul>
                                {itemList.map((subItem, index) => (
                                  <li key={`list-${index}`}>
                                    <Link to={subItem.url}>
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default MenuBar;
