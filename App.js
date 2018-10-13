import { View, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import { Text, Header } from "native-base";
import globalStyles from "./src/styles";
import { Ionicons } from "@expo/vector-icons";

import TestScreen from "./src/screens/TestScreen";
import DataScreen from "./src/screens/DataScreen";
import ErrorScreen from "./src/screens/ErrorScreen";
import ExercisesScreen from "./src/screens/ExercisesScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
import SelectExerciseScreen from "./src/screens/SelectExerciseScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import SimpleTextComponent from "./src/components/SimpleTextComponent";
import Navigator from "./src/components/Navigator";

import { Font } from "expo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "testScreen",
      username: "",
      password: "",
      selectedMuscleGroup: "",
      fontsLoaded: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({
      fontsLoaded: true
    });
  }

  setUsername = username => {
    this.setState({
      username
    });
  };

  setPassword = password => {
    this.setState({
      password
    });
  };

  setActiveView = screenName => {
    this.setState({
      activeView: screenName
    });
  };

  setSelectedMuscleGroup = selectedMuscleGroup => {
    this.setState({
      selectedMuscleGroup
    });
  };

  handleSignout = () => {
    this.setState({
      username: "",
      password: "",
      activeView: "loginScreen"
    });
  };

  renderActiveView = () => {
    switch (this.state.activeView) {
      case "loginScreen":
        return (
          <View
            style={{
              width: "100%"
            }}
          >
            {" "}
            {/* <Text> {JSON.stringify(this.state)}</Text> */}{" "}
            <LoginScreen
              callback_setUsername={this.setUsername}
              callback_setPassword={this.setPassword}
              callback_setActiveView={this.setActiveView}
            />{" "}
          </View>
        );
      case "exercisesScreen":
        return (
          <View
            style={{
              width: "100%"
            }}
          >
            <ExercisesScreen
              selectedMuscleGroup={this.state.selectedMuscleGroup}
              callback_setActiveView={this.setActiveView}
            />{" "}
          </View>
        );
      case "selectExerciseScreen":
        return (
          <SelectExerciseScreen
            callback_setActiveView={this.setActiveView}
            callback_setSelectedMuscleGroup={this.setSelectedMuscleGroup}
          />
        );
      case "dataScreen":
        return <DataScreen />;
      case "settingsScreen":
        return <SettingsScreen callback_signOut={this.handleSignout} />;
      case "mainScreen":
        return <MainScreen />;
      case "testScreen":
        return <TestScreen />;
      default:
        return <ErrorScreen />;
    }
  };

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <View>
          <Text>hello</Text>
        </View>
      );
    }

    return (
      <View style={globalStyles.screenContainer}>
        <View style={[globalStyles.container]}>{this.renderActiveView()}</View>(
        {this.state.activeView !== "loginScreen" &&
          this.state.activeView !== "testScreen" && (
            <Navigator
              callback_setActiveView={this.setActiveView}
              activeView={this.state.activeView}
            />
          )}
        )
      </View>
    );
  }
}
