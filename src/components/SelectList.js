import React, { Component } from "react";
import { ScrollView, View, Fragment } from "react-native";

import { Text, Button, Icon, Header, Title, Body } from "native-base";

export default class SelectExerciseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }
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

    // TODO : PUT THIS IN A NEXT TICK OR CALLBACK FOR SETSTATE
    this.updateSelectedList();
  };

  updateSelectedList = () => {
    alert(JSON.stringify(this.state));
    this.props.callback_setSelected(this.state.selected);
  };

  render() {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <Text> {JSON.stringify(this.state)}</Text>

        {this.props.list.map(item => {
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
        })}
      </View>
    );
  }
}
