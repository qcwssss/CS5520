import { StatusBar } from "expo-status-bar";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import Header from "./components/Header";
import Input from "./components/Input";
import { auth, firestore } from "./Firebase/firebase-setup";
import { deleteFromDB, writeToDB } from "./Firebase/firestore-helper";

export default function Home({ navigation }) {
  useEffect(() => {
    const unsbscribe = onSnapshot(
      // not working!
      query(
        collection(firestore, "goals"),
        where("user", "==", auth.currentUser.uid)
      ),
      (querySnapShot) => {
        if (querySnapShot.empty) {
          // no data
          setGoals([]);
        } else {
          let docs = [];
          querySnapShot.docs.forEach((snap) => {
            // console.log(snap.id);
            docs.push({ id: snap.id, ...snap.data() });
          });
          setGoals(docs);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsbscribe();
    };
  }, [goals]);
  const name = "CS5520";

  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onTextEnter = (textChanged) => {
    let newGoal = { text: textChanged };
    // , id: Math.random() };
    writeToDB(newGoal);
    // setGoals((prevGoals) => [...prevGoals, newGoal]);

    setModalVisible(false);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  const onDeletePressed = (deletedId) => {
    console.log(`${deletedId} deleted`);
    deleteFromDB(deletedId);
    // setGoals((prevGoals) => {
    //   return prevGoals.filter((goal) => {
    //     return goal.id !== deletedId;
    //   });
    // });
  };

  const goalItemPressed = (goal) => {
    console.log(`${goal.id} goal item pressed, ${goal} `);
    // Go to GoalDetail page
    navigation.navigate("GoalDetail", { goalItem: goal });
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
        <FlatList
          data={goals}
          contentContainerStyle={styles.scrollViewContainer}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <GoalItem
                item={item}
                onDelete={onDeletePressed}
                onGoalPressed={goalItemPressed}
              />
            );
          }}
        />
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
  text: {
    fontSize: 20,
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
