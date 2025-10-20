
import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import DynamicForms from "../Components/DynamicForms/DynamicForms";
class Home extends Component {
  render() {
    return (
      <View>
        <DynamicForms/>
      </View>
    );
  }
}

export default Home;
