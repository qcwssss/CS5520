import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import ButtonComponent from "./PressableButton";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoalItem = ({ item, onDelete, onGoalPressed }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return [styles.textContainer, pressed && styles.pressedStyle];
        }}
        android_ripple={{ color: "red", borderless: true }}
        onPress={() => {
          onGoalPressed(item);
        }}
      >
        <Text style={styles.text}>{item.text}</Text>
        <ButtonComponent
          pressHandler={() => {
            onDelete(item.id);
          }}
        >
          <Feather name="delete" size={24} color="black" />
        </ButtonComponent>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    marginVertical: 15,
    backgroundColor: "#aaa",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    color: "blue",
    // alignItems: "center",
    marginRight: 8,
  },
  buttonContainer: {
    alignItems: "center",
  },
  pressedStyle: { backgroundColor: "pink" },
});

export default GoalItem;
