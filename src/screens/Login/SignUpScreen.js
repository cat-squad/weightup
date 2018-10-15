import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "@styles";
import {
  Header,
  Text,
  Left,
  Body,
  Icon,
  Button,
  Title,
  Right,
  Form,
  Input,
  Item,
  Label
} from "native-base";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      nextScreen: "selectExerciseScreen"
    };
  }

  handleSignUpButtonPress = () => {
    // TODO: this screen should handle loging
    // *DO NOT* pass the password to the state!!!!
    alert("Signing up logic goes here");
    this.props.callback_setActiveView("loginScreen");
  };

  handleBackButtonPress = () => {
    this.props.callback_setActiveView("loginScreen");
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
        <Header style={styles.navContainer}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.handleBackButtonPress();
              }}
            >
              <Icon name="arrow-back" style={{ color: styles.colors.white }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontWeight: "300", color: styles.colors.white }}>
              SIGN UP
            </Title>
          </Body>
          <Right />
        </Header>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            paddingBottom: 80,
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 140, height: 140, marginTop: 12 }}
            source={require("@img/logo.png")}
            resizeMode="contain"
          />
          <Form style={{ width: "100%" }}>
            <Label
              style={{
                marginLeft: 28,
                paddingTop: 24,
                paddingBottom: 4,
                fontSize: 13,
                fontWeight: "300",
                color: styles.colors.white
              }}
            >
              EMAIL
            </Label>
            <Item style={styles.textInput}>
              <Input
                rounded
                selectionColor={styles.colors.primaryGold}
                autoCorrect={false}
                maxLength={44}
                onChangeText={username => {
                  this.setState({ username });
                }}
                style={styles.textInputColor}
              />
            </Item>

            <Label
              style={{
                marginLeft: 28,
                paddingTop: 24,
                paddingBottom: 4,
                fontSize: 13,
                fontWeight: "300",
                color: styles.colors.white
              }}
            >
              PASSWORD
            </Label>
            <Item style={styles.textInput}>
              <Input
                rounded
                secureTextEntry
                selectionColor={styles.colors.primaryGold}
                autoCorrect={false}
                maxLength={32}
                onChangeText={password => {
                  this.setState({ password });
                }}
                style={styles.textInputColor}
              />
            </Item>

            <Label
              style={{
                marginLeft: 28,
                paddingTop: 8,
                paddingBottom: 4,
                fontSize: 13,
                fontWeight: "300",
                color: styles.colors.white
              }}
            >
              CONFIRM PASSWORD
            </Label>
            <Item style={styles.textInput}>
              <Input
                rounded
                secureTextEntry
                selectionColor={styles.colors.primaryGold}
                autoCorrect={false}
                maxLength={32}
                onChangeText={password => {
                  this.setState({ password });
                }}
                style={styles.textInputColor}
              />
            </Item>
          </Form>

          <Button
            block
            rounded
            primary
            style={{
              margin: 32,
              backgroundColor: styles.colors.primaryGold
            }}
            onPress={() => {
              this.handleSignUpButtonPress();
            }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              LET'S GO!
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
