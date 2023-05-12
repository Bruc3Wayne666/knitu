import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";

interface LessonCardProps {
    lesson: {
        title: string
    },
    lessonPath: string
}

const LessonCard: FC<LessonCardProps> = ({lesson, lessonPath}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('paragraphs', {lesson, lessonPath})}
            style={styles.card}
        >
            <Text style={styles.title}>{lesson.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#888',
        marginBottom: 12,
        minHeight: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    title: {
        fontSize: 18,
        color: 'black'
    }
})

export default LessonCard;
