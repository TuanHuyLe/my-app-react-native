import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';

const CameraScreen = ({ navigation }) => {
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera = null;

    const takePicture = async function () {
        let { uri, width, height } = await camera.takePictureAsync();
        console.log(uri);
        console.log(width);
        console.log(height);
    }

    return (
        <Camera style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }} type={type}
            ref={ref => {
                camera = ref;
            }}>
            <TouchableOpacity
                style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}>
                <Ionicons
                    name="ios-photos"
                    style={{ color: "#f9f", fontSize: 50 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={takePicture}
                style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}>
                <FontAwesome
                    name="camera"
                    style={{ color: "#f9f", fontSize: 60 }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    );
                }}
                style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                }}>
                <MaterialCommunityIcons
                    name="camera-switch"
                    style={{ color: "#f9f", fontSize: 50 }}
                />
            </TouchableOpacity>
        </Camera>
    );
};

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});