import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Input from '../../container/input'
import Button from '../../container/button'
import styles from './styles'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'

const Login = (props) => {
    const {
        navigation
    } = props
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const dispatch=useDispatch()
    const onLogin = async () => {
        if (username && password) {
            if (username === "Admin" && password === "Admin@123") {
                await AsyncStorage.setItem("userdata", JSON.stringify({ username: username, password: password }))
                dispatch(actions.authData({ username: username, password: password }))
                navigation.navigate("Home")
            } else {
                Alert.alert("Username or password is wrong")
            }
        } else {
            Alert.alert("Please enter username and password")
        }
    }

    return (
        <View style={styles.container}>
            <Input value={username} onChangeText={(text) => setusername(text)} placeHolder={'Enter username'} />
            <Input value={password} onChangeText={(text) => setpassword(text)} placeHolder={'Enter password'} secureTextEntry={true} />
            <Button onPress={onLogin} text={'Login'} />
        </View>
    )
}

export default Login