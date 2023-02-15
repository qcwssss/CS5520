import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const GoalDetail = ({ route }) => {
  // console.log(route);
  const goal = route.params.goalItem;
  const navigation = useNavigation();

  const iconPressed = () => {
    console.log("icon pressed from Goal Details");
  };

  useEffect(() => {
    navigation.setOptions({
      title: goal.text,
      headerRight: () => {
        return (
          <Pressable onPress={iconPressed}>
            <AntDesign name="rightcircleo" size={24} color="#eee" />
          </Pressable>
        );
      },
    });
  });
  return (
    <View>
      <Text>
        You are viewing details of {goal.text} with id : {goal.id}
      </Text>
    </View>
  );
};

export default GoalDetail;
