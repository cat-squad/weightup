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
  Body,
  ListItem,
  CheckBox,
  Content
} from "native-base";

import SelectList from "../components/SelectList";

export default class SelectExerciseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muscleGroups: [
        "Abs",
        "Shoulders",
        "Triceps",
        "Biceps",
        "Chest",
        "Back",
        "Glutes",
        "Quads",
        "Hamstrings",
        "Calves"
      ],
      selected: []
    };
  }

  handleSelectedExerciseButtonClick = (nextScreen, selectedMuscleGroup) => {
    this.props.callback_setActiveView(nextScreen);
    this.props.callback_setSelectedMuscleGroup(selectedMuscleGroup);
  };

  setSelected = selectedList => {
    this.setState(() => ({
      selected: [...selectedList]
    }));
  };

  handleBuildWorkoutPress = () => {
    alert(
      "Let's build a work for" + this.state.selected.map(item => " " + item)
    );
    this.props.callback_setActiveView("exercisesScreen");
  };

  render() {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Header>
          <Body>
            <Title>Select Muscle Groups</Title>
          </Body>
        </Header>
        <View style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              paddingTop: 8,
              paddingRight: 16,
              paddingLeft: 16,
              width: "100%"
            }}
          >
            <Text style={{ paddingTop: 8, paddingBottom: 8 }}>
              Select which muscle groups you want to add to your workout!
            </Text>
            <SelectList
              list={this.state.muscleGroups}
              callback_setSelected={this.setSelected}
            />
            <Button
              block
              primary
              style={{
                marginTop: 16,
                marginBottom: 20,
                backgroundColor: "#1C9963"
              }}
              onPress={() => {
                this.handleBuildWorkoutPress();
              }}
            >
              <Text> Build my workout! </Text>
              <Icon name="arrow-forward" style={{ color: "#fff" }} />
            </Button>
          </ScrollView>
        </View>
      </View>
    );
  }
}
