import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Src/Screens/Login';
import Register from './Src/Screens/Register';
import HomeMenu from './Src/Components/HomeMenu.js/HomeMenu'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login} options={ { headerShown: false } }/>
        <Stack.Screen name= "Register" component={Register} options={ { headerShown: false } }/>
        <Stack.Screen name= "HomeMenu" component={HomeMenu} options={ { headerShown: false } }/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
