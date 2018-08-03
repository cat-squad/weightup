import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Text, Footer, FooterTab, Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#FFC602",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44 + 4 + 4
  }
});

const activeTabStyle = StyleSheet.flatten(styles.activeTab);

export default class Navigator extends Component {
  navigateToSelectedScreen = nextScreen => {
    this.props.callback_setActiveView(nextScreen);
  };

  // TODO: Add style={{ backgroundColor: "#daeee6" }}
  // to the selected/active tab. It's a nice color :D
  render() {
    return (
      <Footer style={{ borderWidth: 0 }}>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              this.navigateToSelectedScreen("selectExerciseScreen");
            }}
          >
            <Icon name="add-circle" style={{ color: "#1C9963" }} />
            <Text style={{ color: "#1C9963" }}>Workouts</Text>
          </Button>

          <Button
            vertical
            onPress={() => {
              this.navigateToSelectedScreen("dataScreen");
            }}
          >
            <Icon name="analytics" style={{ color: "#1C9963" }} />
            <Text style={{ color: "#1C9963" }}>Data</Text>
          </Button>

          <Button
            vertical
            onPress={() => {
              this.navigateToSelectedScreen("settingsScreen");
            }}
          >
            <Icon name="settings" style={{ color: "#1C9963" }} />
            <Text style={{ color: "#1C9963" }}>Settings</Text>
          </Button>
          {/* <Button vertical active>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button> */}
        </FooterTab>
      </Footer>
    );
  }
}
