import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header';
import Main from './components/Main';
import Gallery from './components/Gallery';
import FooterComp from './components/FooterComp';
import Profile from './components/Profile';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Header/>
      <Tab.Navigator barStyle={{ backgroundColor: '#000' }} initialRouteName="Main" >
       
        <Tab.Screen 
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Головна',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: 'Фотогалерея',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Профіль',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
      <FooterComp/>
    </NavigationContainer>
  );
}


