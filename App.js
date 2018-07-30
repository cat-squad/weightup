import { View, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import { Text, Header } from "native-base";
import globalStyles from "./src/styles";

import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
import ErrorScreen from "./src/screens/ErrorScreen";
import ExercisesScreen from "./src/screens/ExercisesScreen";
import SelectExerciseScreen from "./src/screens/SelectExerciseScreen";

import SimpleTextComponent from "./src/components/SimpleTextComponent";
import Navigator from "./src/components/Navigator";

import { Font } from "expo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "loginScreen",
      username: "",
      password: ""
    };
  }
  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
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
      case "exercisesScreen":
        return (
          <View style={{ width: "100%" }}>
            <ExercisesScreen />
          </View>
        );
      case "selectExerciseScreen":
        return <SelectExerciseScreen />;
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
        return <ErrorScreen />;
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
        ({this.state.activeView !== "loginScreen" && <Navigator />})
      </View>
    );
  }
}
