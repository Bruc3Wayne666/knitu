import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LessonsScreen from './app/screens/Home/LessonsScreen';
import ParagraphsScreen from "./app/screens/Paragraphs/ParagraphsScreen";
import ParagraphScreen from "./app/screens/ParagraphScreen/ParagraphScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Bookmarks from "./app/screens/BookmarksScreen/BookmarksScreen";
import {ThemeContext, ThemeProvider} from "./app/providers/ThemeProvider";
import ProfileScreen from "./app/screens/ProfileScreen/ProfileScreen";
import BookmarkScreen from "./app/screens/BookmarkScreen/BookmarkScreen";
import {BookmarkProvider} from "./app/providers/BookmarksProvider";
import {SafeAreaView, Text, View} from "react-native";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <BookmarkProvider>
            <ThemeProvider>
                {/*<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>*/}
                    <NavigationContainer
                        theme={{colors: {background: 'rgb(0, 0, 0)', primary: 'rgb(255, 255, 255)', text: 'rgb(255, 255, 255)'}}}
                    >
                        <Tab.Navigator
                            initialRouteName={'materials'}
                            screenOptions={{
                                headerShown: false,
                                tabBarStyle: {
                                    backgroundColor: 'black',
                                    borderTopWidth: 0
                                }
                            }}
                        >
                            <Tab.Screen name={'home'} component={Home}/>
                            <Tab.Screen name={'bookmarks'} component={Bookmarks}/>
                            <Tab.Screen name={'profile'} component={ProfileScreen}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                {/*</SafeAreaView>*/}
            </ThemeProvider>
        </BookmarkProvider>
    )
}

const Home = () => {
    return (
        <Stack.Navigator initialRouteName={'lessons'} screenOptions={{headerShown: false}}>
            <Stack.Screen name={'lessons'} component={LessonsScreen}/>
            <Stack.Screen name={'paragraphs'} component={ParagraphsScreen}/>
            <Stack.Screen name={'paragraph'} component={ParagraphScreen}/>
            <Stack.Screen name={'bookmark'} component={BookmarkScreen}/>
        </Stack.Navigator>
    )
}


export default App;
