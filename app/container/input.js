import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({ value, onChangeText, placeHolder,...others }) => {
    return (
        <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder={placeHolder} {...others} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10
    }
})