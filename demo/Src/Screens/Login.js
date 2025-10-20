import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>INGRESAR</Text>

        <Pressable
          style={styles.blueButton}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>No tengo cuenta</Text>
        </Pressable>

        <Pressable
          style={styles.orangeButton}
          onPress={() => this.props.navigation.navigate('HomeMenu')}
        >
          <Text>Entrar a la APP</Text>
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
  orangeButton: {
    backgroundColor: "#FFA500",
    borderRadius: 10,
    width: "70%",
    alignItems: "center",
    width: "50%",
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Login;

