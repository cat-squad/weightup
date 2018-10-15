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
  Icon
} from "native-base";

const cards = [
  {
    text: "Card 1",
    name: "One",
    image: "",
    bodyGroup: "Arms"
  },
  {
    text: "Card 2",
    name: "Two",
    image: "",
    bodyGroup: "Legs"
  },
  {
    text: "Card 3",
    name: "Three",
    image: "",
    bodyGroup: "Core"
  }
];
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 1
        }}
        contentContainerStyle={{
          alignItems: "center"
        }}
      >
        <DeckSwiper
          dataSource={cards}
          renderItem={item => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>{item.bodyGroup}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: "#ED4A6A" }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          )}
        />
      </View>
    );
  }
}
