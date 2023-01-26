import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View>
      <Text style={styles.header}>Welcome to {props.appName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "purple",
    borderColor: "rebeccapurple",
    borderWidth: 2,
    padding: 5,
    fontSize: 24,
  },
});

export default Header;
