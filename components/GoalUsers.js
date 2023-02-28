import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const GoalUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("HTTP error happened");

        const data = await response.json();
        let usernames = data.map((user) => user.username);
        setUsers(usernames);
        console.log(usernames);
      } catch (err) {
        console.log("get Users error", err);
      }
    };

    getUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          //   console.log(item);
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default GoalUsers;
