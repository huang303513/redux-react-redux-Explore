import React, { Component } from "react";
import { ReactReduxContext } from "./Context";

class Provider extends Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
      <ReactReduxContext.Provider value={{ store: this.store }}>
        {this.props.children}
      </ReactReduxContext.Provider>
    );
  }
}
Provider.contextType = ReactReduxContext;

export default Provider;
