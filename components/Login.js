import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase-setup";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log("Auth error", err);
    }
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
        placeholder="Email"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChange={(newPassword) => {
          setPassword(newPassword);
        }}
        placeholder="Password"
      />
      <Button title="Log In" onPress={loginHandler} />
      <Button title="New User? Create a new account" onPress={signupHandler} />
    </View>
  );
};

export default Login;
