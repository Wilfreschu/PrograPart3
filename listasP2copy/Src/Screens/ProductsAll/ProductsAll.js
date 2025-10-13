import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Card from "../../Components/Card/Card"; 

class ProductsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ lista: data.results });
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de personajes</Text>

        <FlatList
          data={this.state.lista}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => <Card data={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { 
    padding: 10, 
    width: "100%", 
    flex: 1,
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default ProductsAll;
