import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagenes from './src/components/imagenes/imagenes';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>agregando imágenes</Text>
    <Imagenes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

