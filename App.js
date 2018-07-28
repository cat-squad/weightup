import { View, ScrollView } from "react-native";
import React, { Component, Fragment } from "react";
import { Container, Button, Item, Input, Form, Label, Text } from "native-base";
import globalStyles from "./src/styles";

import SimpleTextComponent from "./src/components/SimpleTextComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "homeScreen",
      username: "",
      password: ""
    };
  }

  renderActiveView = () => {
    switch (this.state.activeView) {
      case "homeScreen":
        return (
          <Fragment>
            <Form style={{ width: "100%", paddingTop: 44 }}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input
                  autoCorrect={false}
                  maxLength={32}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  autoCorrect={false}
                  maxLength={32}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
            </Form>
            <Button block primary>
              <Text> Log in </Text>
            </Button>
            <Text>{this.state.activeView}</Text>
            <Text>{this.state.username}</Text>
            <Text>{this.state.password}</Text>
          </Fragment>
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
