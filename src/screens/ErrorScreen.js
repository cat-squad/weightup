import React, { Component } from "react";
import { View } from "react-native";
import { Text, Left, Right, Header, Title, Body } from "native-base";

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Header>
          <Left />
          <Body>
            <Title>Uh oh!</Title>
          </Body>
          <Right />
        </Header>

        <View
          style={{
            alignItems: "center",
            paddingTop: 8
          }}
        >
          <Text>How did you get here?</Text>
        </View>
      </View>
    );
  }
}
