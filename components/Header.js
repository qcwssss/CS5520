import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = (props) => {
  const { height, width } = useWindowDimensions();
  const paddingVerticalDynamic = height < 400 ? 0 : 5;
  const marginVerticalDynamic = height < 400 ? 5 : 0;

  return (
    <View>
      <Text
        style={[
          styles.header,
          {
            paddingVertical: paddingVerticalDynamic,
            marginTop: marginVerticalDynamic,
          },
        ]}
      >
        Welcome to {props.appName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "purple",
    borderColor: "rebeccapurple",
    borderWidth: 2,
    padding: 5,
    fontSize: windowWidth < 380 ? 20 : 26,
    paddingHorizontal: windowWidth < 380 ? 10 : 20,
    width: 350,
    maxWidth: "80%",
  },
});

export default Header;
