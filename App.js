import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import InputBar from './components/InputBar';

export default function App() {
  const name = 'CS5520'

  const onTextEnter = (inputText) => {
    // console.log('called Text Enter')
    console.log(inputText)
  }

  return (
    <View style={styles.container}>
      <Text>Let's make some mobile app!</Text>
      <Header appName={name}/>
      <Input textUpdateFunction={onTextEnter}/>
      <StatusBar style="auto" />
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
