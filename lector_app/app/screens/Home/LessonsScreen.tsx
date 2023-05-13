import React, {FC, useContext, useEffect} from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {lessons} from "../../assets";
import LessonCard from "../../components/LessonCard/LessonCard";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ThemeContext} from "../../providers/ThemeProvider";

const LessonsScreen: FC<NativeStackScreenProps<any>> = ({navigation}) => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <SafeAreaView style={theme === 'light' ? stylesLight.screen : stylesDark.screen}>
            <View style={stylesLight.headerBox}>
                <Text style={stylesLight.header}>Разделы</Text>
            </View>
            <ScrollView>
                {
                    Object.keys(lessons)
                        .map((lesson, index) => (
                            <LessonCard
                                key={index}
                                lesson={lessons[lesson]}
                                lessonPath={lesson}
                                index={index}
                            />
                        ))
                }
            </ScrollView>
        </SafeAreaView>
    );
};


const stylesLight = StyleSheet.create({
    screen: {
        // paddingTop: 20,
        // paddingBottom: 20
        backgroundColor: '#93C6E7'
    },
    header: {
        fontSize: 44,
        fontWeight: '900',
        color: 'white'
    },
    headerBox: {
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 12,
        justifyContent: 'center'
    }
})

const stylesDark = StyleSheet.create({
    screen: {
        // paddingTop: 20,
        // paddingBottom: 20
        backgroundColor: '#222'
    },
    header: {
        fontSize: 44,
        fontWeight: '900',
        color: 'white'
    },
    headerBox: {
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 12,
        justifyContent: 'center'
    }
})

export default LessonsScreen;
