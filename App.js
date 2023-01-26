import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "CS5520";

  const [enteredText, setEnteredText] = useState("...");
  const [modalVisible, setModalVisible] = useState(false);

  const onTextEnter = (textChanged) => {
    setEnteredText(textChanged);
    setModalVisible(false);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text>Let's make some mobile app!</Text>
        <Header appName={name} />
        <Button
          title="Add task"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Input
        modalVisible={modalVisible}
        onCancel={onCancel}
        textUpdateFunction={onTextEnter}
      />
      <StatusBar style="auto" />
      <Text style={styles.typedText}>You typed {enteredText}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  typedText: {
    paddingTop: 40,
    fontSize: 20,
    color: "blue",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "551255",
  },
});
