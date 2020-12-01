import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      <Button
        title='Go to Notifications screen AGAIN'
        onPress={() => navigation.push('Notifications')}
      />
      <Button
        title='Go to home'
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
      />
      <Button
        title='Go to first screen'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}


export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});