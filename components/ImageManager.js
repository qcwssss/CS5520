import { View, Image, Button, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const ImageManager = () => {
  const [imageUri, setImageUri] = useState("");
  const [cameraPermissionInfo, requestCameraPermission] =
    ImagePicker.useCameraPermissions();

  const [mediaLibraryPermissionInfo, requestMediaLibraryPerssion] =
    ImagePicker.useMediaLibraryPermissions();

  const verifyCameraPermission = async () => {
    if (!cameraPermissionInfo.granted) {
      const response = await requestCameraPermission();
      return response.granted;
    }
    return true;
  };

  const verifyLibraryPermission = async () => {
    if (!mediaLibraryPermissionInfo.granted) {
      const response = await requestMediaLibraryPerssion();
      return response.granted;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyCameraPermission();
    console.log(hasPermission);
    if (!hasPermission) {
      Alert.alert("You need to give camera permission");
      return;
    }
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      console.log(result);
      console.log(result.assets[0].uri);
      setImageUri(result.assets[0].uri);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Button title="Take a picture" onPress={takeImageHandler} />
      {imageUri && (
        <Image
          source={{
            uri: imageUri,
          }}
          style={{ height: 100, width: 100 }}
        />
      )}
    </View>
  );
};

export default ImageManager;
