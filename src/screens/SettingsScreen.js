import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
  Title,
  Right
} from "native-base";

export default class DataScreen extends Component {
  render() {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Header>
          <Left />
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
        <View
          style={{
            alignItems: "center",
            paddingTop: 8,
            paddingRight: 16,
            paddingLeft: 16
          }}
        >
          <Button
            onPress={() => {
              this.props.callback_signOut();
            }}
            iconLeft
            block
            bordered
            primary
            style={{
              height: 60,
              marginTop: 8,
              marginBottom: 8,
              borderColor: "#1C9963"
            }}
          >
            <Text style={{ fontSize: 14, color: "#1C9963" }}>Sign out</Text>
          </Button>
        </View>
      </View>
    );
  }
}
