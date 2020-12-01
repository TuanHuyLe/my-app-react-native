import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#199',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <HomeStack.Screen name='Home' component={HomeScreen} options={{
      title: 'Trang chủ',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25}
          backgroundColor='#199' onPress={() => navigation.openDrawer()} />
      )
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#199',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}>
    <DetailsStack.Screen name='Details' component={DetailsScreen} options={{
      title: 'Chi tiết',
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={25}
          backgroundColor='#199' onPress={() => navigation.openDrawer()} />
      )
    }} />
  </DetailsStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStackScreen} options={{
          title: 'Trang chủ'
        }} />
        <Drawer.Screen name='Details' component={DetailsStackScreen} options={{
          title: 'Chi tiết'
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}