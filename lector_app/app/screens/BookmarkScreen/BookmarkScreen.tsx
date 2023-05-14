import React, {FC, useContext} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {lessons} from "../../assets";
import {ThemeContext} from "../../providers/ThemeProvider";


const BookmarkScreen: FC<any> = ({route}) => {
    const {bookmark} = route.params
    const [lesson, paragraph, example] = bookmark.split('-')
    const {theme} = useContext(ThemeContext)

    return (
        <View style={styles[theme].screen}>
            <Image
                style={styles[theme].image}
                source={lessons[lesson].paragraphs[paragraph].images[example]}
            />
        </View>
    );
};

const styles = {
    light: StyleSheet.create({
        screen: {
            backgroundColor: '#93C6E7',
            flex: 1
        },
        image: {
            width: '100%',
            resizeMode: 'contain',
            borderWidth: 2,
            borderColor: '#222',
            borderRadius: 12,
            marginBottom: 20,
        },
        header: {
            fontSize: 22,
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
            backgroundColor: '#222',
            flex: 1
        },
        image: {
            width: '100%',
            resizeMode: 'contain',
            borderWidth: 2,
            borderColor: '#999',
            borderRadius: 12,
            marginBottom: 20,
            // tintColor: '#222'
        },
        header: {
            fontSize: 22,
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

export default BookmarkScreen;
