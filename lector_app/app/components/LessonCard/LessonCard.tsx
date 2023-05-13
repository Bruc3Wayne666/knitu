import React, {FC, useContext} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {ThemeContext} from "../../providers/ThemeProvider";

interface LessonCardProps {
    lesson: {
        title: string
    },
    lessonPath: string,
    index: number
}

const LessonCard: FC<LessonCardProps> = ({lesson, lessonPath, index}) => {
    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('paragraphs', {lesson, lessonPath})}
            style={theme === 'light' ? stylesLight.card : stylesDark.card}
        >
            <Text style={theme === 'light' ? stylesLight.title : stylesDark.title}>
                <Text style={stylesLight.number}>{index + 1}. </Text>
                {lesson.title}
            </Text>
        </TouchableOpacity>
    );
};

const stylesLight = StyleSheet.create({
    card: {
        paddingLeft: 12,
        backgroundColor: '#B9F3FC',
        marginBottom: 12,
        minHeight: 90,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    title: {
        fontSize: 16,
        color: '#555'
    },
    number: {
        fontSize: 22,
        fontWeight: '900'
    }
})


const stylesDark = StyleSheet.create({
    card: {
        paddingLeft: 12,
        backgroundColor: '#444',
        marginBottom: 12,
        minHeight: 90,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 16,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    title: {
        fontSize: 16,
        color: 'white'
    },
    number: {
        fontSize: 22,
        fontWeight: '900'
    }
})

export default LessonCard;
