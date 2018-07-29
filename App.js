import { View, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import { Text, Header } from "native-base";
import globalStyles from "./src/styles";

import SimpleTextComponent from "./src/components/SimpleTextComponent";
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "loginScreen",
      username: "",
      password: ""
    };
  }

  setUsername = username => {
    this.setState({ username });
  };

  setPassword = password => {
    this.setState({ password });
  };

  setActiveView = screenName => {
    this.setState({ activeView: screenName });
  };

  renderActiveView = () => {
    switch (this.state.activeView) {
      case "loginScreen":
        return (
          <View style={{ width: "100%" }}>
            {/* <Text> {JSON.stringify(this.state)}</Text> */}
            <LoginScreen
              callback_setUsername={this.setUsername}
              callback_setPassword={this.setPassword}
              callback_setActiveView={this.setActiveView}
            />
          </View>
        );
      case "mainScreen":
        return <MainScreen />;
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
        <View
          style={
            this.state.activeView !== "loginScreen" && globalStyles.container
          }
        >
          {this.renderActiveView()}
        </View>
        ({this.state.activeView !== "loginScreen" && (
          <View style={globalStyles.navContainer}>
            <Text> Navigation goes here </Text>
          </View>
        )})
      </View>
    );
  }
}
