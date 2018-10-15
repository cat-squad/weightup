import { View, Text } from "react-native";
import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "@styles";

export default class SimpleTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultDisplayName: "user"
    };
  }

  render() {
    const { name } = this.props;
    const { defaultDisplayName } = this.state;
    return <Text>{`Hello there ${name}, ${defaultDisplayName}`}</Text>;
  }
}

SimpleTextComponent.propTypes = {
  name: PropTypes.string.isRequired
};
