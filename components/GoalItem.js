import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ item, onDelete, onGoalPressed }) => {
  return (
    <Pressable
      android_ripple={{ color: "red", borderless: true }}
      onPress={() => {
        onGoalPressed(item.id);
      }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="X"
            onPress={() => {
              onDelete(item.id);
            }}
            color={"red"}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    backgroundColor: "#aaa",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    color: "blue",
    alignSelf: "center",
    marginRight: 8,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default GoalItem;
