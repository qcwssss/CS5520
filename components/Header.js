import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = (props) => {
  const { height, width } = useWindowDimensions();
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
    // fontSize: 24,
    fontSize: windowWidth < 380 ? 20 : 26,
    paddingHorizontal: windowWidth < 380 ? 10 : 20,
    width: 350,
    maxWidth: "80%",
  },
});

export default Header;
