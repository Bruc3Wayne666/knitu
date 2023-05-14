import React, {FC, useContext} from 'react';
import {Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {lessons} from "../../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ThemeContext} from "../../providers/ThemeProvider";
import {BookmarksContext} from "../../providers/BookmarksProvider";


const ParagraphScreen: FC<any> = ({route}) => {
    const {lessonPath, paragraphPath} = route.params
    const {theme} = useContext(ThemeContext)
    const {addBookmark} = useContext(BookmarksContext)

    return (
        <ScrollView style={styles[theme].screen}>
            <View style={styles[theme].headerBox}>
                <Text style={styles[theme].header}>{lessons[lessonPath].title}</Text>
            </View>
            {
                lessons[lessonPath].paragraphs[paragraphPath].images
                    .map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onLongPress={() => {
                                addBookmark(lessonPath, paragraphPath, index)
                            }}
                        >
                            {/*<Invert image={*/}
                                <Image
                                    style={styles[theme].image}
                                    source={lessons[lessonPath].paragraphs[paragraphPath].images[index]}
                                />
                            {/*}*/}
                            {/*/>*/}
                        </TouchableOpacity>
                    ))
            }
        </ScrollView>
    );
};

const styles = {
    light: StyleSheet.create({
        screen: {
            backgroundColor: '#93C6E7'
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
            backgroundColor: '#222'
        },
        image: {
            width: '100%',
            resizeMode: 'contain',
            borderWidth: 2,
            borderColor: '#999',
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
    })
}

export default ParagraphScreen;
