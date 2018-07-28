import { View, Text, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import globalStyles from "./src/styles";

import SimpleTextComponent from "./src/components/SimpleTextComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "homeScreen"
    };
  }

  renderActiveView = () => {
    switch (this.state.activeView) {
      case "homeScreen":
        return (
          <Fragment>
            <Text style={[globalStyles.textInput]}>Hello</Text>
            <SimpleTextComponent name="Kaitlyn" />
          </Fragment>
        );
      default:
        return (
          <View>
            <Text>Go home</Text>
          </View>
        );
    }
  };

  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <View style={globalStyles.container}>{this.renderActiveView()}</View>
        <View style={globalStyles.navContainer} />
      </View>
    );
  }
}
