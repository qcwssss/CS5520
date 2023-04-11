import { View, Text, Button, Alert } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";

export const verifyPermission = async () => {
  const permissionResponse = await Notifications.getPermissionsAsync();
  if (permissionResponse.granted) {
    return true;
  }
  const requestPermission = await Notifications.requestPermissionsAsync();
  return requestPermission.granted;
};

export default function NotificationManager() {
  const scheduleNotificationHandler = async () => {
    const hasPermission = verifyPermission();
    if (!hasPermission) {
      Alert.alert("You need to give notification permiision");
      return;
    }

    console.log("notification");
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "First Notification",
          body: "1st notificiation body",
          data: { url: "https://www.google.com" },
        },
        trigger: { seconds: 5 },
      });
    } catch (error) {
      console.log("notify err:", error);
    }
  };
  return (
    <View>
      <Button
        title="Schedule a notification"
        onPress={scheduleNotificationHandler}
      />
    </View>
  );
}
