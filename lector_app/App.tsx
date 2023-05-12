import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Image,
    Pressable,
    SafeAreaView,
    View
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './app/screens/Home/HomeScreen';
import ParagraphsScreen from "./app/screens/Paragraphs/ParagraphsScreen";
import ParagraphScreen from "./app/screens/ParagraphScreen/ParagraphScreen";


const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'} screenOptions={{headerShown: false}}>
                <Stack.Screen name={'home'} component={HomeScreen}/>
                <Stack.Screen name={'paragraphs'} component={ParagraphsScreen}/>
                <Stack.Screen name={'paragraph'} component={ParagraphScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;
