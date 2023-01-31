import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "CS5520";

  // const [enteredText, setEnteredText] = useState("...");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onTextEnter = (textChanged) => {
    let newGoal = { text: textChanged, id: Math.random() };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setModalVisible(false);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <Header appName={name} />
        <View style={styles.button}>
          <Button
            title="Add task"
            color="white"
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
      </View>
      <Input
        modalVisible={modalVisible}
        textUpdateFunction={onTextEnter}
        onCancel={onCancel}
      />

      <View style={styles.bottomContainer}>
        <ScrollView
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {goals.map((goal) => {
            return (
              <View key={goal.id} style={styles.textContainer}>
                <Text style={styles.typedText}>{goal.text}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
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
  textContainer: {
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    backgroundColor: "#aaa",
  },
  typedText: {
    fontSize: 80,
    color: "blue",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
  },
  scrollViewContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00bfff",
    marginTop: 20,
    fontSize: "10",
    width: "30%",
  },
});
