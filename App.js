import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import globalStyles from './src/styles';

import SimpleTextComponent from './src/components/SimpleTextComponent';

export default class App extends Component {
  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <View style={globalStyles.container}>
          <Text style={[globalStyles.textInput]}>
            Hello
          </Text>
          <SimpleTextComponent name="Kaitlyn" />
        </View>
        <View style={globalStyles.navContainer} />
      </View>
    );
  }
}
