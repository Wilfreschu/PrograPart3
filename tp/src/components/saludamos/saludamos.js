import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";

class Saludar extends Component {
  presionado() {
    console.log("saludadoo");
  }

  render() {
    return (
      <View>
        <Pressable style={this.props.botonStyle} onPress={() => this.presionado()}>
          <Text style={this.props.textoStyle}>clickeame</Text>
        </Pressable>
      </View>
    );
  }
}

export default Saludar;
