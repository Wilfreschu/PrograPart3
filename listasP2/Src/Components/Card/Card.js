
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.image }} style={styles.imagen} />
      <Text style={styles.seccion}>{data.title}</Text>
      <Text style={styles.seccion}>💲 {data.price}</Text>
      <Text style={styles.seccion}>{data.category}</Text>
      <Text style={styles.seccion}>{data.description}</Text>
      <Text style={styles.seccion}> {data.rating.rate} ({data.rating.count})</Text>
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
