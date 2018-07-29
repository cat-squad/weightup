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

export default class Navigator extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
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
