import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ExploreScreen from '../screens/ExploreScreen';

const ExploreStack = createStackNavigator();

const ExploreStackScreen = ({ navigation }) => (
    <ExploreStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#199',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
        <ExploreStack.Screen name='Explore' component={ExploreScreen} options={{
            title: 'Khám phá',
            headerLeft: () => (
                <Icon.Button name='ios-menu' size={25}
                    backgroundColor='#199' onPress={() => navigation.openDrawer()} />
            )
        }} />
    </ExploreStack.Navigator>
);

export default ExploreStackScreen;