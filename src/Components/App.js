import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Services from "./Services/Services";
import Cart from "./BuyNow/BuyNow";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" render={() => <Header title="Target" />} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/go_to_cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default App;
