import React, { Component } from "react";
import {Pressable, Text, View,StyleSheet,Image} from 'react-native'
class ImagenUri extends Component{
    render() {
    return (
        <Image style = {styles.image}
                source = {{uri: 'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'}}
                resizeMode = 'contain'
        />

    );
  }
}
const styles = StyleSheet.create({
    image: {
        height: 400,
        marginTop: 30,
        width: 400
    }
});

export default ImagenUri;