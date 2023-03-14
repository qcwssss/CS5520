import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    navigation.replace("Home");
  };

  const signupHandler = () => {
    navigation.replace("Signup");
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChange={(newEmail) => {
          setEmail(newEmail);
        }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChange={(newPassword) => {
          setPassword(newPassword);
        }}
      />
      <Button title="Log In" onPress={loginHandler} />
      <Button title="New User? Create a new account" onPress={signupHandler} />
    </View>
  );
};

export default Login;
