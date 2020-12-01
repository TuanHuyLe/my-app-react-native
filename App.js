import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
        <Drawer.Screen name='Support' component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}