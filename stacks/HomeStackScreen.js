import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

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

export default HomeStackScreen;