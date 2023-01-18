import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputBar = () => {
  const [text,setText] = useState('')



  return (
    <View>
      <TextInput style={ {backgroundColor: "red"}} value={text} onChangeText={(changedText) => {
        setText(changedText)
      }}/>
      <Text>{text}</Text>
    </View>
  )
}

export default InputBar