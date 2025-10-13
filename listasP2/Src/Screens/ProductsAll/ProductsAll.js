import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Card from "../../Components/Card/Card"; 

class ProductsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          rating: { rate: 4.1, count: 259 },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "Great outerwear jackets for all seasons. Suitable for many occasions, working, hiking, traveling, etc.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
          rating: { rate: 4.7, count: 500 },
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lista de productos</Text>

        <FlatList
          data={this.state.lista}
          keyExtractor={(item) => item.id.toString()}
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
