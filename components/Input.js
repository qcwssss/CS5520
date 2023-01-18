import { View, Text, Button, TextInput } from 'react-native'

import React, { useState } from 'react'

const Input = ({textUpdateFunction}) => {

  const [text,setText] = useState('')

  return (
    <View>
      <TextInput style={ {backgroundColor: "red"}} value={text} 
      onChangeText={(changedText) => {
        setText(changedText)
        textUpdateFunction(text)
      }}/>

      <Button title='Confirm'></Button>
    </View>
  )
}

export default Input