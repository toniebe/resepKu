import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { WARNA_PRIMER } from '../utils/constant'

export default function Button({title,...nativeProps}) {
  return (
    <TouchableOpacity {...nativeProps} style={styles.container}>
        <Text style={styles.font}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 50,
        borderRadius: 5,
        backgroundColor: WARNA_PRIMER,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    font:{
        fontSize: 16,
        color: '#fff',
    }
})