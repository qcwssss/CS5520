import { View, Text } from "react-native";
import React from "react";
import { auth } from "../Firebase/firebase-setup";
import LocationManger from "./LocationManger";

const Profile = () => {
  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>{auth.currentUser.uid}</Text>
      <LocationManger />
    </View>
  );
};

export default Profile;
