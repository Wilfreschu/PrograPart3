import React from "react";
import { Text, View, StyleSheet } from "react-native"; 
import Saludar from "../components/saludamos/saludamos";
import Contador from "../components/Contador/Contador";

function Home() {
  return (
    <View style={styles.padre}>
      <Text>Hola mundo</Text>
      <Saludar botonStyle={styles.boton} textoStyle={styles.texto} />
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  boton: {
    padding: 10,
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 4,
  },
  texto: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
