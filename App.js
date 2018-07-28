import { View, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import { Container, Button, Item, Input, Form, Label, Text } from "native-base";
import globalStyles from "./src/styles";

import SimpleTextComponent from "./src/components/SimpleTextComponent";
import LoginScreen from "./src/screens/LoginScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "homeScreen",
      username: "",
      password: ""
    };
  }

  setUsername = username => {
    this.setState({ username });
  };

  renderActiveView = () => {
    switch (this.state.activeView) {
      case "homeScreen":
        return (
          <View style={{ width: "100%" }}>
            <Text>
              The parent component has a username of {this.state.username}
            </Text>
            <LoginScreen callBack_setUsername={this.setUsername} />
          </View>
        );
      case "testScreen":
        return (
          <Fragment>
            <Text style={[globalStyles.textInput]}>Hello</Text>
            <SimpleTextComponent name="Kaitlyn" />
          </Fragment>
        );
      default:
        return (
          <View>
            <Text>How did you get here?</Text>
          </View>
        );
    }
  };

  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <View style={globalStyles.container}>{this.renderActiveView()}</View>
        <View style={globalStyles.navContainer}>
          <Text> Navigation goes here </Text>
        </View>
      </View>
    );
  }
}
