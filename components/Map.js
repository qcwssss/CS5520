import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  //   console.log("selected", selectedLocation);

  return (
    <>
      <MapView
        onPress={(event) => {
          const coordinate = event.nativeEvent.coordinate;
          console.log(coordinate);
          setSelectedLocation({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
          });
        }}
        initialRegion={{
          latitude: 49.280583,
          longitude: -123.115732,
          latitudeDelta: 0.092,
          longitudeDelta: 0.0421,
        }}
        style={styles.container}
      >
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
          />
        )}
      </MapView>

      <Button
        title="confirm selected location"
        onPress={() => {
          navigation.navigate("Profile", {
            selectedLocation: selectedLocation,
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default Map;
