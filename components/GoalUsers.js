import { View, Text, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { async } from "@firebase/util";

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

  const addUser = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Benuser", id: Math.random() }), // body data type must match "Content-Type" header
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers((prevUsers) => {
          return [...prevUsers, data.name];
        });
      } else {
        throw new Error("POST error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          //   console.log(item);
          return <Text>{item}</Text>;
        }}
      />
      <Button title="Add User" onPress={addUser} />
    </View>
  );
};

export default GoalUsers;
