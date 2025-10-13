import React, { Component } from "react";
import {Pressable, Text, View,StyleSheet} from 'react-native'
class Contador extends Component{
    constructor(props){
        super(props)
        this.state={
            clicks: 0
        }
    }

  presionado() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
    render() {
    return (
      <View style={styles.container}>
        <Pressable  onPress={() => this.presionado()}>
          <Text>Cantidad de clicks:{this.state.clicks}</Text>
          <Text style={styles.zonaClick}>Click para contar</Text>
        </Pressable>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     marginVertical: 5
  },
  zonaClick: {
    padding: 7,
    backgroundColor: "rgba(0,255,0,0.5)",
     marginBottom: 10,
    borderRadius: 4
  },
    texto: {
    fontWeight: "bold",   
  }
});

export default Contador;