import React, { Component, Fragment } from "react";
import { Container, Button, Item, Input, Form, Label, Text } from "native-base";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

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
                this.props.callback_setUsername(username);
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              maxLength={32}
              onChangeText={password => {
                this.setState({ password });
                this.props.callback_setPassword(password);
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
        >
          <Text> Log in </Text>
        </Button>
        <Container style={{ backgroundColor: "red" }}>Hello</Container>
      </Fragment>
    );
  }
}
