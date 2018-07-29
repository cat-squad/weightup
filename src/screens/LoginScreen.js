import React, { Component, Fragment } from "react";
import { Container, Button, Item, Input, Form, Label, Text } from "native-base";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      nextScreen: "mainScreen"
    };
  }

  handleLoginButtonPress = () => {
    // TODO: this screen should handle loging
    // *DO NOT* pass the password to the state!!!!
    this.props.callback_setUsername(this.state.username);
    this.props.callback_setPassword(this.state.password);
    this.props.callback_setActiveView(this.state.nextScreen);
  };

  render() {
    return (
      <Fragment>
        <Form style={{ width: "100%", paddingTop: 44 }}>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              autoCorrect={false}
              maxLength={32}
              onChangeText={username => {
                this.setState({ username });
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              maxLength={32}
              onChangeText={password => {
                this.setState({ password });
              }}
            />
          </Item>
        </Form>
        <Button
          bordered
          block
          primary
          style={{
            margin: 16
          }}
          onPress={() => {
            this.handleLoginButtonPress();
          }}
        >
          <Text> Log in </Text>
        </Button>
      </Fragment>
    );
  }
}
