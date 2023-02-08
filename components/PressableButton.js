import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const ButtonComponent = ({ children, pressHandler, btnStyle }) => {
  return (
    <Pressable onPress={pressHandler} style={[styles.buttonStyle, btnStyle]}>
      <View>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
  },
});

export default ButtonComponent;
