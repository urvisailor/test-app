import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Info from '../screens/info';
import Login from '../screens/login';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator()

export function TabBar() {
    return (
        <Tab.Navigator screenOptions={{ tabBarIconStyle: { display: "none" } }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
    )
}

export function NavigatorStack() {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        const isAuth = async () => {
            const isLoggedIn = await AsyncStorage.getItem('userdata')
            if (isLoggedIn) {
                setisloading(false)
            }
        }
        isAuth()
    }, [])
   
    return (
        isloading ?
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={TabBar} />
            </Stack.Navigator> :
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeS" component={TabBar} />
            </Stack.Navigator>
    );
}

