import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';


export default function App() {
  const name = 'CS5520'

  const [enteredText, setEnteredText] = useState('')

  const onTextEnter = (textChanged) => {
    setEnteredText(textChanged)
  }

  return (
    <View style={styles.container}>
      <Text>Let's make some mobile app!</Text>
      <Header appName={name}/>
      <Input textUpdateFunction={onTextEnter}/>
      <StatusBar style="auto" />
      <Text>{enteredText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
