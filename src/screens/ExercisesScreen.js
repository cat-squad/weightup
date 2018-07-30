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

const images = [
  require("../static/img/wallpaper1.png"),
  require("../static/img/wallpaper2.png"),
  require("../static/img/wallpaper7.png"),
  require("../static/img/wallpaper4.png"),
  require("../static/img/wallpaper5.png"),
  require("../static/img/wallpaper6.png")
];

const cards = [
  {
    text: "Lunges",
    name: "One",
    image: images[0],
    bodyGroup: "Legs"
  },
  {
    text: "Push Ups",
    name: "Two",
    image: images[1],
    bodyGroup: "Arms"
  },
  {
    text: "Deadlifts",
    name: "Three",
    image: images[2],
    bodyGroup: "Back"
  }
];

export default class ExercisesScreen extends Component {
  handleBackButtonPress = () => {
    this.props.callback_setActiveView("selectExerciseScreen");
  };

  render() {
    return (
      <View style={{ height: "100%" }}>
        {/* <Header style={{ display: "flex", alignItems: "center" }}>
          <Text>{this.props.selectedMuscleGroup} Exercises</Text>
        </Header> */}
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.handleBackButtonPress();
              }}
            >
              <Icon name="arrow-back" style={{ color: "#1C9963" }} />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.selectedMuscleGroup}</Title>
          </Body>
          <Right />
        </Header>
        <View>
          <DeckSwiper
            style={{ backgroundColor: "green" }}
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
      </View>
    );
  }
}
