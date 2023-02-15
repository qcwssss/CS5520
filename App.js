import { View, Text, Pressable } from "react-native";
import React from "react";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetail from "./components/GoalDetail";
import Help from "./components/Help";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const App = () => {
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={({ route }) => {
            return {
              title: route.params.goalItem.text,
              headerRight: () => {
                return (
                  <Pressable
                    onPress={() => {
                      console.log("> pressed");
                    }}
                  >
                    <AntDesign name="rightcircleo" size={24} color="#eee" />
                  </Pressable>
                );
              },
            };
          }}
          name="GoalDetail"
          component={GoalDetail}
        />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
