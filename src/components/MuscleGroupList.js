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

  toggleSelected = selected => {
    const indexOf = this.state.selected.indexOf(selected);
    if (indexOf >= 0) {
      let newSelectedArray = this.state.selected;
      newSelectedArray.splice(indexOf, 1);
      this.setState(prevState => ({
        selected: [...newSelectedArray]
      }));
    } else {
      this.setState(prevState => ({
        selected: [...prevState.selected, selected]
      }));
    }
  };

  renderSelectList = list => {
    return list.map(item => {
      return (
        <View
          key={item}
          style={{ paddingTop: 4, paddingBottom: 4, width: "100%" }}
        >
          <Button
            full
            bordered={true}
            rounded
            onPress={() => {
              this.toggleSelected(item);
            }}
          >
            <Text style={{ color: "#000" }}>{item}</Text>
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
          <Text>{JSON.stringify(this.state.selected)}</Text>
          {this.renderSelectList(this.state.muscleGroups)}
        </ScrollView>
      </View>
    );
  }
}