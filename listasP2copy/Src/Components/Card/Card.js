
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.image }} style={styles.img} />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text>Status: {data.status}</Text>
        <Text>Species: {data.species}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  seccion: {
    fontSize: 12,
    marginBottom: 6
  }
 
});

export default Card;
