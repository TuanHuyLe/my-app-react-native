import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button
        title='Click me'
        onPress={() => Alert.alert('Message', 'Hello support', [{ text: 'Ok' }], { cancelable: false })}
      />
    </View>
  )
}

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});