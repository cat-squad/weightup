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
  Content,
  Radio
} from "native-base";

export default class MuscleGroupList extends Component {
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
          selected: true
        },
        {
          name: "Calves",
          selected: true
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

  toggleSelected = muscleGroup => {
    const muscleGroups = this.state.muscleGroups;
    const index = (muscleGroups.find(
      element => element.name === muscleGroup.name
    ).selected = true);
    this.setState({ muscleGroups });
  };

  renderSelectList = list => {
    return list.map(item => {
      return (
        <View
          key={item.name}
          style={{ paddingTop: 4, paddingBottom: 4, width: "100%" }}
        >
          <Button
            full
            bordered
            rounded
            onPress={() => {
              this.toggleSelected(item);
            }}
            style={
              item.selected
                ? { backgroundColor: "#1C9963", borderColor: "#1C9963" }
                : { borderColor: "#A9A9A9" }
            }
          >
            <Text style={!item.selected && { color: "#000" }}>{item.name}</Text>
          </Button>
        </View>
      );
    });
  };

  render() {
    return (
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
          {this.renderSelectList(this.state.muscleGroups)}
        </ScrollView>
      </View>
    );
  }
}
