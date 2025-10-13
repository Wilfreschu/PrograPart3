import React, { Component } from "react";
import {Pressable, Text, View,StyleSheet,Image} from 'react-native'
class Imagenes extends Component{
    render() {
    return (
        <Image style = {styles.image}
                source = {require('../../../assets/zonaMedia.jpeg')}
                resizeMode = 'contain'
        />

    );
  }
}
const styles = StyleSheet.create({
    image: {
        height: 400
    }
});

export default Imagenes;