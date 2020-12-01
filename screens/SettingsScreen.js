import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button
        title='Click me'
        onPress={() => Alert.alert('Message', 'Hello setting', [{ text: 'Ok' }], { cancelable: false })}
      />
    </View>
  )
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});