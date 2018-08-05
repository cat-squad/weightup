import React, { Component } from "react";
import { ScrollView, View, Fragment } from "react-native";
import MuscleGroupList from "../components/MuscleGroupList";

import {
  Text,
  Button,
  Icon,
  Header,
  Left,
  Right,
  Title,
  Body,
  ListItem,
  CheckBox,
  Content
} from "native-base";

export default class SelectExerciseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muscleGroups: [
        {
          name: "Biceps",
          selected: false
        },
        {
          name: "Triceps",
          selected: false
        },
        {
          name: "Shoulders",
          selected: false
        },
        {
          name: "Back",
          selected: false
        },
        {
          name: "Abs",
          selected: false
        },
        {
          name: "Hamstrings",
          selected: false
        },
        {
          name: "Quads",
          selected: false
        },
        {
          name: "Calves",
          selected: false
        },
        {
          name: "Glutes",
          selected: false
        },
        {
          name: "Chest",
          selected: false
        }
      ]
    };
  }

  handleSelectedExerciseButtonClick = (nextScreen, selectedMuscleGroup) => {
    this.props.callback_setActiveView(nextScreen);
    this.props.callback_setSelectedMuscleGroup(selectedMuscleGroup);
  };

  handleCheckboxPress = muscleGroup => {
    alert(muscleGroup);
  };

  renderSelectList = list => {
    return list.map(item => {
      return (
        <ListItem style={{ width: "100%" }} key={item.name}>
          <CheckBox checked={item.selected} />
          <Body>
            <Text>{item.name}</Text>
          </Body>
        </ListItem>
      );
    });
  };

  render() {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Header>
          <Body>
            <Title>Select Muscle Groups</Title>
          </Body>
        </Header>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingTop: 8,
            paddingRight: 16,
            paddingLeft: 16,
            width: "100%"
          }}
        >
          <MuscleGroupList />
        </ScrollView>
      </View>
    );
  }
}
