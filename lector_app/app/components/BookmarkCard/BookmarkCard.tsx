import React, {FC} from 'react';
import {Button, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";

// interface LessonCardProps {
//     lesson: {
//         title: string
//     },
//     lessonPath: string,
//     index: number
// }

const BookmarkCard = () => {
    // const navigation = useNavigation()

    return (
        <TouchableOpacity
            // onPress={() => navigation.navigate('paragraphs', {lesson, lessonPath})}
            style={styles.card}
        >
            <View>
                <Text style={styles.title}>
                    {/*<Text style={styles.number}>{index + 1}. </Text>*/}
                    {/*{lesson.title}*/}
                    11
                </Text>
            </View>
            <View>
                <Button title={'Убрать'}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#B9F3FC',
        marginBottom: 12,
        minHeight: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
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

export default BookmarkCard;
