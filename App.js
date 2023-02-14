import { View, Text } from "react-native";
import React from "react";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetail from "./components/GoalDetail";
import Help from "./components/Help";

const Stack = createNativeStackNavigator();
console.log(Stack);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GoalDetail" component={GoalDetail} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
