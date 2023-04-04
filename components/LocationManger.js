import { View, Text, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MAPS_API_KEY } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getUserLocation,
  saveUser,
  saveUserLocation,
} from "../Firebase/firestore-helper";

const LocationManger = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);

  const [location, setLocation] = useState();

  useEffect(() => {
    if (route.params) {
      setLocation(route.params.selectedLocation);
    }
  }, [route]);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const data = await getUserLocation();
        console.log("location data:", data);
        setLocation(data.location);
      } catch (err) {
        console.log("get user location", err);
      }
    }
  });

  const [permissionResponse, requestPermission] =
    Location.useForegroundPermissions();

  async function verifyPermission() {
    console.log(permissionResponse);
    if (permissionResponse.granted) {
      return true;
    }
    try {
      const permissionResult = await requestPermission();
      return permissionResult.granted;
    } catch (err) {
      console.log("locate permission error", err);
    }
  }
  const locateUserHandler = async () => {
    const permissionReceived = await verifyPermission();
    if (!permissionReceived) {
      Alert.alert("You need to give location permission");
      return;
    }
    try {
      const result = await Location.getCurrentPositionAsync();
      console.log("coor:", result);
      setLocation({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      });
      // saveUser({
      //   location:{
      //     latitude: result.coords.latitude,
      //   longitude: result.coords.longitude,
      //   }
      // })
      console.log("location", location);
    } catch (err) {
      console.log("location error", err);
    }
  };

  const saveUser = async () => {
    await saveUserLocation({ location });
    navigation.navigate("Home");
  };

  const locationSelectHandler = () => {
    if (location) navigation.navigate("Map", { currentLocation: location });
    else navigation.navigate("Map");
  };
  return (
    <View>
      <Text>LocationManger</Text>
      <Button title="Locate Me" onPress={locateUserHandler} />
      {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`,
          }}
          style={{ width: "100%", height: 100 }}
        />
      )}
      <Button title="Let Me Choose Location" onPress={locationSelectHandler} />
      <Button title="Save User Location" onPress={saveUser} />
    </View>
  );
};

export default LocationManger;
