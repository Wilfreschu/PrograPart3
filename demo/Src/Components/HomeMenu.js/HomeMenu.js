import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

class HomeMenu extends Component {
  render() {
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="user" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name="Home" component={Home} options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            )
          }}
        />
        
      </Tab.Navigator>
      
    );
  }
}

export default HomeMenu;
