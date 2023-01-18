import { View, Text, Button, TextInput } from 'react-native'

import React, { useState } from 'react'

const Input = ({textUpdateFunction}) => {

  const [text,setText] = useState('')

  return (
    <View>
      <Text>Input</Text>
      <TextInput style={ {backgroundColor: "red"}} value={text} 
      onChangeText={(changedText) => {
        setText(changedText)
        textUpdateFunction(text)
      }}/>
      <Text>Hello {text}</Text>
      <Button title='Confirm'></Button>
    </View>
  )
}

export default Input