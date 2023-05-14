import React, {FC, useContext} from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {lessons} from "../../assets";
import LessonCard from "../../components/LessonCard/LessonCard";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {ThemeContext} from "../../providers/ThemeProvider";

const LessonsScreen: FC<NativeStackScreenProps<any>> = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <SafeAreaView style={styles[theme].screen}>
            <View style={styles[theme].headerBox}>
                <Text style={styles[theme].header}>Разделы</Text>
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
                                theme={theme}
                            />
                        ))
                }
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = {
    light: StyleSheet.create({
        screen: {
            // paddingTop: 20,
            // paddingBottom: 20
            backgroundColor: '#93C6E7',
            paddingBottom: 100
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
    }),
    dark: StyleSheet.create({
        screen: {
            // paddingTop: 20,
            // paddingBottom: 20
            backgroundColor: '#222',
            paddingBottom: 100
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
}

export default LessonsScreen;
