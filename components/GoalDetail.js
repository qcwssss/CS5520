import { View, Text, Button } from "react-native";
import React from "react";

const GoalDetail = ({ route }) => {
  console.log(route);
  const goal = route.params.goalItem;
  return (
    <View>
      <Text>
        You are viewing details of {goal.text} with id : {goal.id}
      </Text>
    </View>
  );
};

export default GoalDetail;
