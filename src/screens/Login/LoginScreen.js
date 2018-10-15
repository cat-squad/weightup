import React, { Component, Fragment } from "react";
import { Image, View } from "react-native";
import { Container, Button, Item, Input, Form, Label, Text } from "native-base";
import styles from "@styles";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSignUpButtonPress = () => {
    this.props.callback_setActiveView("signUpScreen");
  };

  handleLoginButtonPress = () => {
    // TODO: this screen should handle loging
    // *DO NOT* pass the password to the state!!!!
    this.props.callback_setUsername(this.state.username);
    this.props.callback_setPassword(this.state.password);
    this.props.callback_setActiveView("selectExerciseScreen");
  };

  render() {
    return (
      <View
        style={[
          styles.primaryBackgroundColor,
          {
            width: "100%",
            height: "100%"
          }
        ]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 80,
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 220, height: 220, marginBottom: 80 }}
            source={require("@img/logo.png")}
            resizeMode="contain"
          />
          <Form style={{ width: "100%" }}>
            <Item style={[styles.textInput, styles.textInputFlatBottom]}>
              <Input
                rounded
                selectionColor={styles.colors.primaryGold}
                placeholderTextColor={styles.colors.lightGray}
                placeholder="Email"
                autoCorrect={false}
                maxLength={44}
                onChangeText={username => {
                  this.setState({ username });
                }}
                style={styles.textInputColor}
              />
            </Item>

            <Item style={[styles.textInput, styles.textInputFlatTop]}>
              <Input
                rounded
                secureTextEntry
                selectionColor={styles.colors.primaryGold}
                placeholderTextColor={styles.colors.lightGray}
                placeholder="Password"
                autoCorrect={false}
                maxLength={32}
                onChangeText={password => {
                  this.setState({ password });
                }}
                style={styles.textInputColor}
              />
            </Item>
          </Form>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: 22,
              paddingRight: 22
            }}
          >
            <Button
              small
              transparent
              onPress={() => {
                this.handleSignUpButtonPress();
              }}
            >
              <Text style={{ fontSize: 12, color: styles.colors.lightGray }}>
                Sign up
              </Text>
            </Button>
            <Button small transparent>
              <Text style={{ fontSize: 12, color: styles.colors.lightGray }}>
                Forgot password?
              </Text>
            </Button>
          </View>

          <Button
            block
            rounded
            primary
            style={{
              margin: 32,
              backgroundColor: styles.colors.primaryGold
            }}
            onPress={() => {
              this.handleLoginButtonPress();
            }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>LOG IN</Text>
          </Button>
        </View>
      </View>
    );
  }
}
