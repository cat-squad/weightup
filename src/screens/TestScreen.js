import { StyleSheet, View, Text } from "react-native";
import React, { Component } from "react";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";

export default class ViewPagerPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: "blue"
        }}
      >
        <IndicatorViewPager
          style={{ height: "100%" }}
          indicator={this._renderDotIndicator()}
        >
          <View style={{ backgroundColor: "cadetblue", height: "100%" }}>
            <Text>page one</Text>
          </View>
          <View style={{ backgroundColor: "cornflowerblue" }}>
            <Text>page two</Text>
          </View>
          <View style={{ backgroundColor: "#1AA094" }}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} style={{ paddingBottom: 8 }} />;
  }
}
