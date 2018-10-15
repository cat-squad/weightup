import { View } from "react-native";
import React, { Component } from "react";
import SvgUri from "react-native-svg-uri";
import styles from "@styles";

export default class ViewPagerPage extends Component {
  render() {
    return (
      <View
        style={[
          {
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          styles.primaryBackgroundColor
        ]}
      >
        <SvgUri
          width="160"
          height="160"
          source={require("../../static/img/logo.svg")}
        />
      </View>
    );
  }
}
