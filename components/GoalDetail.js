import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import GoalUsers from "./GoalUsers";
import { storage } from "../Firebase/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";

const GoalDetail = ({ route }) => {
  const goal = route.params.goalItem;
  const navigation = useNavigation();

  const iconPressed = () => {
    console.log("icon pressed from Goal Details");
  };
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    async function getImageUrl() {
      try {
        const referece = ref(storage, route.params.goalItem.imageUri);
        const url = await getDownloadURL(referece);
        console.log(url);
        setImageURL(url);
      } catch (err) {
        console.log("download image", err.message());
      }
    }
    getImageUrl();
  }, []);

  useEffect(() => {
    console.log(route.params.goalItem);
    navigation.setOptions({
      title: goal.text,
      headerRight: () => {
        return (
          <Pressable onPress={iconPressed}>
            <AntDesign name="rightcircleo" size={24} color="#eee" />
          </Pressable>
        );
      },
    });
  });
  return (
    <View>
      <Text>
        You are viewing details of {goal.text} with id : {goal.id}
      </Text>
      {/* <GoalUsers /> */}
      {imageURL && (
        <Image
          source={{
            uri: imageURL,
          }}
          style={{ height: 100, width: 100 }}
        />
      )}
    </View>
  );
};

export default GoalDetail;
