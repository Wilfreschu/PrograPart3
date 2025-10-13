import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './Src/Screens/ProductList/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Probando Texto</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
