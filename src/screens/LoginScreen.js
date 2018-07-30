import React, { Component, Fragment } from "react";
import { ImageBackground, View } from "react-native";
import { Container, Button, Item, Input, Form, Label, Text } from "native-base";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      nextScreen: "selectExerciseScreen"
    };
  }

  images = [
    require("../static/img/wallpaper1.png"),
    require("../static/img/wallpaper2.png"),
    require("../static/img/wallpaper7.png"),
    require("../static/img/wallpaper4.png"),
    require("../static/img/wallpaper5.png"),
    require("../static/img/wallpaper6.png")
  ];

  wallpaperUri = this.images[Math.floor(Math.random() * 6)];

  handleLoginButtonPress = () => {
    // TODO: this screen should handle loging
    // *DO NOT* pass the password to the state!!!!
    this.props.callback_setUsername(this.state.username);
    this.props.callback_setPassword(this.state.password);
    this.props.callback_setActiveView(this.state.nextScreen);
  };

  render() {
    return (
      <ImageBackground
        source={this.wallpaperUri}
        style={{
          width: "100%",
          height: "100%"
        }}
        imageStyle={{
          resizeMode: "cover",
          position: "absolute",
          left: 0,
          top: 0
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 60
          }}
        >
          <Form style={{ width: "100%" }}>
            <Item
              floatingLabel
              style={{
                borderColor: "#1C9963",
                marginRight: 8
              }}
            >
              <Label style={{ color: "white" }}>Username</Label>
              <Input
                autoCorrect={false}
                maxLength={32}
                onChangeText={username => {
                  this.setState({ username });
                }}
              />
            </Item>
            <Item
              floatingLabel
              style={{ borderColor: "#1C9963", marginRight: 8 }}
            >
              <Label style={{ color: "white" }}>Password</Label>
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
            block
            primary
            style={{
              margin: 16,
              backgroundColor: "#1C9963"
            }}
            onPress={() => {
              this.handleLoginButtonPress();
            }}
          >
            <Text> Log in </Text>
          </Button>
          <View
            style={{
              marginLeft: 16,
              marginRight: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button small transparent>
              <Text>Create Account </Text>
            </Button>
            <Button small transparent>
              <Text>Forgot Password </Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
