import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsAll from './Src/Screens/ProductsAll/ProductsAll';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto} >probando listas</Text>
      <ProductsAll/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
