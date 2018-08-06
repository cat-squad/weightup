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
        <View key={item} style={{ padding: 4, width: "100%" }}>
          <Button
            full
            warning
            bordered={!this.state.selected.includes(item)}
            rounded
            style={{ height: 40 }}
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

  handleBuildWorkoutPress = () => {
    alert(
      "Let's build a work for" + this.state.selected.map(item => " " + item)
    );
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
          <Text style={{ paddingTop: 8, paddingBottom: 8 }}>
            Select which muscle groups you want to add to your workout!
          </Text>
          {this.renderSelectList(this.state.muscleGroups)}

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
    );
  }
}
