import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Text } from "native-base";

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#FFC602",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44 + 4 + 4
  }
});

export default class Navigator extends Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <Text> Navigation goes here </Text>
      </View>
    );
  }
}
