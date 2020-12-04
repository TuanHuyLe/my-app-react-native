import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Camera } from 'expo-camera';

const HomeScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = () => {
    if (hasPermission === null) {
      console.warn('null');
    } else if (hasPermission === false) {
      console.warn('No access to camera');
    } else {
      return navigation.navigate('Camera');
    }
  }

  const fromLibrary = () => {
    alert(1);
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title='Go to notifications screen'
        onPress={() => navigation.navigate('Notifications')}
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.btnPhoto} onPress={takePhoto}>
          <Text style={styles.text}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPhoto} onPress={fromLibrary}>
          <Text style={styles.text}>From library</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  btnPhoto: {
    backgroundColor: '#0ff',
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});