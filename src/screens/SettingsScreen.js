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
            paddingTop: 8
          }}
        >
          <Text>Settings coming soon</Text>
        </View>
      </View>
    );
  }
}
