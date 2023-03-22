import {
  View,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  Image,
  Text,
} from "react-native";

import React, { useState } from "react";
import ButtonComponent from "./PressableButton";
import ImageManager from "./ImageManager";

const Input = ({ modalVisible, textUpdateFunction, onCancel }) => {
  const [text, setText] = useState("");

  const [imageUri, setImageUri] = useState("");

  const imageUriHandler = (uri) => {
    setImageUri(uri);
  };

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style={styles.image}
        />

        <TextInput
          style={styles.input}
          placeholder="Type something"
          value={text}
          onChangeText={(changedText) => {
            setText(changedText);
          }}
        />

        <ImageManager imageUriHandler={imageUriHandler} />

        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button
              color="white"
              title="Confirm"
              disabled={!text.length}
              onPress={() => {
                textUpdateFunction({ text, imageUri });
                // writeToDB({ text: text });
                setText("");
              }}
            ></Button>
          </View>
          <ButtonComponent
            style={styles.button}
            pressHandler={onCancel}
            btnStyle={styles.button}
          >
            <Text>Cancel</Text>
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    margin: 12,
    textAlign: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    padding: 10,
    width: "40%",
    borderBottomColor: "rebeccapurple",
  },
  btnContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#00bfff",
    marginHorizontal: 5,
    fontSize: "10",
    width: "30%",
  },
});

export default Input;
