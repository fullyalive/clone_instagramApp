import React, { Component } from "react";
import LogInScreen from "./presenter";

class Container extends Component {
  static navigations = ({ navigation }) => ({
    title: "Log In"
  });
  render() {
    return <LogInScreen />;
  }
}

export default Container;
