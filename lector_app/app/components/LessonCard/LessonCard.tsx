import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Theme} from "../../providers/ThemeProvider";

interface LessonCardProps {
    lesson: {
        title: string
    },
    lessonPath: string,
    index: number,
    theme: Theme
}

const LessonCard: FC<LessonCardProps> = ({lesson, lessonPath, index, theme}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('paragraphs', {lesson, lessonPath})}
            style={styles[theme].card}
        >
            <Text style={styles[theme].title}>
                <Text style={styles.light.number}>{index + 1}. </Text>
                {lesson.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    light: StyleSheet.create({
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
            elevation: 6,
            width: '96%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        title: {
            fontSize: 16,
            color: '#555'
        },
        number: {
            fontSize: 22,
            fontWeight: '900'
        }
    }),
    dark: StyleSheet.create({
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
            elevation: 6,
            width: '96%',
            marginLeft: 'auto',
            marginRight: 'auto'
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
}

export default LessonCard;
