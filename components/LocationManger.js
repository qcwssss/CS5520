import { View, Text, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MAPS_API_KEY } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";

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
      const coordinate = await Location.getCurrentPositionAsync();
      console.log(coordinate);
      setLocation({
        latitude: 49.280484322884,
        longitude: -123.11635565301079,
      });
      console.log("location", location);
    } catch (err) {
      console.log("location error", err);
    }
  };

  const locationChooseHandler = () => {
    navigation.navigate("Map");
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
      <Button title="Let Me Choose Location" onPress={locationChooseHandler} />
    </View>
  );
};

export default LocationManger;
