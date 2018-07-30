import React, { Component } from "react";
import { ScrollView, View, Fragment } from "react-native";
import {
  Text,
  Button,
  Icon,
  Header,
  Left,
  Right,
  Title,
  Body
} from "native-base";

export default class SelectExerciseScreen extends Component {
  handleSelectedExerciseButtonClick = (nextScreen, selectedMuscleGroup) => {
    this.props.callback_setActiveView(nextScreen);
    this.props.callback_setSelectedMuscleGroup(selectedMuscleGroup);
  };

  render() {
    return (
      <View>
        <Header>
          <Left />
          <Body>
            <Title>Select Workout</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView
          style={{
            flex: 1,
            width: "100%",
            paddingLeft: 24,
            paddingRight: 24
          }}
          contentContainerStyle={{
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Button
              onPress={() => {
                this.handleSelectedExerciseButtonClick(
                  "exercisesScreen",
                  "Arms"
                );
              }}
              iconLeft
              block
              primary
              bordered
              style={{
                height: 100,
                width: "48%",
                marginTop: 8,
                marginBottom: 8,
                borderColor: "#1C9963"
              }}
            >
              <Icon name="hand" style={{ color: "#1C9963" }} />
              <Text style={{ fontSize: 28, color: "#1C9963" }}>arms</Text>
            </Button>

            <Button
              onPress={() => {
                this.handleSelectedExerciseButtonClick(
                  "exercisesScreen",
                  "Back"
                );
              }}
              iconLeft
              block
              bordered
              primary
              style={{
                height: 100,
                width: "48%",
                marginTop: 8,
                marginBottom: 8,
                borderColor: "#1C9963"
              }}
            >
              <Icon name="logo-android" style={{ color: "#1C9963" }} />
              <Text style={{ fontSize: 28, color: "#1C9963" }}>back</Text>
            </Button>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Button
              onPress={() => {
                this.handleSelectedExerciseButtonClick(
                  "exercisesScreen",
                  "Legs"
                );
              }}
              iconLeft
              block
              bordered
              primary
              style={{
                height: 100,
                width: "48%",
                marginTop: 8,
                marginBottom: 8,
                borderColor: "#1C9963"
              }}
            >
              <Icon name="logo-snapchat" style={{ color: "#1C9963" }} />
              <Text style={{ fontSize: 28, color: "#1C9963" }}>legs</Text>
            </Button>

            <Button
              onPress={() => {
                this.handleSelectedExerciseButtonClick(
                  "exercisesScreen",
                  "Chest"
                );
              }}
              iconLeft
              block
              bordered
              primary
              style={{
                height: 100,
                width: "48%",
                marginTop: 8,
                marginBottom: 8,
                borderColor: "#1C9963"
              }}
            >
              <Icon name="contact" style={{ color: "#1C9963" }} />
              <Text style={{ fontSize: 28, color: "#1C9963" }}>chest</Text>
            </Button>
          </View>

          <Button
            onPress={() => {
              this.handleSelectedExerciseButtonClick(
                "exercisesScreen",
                "Upper Body"
              );
            }}
            iconLeft
            block
            bordered
            primary
            style={{
              height: 100,
              marginTop: 8,
              marginBottom: 8,
              borderColor: "#1C9963"
            }}
          >
            <Icon name="contrast" style={{ color: "#1C9963" }} />
            <Text style={{ fontSize: 28, color: "#1C9963" }}>upper body</Text>
          </Button>

          <Button
            onPress={() => {
              this.handleSelectedExerciseButtonClick(
                "exercisesScreen",
                "Lower Body"
              );
            }}
            iconLeft
            block
            bordered
            primary
            style={{
              height: 100,
              marginTop: 8,
              marginBottom: 8,
              borderColor: "#1C9963"
            }}
          >
            <Icon name="flash" style={{ color: "#1C9963" }} />
            <Text style={{ fontSize: 28, color: "#1C9963" }}>lower body</Text>
          </Button>

          <Button
            onPress={() => {
              this.handleSelectedExerciseButtonClick(
                "exercisesScreen",
                "Full Body"
              );
            }}
            iconLeft
            block
            bordered
            primary
            style={{
              height: 120,
              marginTop: 8,
              marginBottom: 8,
              borderColor: "#1C9963"
            }}
          >
            <Icon name="man" style={{ color: "#1C9963" }} />
            <Text style={{ fontSize: 28, color: "#1C9963" }}>full body</Text>
          </Button>
        </ScrollView>
      </View>
    );
  }
}
