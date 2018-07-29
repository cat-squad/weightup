import React, { Component, Fragment } from "react";
import { ScrollView } from "react-native";
import { Text } from "native-base";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  render() {
    return (
      <Fragment>
        <ScrollView
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            backgroundColor: "red"
          }}
          contentContainerStyle={{
            alignItems: "center"
          }}
        >
          <Text>HELLO?</Text>
        </ScrollView>
      </Fragment>
    );
  }
}
