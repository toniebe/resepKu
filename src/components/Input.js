import { StyleSheet, TextInput} from 'react-native'
import React from 'react'

export default function Input({placeholder,...nativeProps}) {
  return (
    <TextInput style={styles.input} placeholder={placeholder} {...nativeProps} />
  )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        height: 50,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor:'#fff',
        paddingHorizontal: 10,
        marginVertical: 10,
      }
})