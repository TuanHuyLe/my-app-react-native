import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title='Click me'
        onPress={() => Alert.alert('Message', 'Hello profile', [{ text: 'Ok' }], { cancelable: false })}
      />
    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});