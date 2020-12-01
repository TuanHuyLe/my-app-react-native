import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
      <Button
        title='Click me'
        onPress={() => Alert.alert('Message', 'Hello explore', [{ text: 'Ok' }], { cancelable: false })}
      />
    </View>
  )
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});