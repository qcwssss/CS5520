import React, { useEffect, useState } from "react";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetail from "./components/GoalDetail";
import Help from "./components/Help";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase-setup";
import Profile from "./components/Profile";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import Map from "./components/Map";
import * as Notifications from "expo-notifications";
import { Linking } from "react-native";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    };
  },
});

const AuthStack = (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
);

const AppStack = (
  <>
    <Stack.Screen
      options={({ navigation }) => {
        return {
          title: "All My Goals",
          headerRight: () => {
            return (
              <Ionicons
                name="person"
                size={24}
                color="#eee"
                onPress={() => navigation.navigate("Profile")}
              />
            );
          },
        };
      }}
      name="Home"
      component={Home}
    />
    <Stack.Screen name="GoalDetail" component={GoalDetail} />
    <Stack.Screen name="Map" component={Map} />

    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen
      options={() => {
        return {
          titile: "Profile2",
          headerRight: () => {
            return (
              <MaterialIcons
                name="logout"
                size={24}
                color="#eee"
                onPress={() => signOut(auth)}
              />
            );
          },
        };
      }}
      name="Profile"
      component={Profile}
    />
  </>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("This notification received:", notification);
      }
    );
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      async (response) => {
        console.log(
          "This notification was interacted with:",
          response.notification
        );
        let web = response.notification.request.content.data.url;

        console.log(web);
        try {
          // TODO
          await Linking.openURL(response.notification.request.content.data.url);
        } catch (error) {
          console.log("open url error:", error);
        }
      }
    );
    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "plum" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 28,
          },
        }}
      >
        {isAuthenticated ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
