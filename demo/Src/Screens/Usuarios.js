import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { db } from "../../Src/firebase/config"; 

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],   
      loading: true
    };
  }

  componentDidMount() {
    db.collection('users').onSnapshot(
      (docs) => {
        let usuarios = [];
        docs.forEach((doc) => {
          usuarios.push({
            id: doc.id,
            data: doc.data()
          });
        });

        this.setState({
          usuarios: usuarios,
          loading: false
        });
      },
      (error) => console.log(error)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Usuarios</Text>

        {this.state.loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <FlatList
            data={this.state.usuarios}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.Card}>
                <Text style={styles.texto}>
                  <Text style= {styles.bold}>Usuario:</Text> {item.data.nombreUsuario}
                </Text>
                <Text style={styles.texto}>
                  <Text style= {styles.bold}>Email:</Text> {item.data.email}
                </Text>
              </View>
            )}
          />
        )}
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
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
    Card: {
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
  },
  texto: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold"
  }
});

export default Usuarios;
