import React, {useContext, useEffect} from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LessonsScreen from './app/screens/Home/LessonsScreen';
import ParagraphsScreen from "./app/screens/Paragraphs/ParagraphsScreen";
import ParagraphScreen from "./app/screens/ParagraphScreen/ParagraphScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Bookmarks from "./app/screens/BookmarksScreen/BookmarksScreen";
import {ThemeContext, ThemeProvider} from "./app/providers/ThemeProvider";
import ProfileScreen from "./app/screens/ProfileScreen/ProfileScreen";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Tab.Navigator initialRouteName={'materials'} screenOptions={{headerShown: false}}>
                    <Tab.Screen name={'home'} component={Home}/>
                    <Tab.Screen name={'bookmarks'} component={Bookmarks}/>
                    <Tab.Screen name={'profile'} component={ProfileScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}

const Home = () => {
    return (
        <Stack.Navigator initialRouteName={'lessons'} screenOptions={{headerShown: false}}>
            <Stack.Screen name={'lessons'} component={LessonsScreen}/>
            <Stack.Screen name={'paragraphs'} component={ParagraphsScreen}/>
            <Stack.Screen name={'paragraph'} component={ParagraphScreen}/>
        </Stack.Navigator>
    )
}


export default App;
