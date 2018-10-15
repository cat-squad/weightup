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
          <View
            style={{
              backgroundColor: "cadetblue",
              height: "100%",
              paddingTop: 36,
              paddingBottom: 36
            }}
          >
            <View style={{ height: "100%" }}>
              <Text style={{ padding: 16 }}>page one</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "cornflowerblue",
              height: "100%",
              paddingTop: 36,
              paddingBottom: 36
            }}
          >
            <Text>page two</Text>
          </View>
          <View
            style={{
              backgroundColor: "#1AA094",
              height: "100%",
              paddingTop: 36,
              paddingBottom: 36
            }}
          >
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
