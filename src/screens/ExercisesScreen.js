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

const cards = [
  {
    text: "Lunges",
    name: "One",
    image: "",
    bodyGroup: "Legs"
  },
  {
    text: "Push Ups",
    name: "Two",
    image: "",
    bodyGroup: "Arms"
  },
  {
    text: "Deadlifts",
    name: "Three",
    image: "",
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
        <View style={{ height: 440 }}>
          <DeckSwiper
            ref={c => (this._deckSwiper = c)}
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
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            padding: 15
          }}
        >
          <Button
            block
            primary
            style={{
              marginTop: 16,
              marginBottom: 20,
              marginRight: 8,
              backgroundColor: "#1C9963",
              flexGrow: 1,
              height: 44
            }}
            iconLeft
            onPress={() => this._deckSwiper._root.swipeLeft()}
          >
            <Icon name="arrow-back" />
            <Text>NO</Text>
          </Button>
          <Button
            block
            primary
            style={{
              marginTop: 16,
              marginBottom: 20,
              marginLeft: 8,
              backgroundColor: "#1C9963",
              flexGrow: 1,
              height: 44
            }}
            iconRight
            onPress={() => this._deckSwiper._root.swipeRight()}
          >
            <Text>YES</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </View>
    );
  }
}
