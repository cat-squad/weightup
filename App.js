import { View, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import { Text, Header } from "native-base";
import styles from "@styles";
import { Ionicons } from "@expo/vector-icons";

import LoadingScreen from "@screens/Loading/LoadingScreen";
import SignUpScreen from "@screens/Login/SignUpScreen";
import DataScreen from "@screens/DataScreen";
import ErrorScreen from "@screens/ErrorScreen";
import ExercisesScreen from "@screens/ExercisesScreen";
import LoginScreen from "@screens/Login/LoginScreen";
import MainScreen from "@screens/MainScreen";
import SelectExerciseScreen from "@screens/SelectExerciseScreen";
import SettingsScreen from "@screens/SettingsScreen";

import SimpleTextComponent from "./src/components/SimpleTextComponent";
import Navigator from "./src/components/Navigator";

import { Font } from "expo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "loginScreen",
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
      ...this.state,
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
            <ExercisesScreen
              selectedMuscleGroup={this.state.selectedMuscleGroup}
              callback_setActiveView={this.setActiveView}
            />
          </View>
        );
      case "selectExerciseScreen":
        return (
          <SelectExerciseScreen
            callback_setActiveView={this.setActiveView}
            callback_setSelectedMuscleGroup={this.setSelectedMuscleGroup}
          />
        );
      case "signUpScreen":
        return <SignUpScreen callback_setActiveView={this.setActiveView} />;
      case "dataScreen":
        return <DataScreen />;
      case "settingsScreen":
        return <SettingsScreen callback_signOut={this.handleSignout} />;
      case "mainScreen":
        return <MainScreen />;
      case "signUpScreen":
        return <SignUpScreen />;
      default:
        return <ErrorScreen />;
    }
  };

  render() {
    if (!this.state.fontsLoaded) {
      return <LoadingScreen />;
    }

    return (
      <View style={styles.screenContainer}>
        <View style={[styles.container]}>{this.renderActiveView()}</View>(
        {this.state.activeView !== "loginScreen" &&
          this.state.activeView !== "signUpScreen" && (
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
