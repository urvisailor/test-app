import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

const Home = (props) => {

    const [user, setuser] = useState()

    useEffect(() => {
        const fetchUserData = async () => {
            const {
                username
            } = JSON.parse(await AsyncStorage.getItem('userdata'))
            setuser(username)
        }
        fetchUserData()
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.user}>Hello {user}</Text>
        </View>
    )
}

export default Home