import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Pressable } from "react-native";
class Register extends Component {
constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <Pressable style={styles.blueButton}
            onPress={ ()=> this.props.navigation.navigate('Login')}>
                <Text> Ya tengo cuenta </Text>
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  blueButton: {
    backgroundColor: "#007BFF",
    borderRadius: 10,
    marginBottom: 15,
    width: "50%",
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Register;
