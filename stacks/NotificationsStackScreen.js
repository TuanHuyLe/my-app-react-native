import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import NotificationsScreen from '../screens/NotificationsScreen';

const NotificationsStack = createStackNavigator();

const NotificationsStackScreen = ({ navigation }) => (
    <NotificationsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#199',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
        <NotificationsStack.Screen name='Notifications' component={NotificationsScreen} options={{
            title: 'Thông báo',
            headerLeft: () => (
                <Icon.Button name='ios-menu' size={25}
                    backgroundColor='#199' onPress={() => navigation.openDrawer()} />
            )
        }} />
    </NotificationsStack.Navigator>
);

export default NotificationsStackScreen;