import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {lessons} from "../../assets";
import LessonCard from "../../components/LessonCard/LessonCard";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const HomeScreen: FC<NativeStackScreenProps<any>> = ({navigation}) => {
    return (
        <ScrollView>
            {
                Object.keys(lessons)
                    .map((lesson, index) => (
                        <LessonCard
                            key={index}
                            lesson={lessons[lesson]}
                            lessonPath={lesson}
                        />
                    ))
            }
        </ScrollView>
    );
};




export default HomeScreen;
