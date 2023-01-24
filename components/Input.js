import { View, Button, TextInput, Modal, StyleSheet, Image } from 'react-native'

import React, { useState } from 'react'

const Input = ({modalVisible, textUpdateFunction, onCancel}) => {

  const [text,setText] = useState('')

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}}
       style={styles.image} />
        <TextInput style={ {backgroundColor: "red"}} value={text} 
        onChangeText={(changedText) => {
          setText(changedText)
        }}/>
        <Button title='Confirm' onPress={()=> {
          textUpdateFunction(text)
          setText('')
        }}></Button>

        <Button title='Cancel' onPress={onCancel} />

      </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:100,
    width:100
  }
});

export default Input