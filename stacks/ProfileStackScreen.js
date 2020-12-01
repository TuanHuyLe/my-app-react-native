import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#199',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
        <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{
            title: 'Hồ sơ',
            headerLeft: () => (
                <Icon.Button name='ios-menu' size={25}
                    backgroundColor='#199' onPress={() => navigation.openDrawer()} />
            )
        }} />
    </ProfileStack.Navigator>
);

export default ProfileStackScreen;