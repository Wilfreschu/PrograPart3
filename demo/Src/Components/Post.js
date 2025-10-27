
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Post({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.description}>Comentario:{post.data.description}</Text>
      <Text style={styles.email}>Hecho por:{post.data.owner}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginVertical: 6,
    width: "90%",
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  email: {
    fontSize: 12,
    color: "#555",
  },
});
