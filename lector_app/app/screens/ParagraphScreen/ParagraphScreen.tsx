import React, {FC, useContext, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {lessons} from "../../assets";
import {ThemeContext} from "../../providers/ThemeProvider";
import {BookmarksContext} from "../../providers/BookmarksProvider";
import MathJax from "react-native-mathjax"


const mmlOptions = {
    messageStyle: "none",
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
        ],
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
        ],
        processEscapes: true,
    },
    TeX: {
        extensions: [
            "AMSmath.js",
            "AMSsymbols.js",
            "noErrors.js",
            "noUndefined.js",
        ],
    },
};

const ParagraphScreen: FC<any> = ({route}) => {
    const {lessonPath, paragraphPath} = route.params
    const {theme} = useContext(ThemeContext)
    const {addBookmark} = useContext(BookmarksContext)
    const [isSolving, setIsSolving] = useState(false)

    return !isSolving ? (
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
            <Button onPress={() => setIsSolving(true)} title={'ДЗ'}/>
        </ScrollView>
    ) : (
        <View style={styles[theme].screen}>
            <MathJax
                mathJaxOptions={mmlOptions}
                html={
                    "$Решите \\begin{matrix}\n" +
                    "1 & 2 & 3\\\\\n" +
                    "a & b & c\n" +
                    "\\end{matrix} $"
                }
            />
            <Button onPress={() => setIsSolving(false)} title={'ДЗ'}/>
        </View>
    );
};

const styles = {
    light: StyleSheet.create({
        screen: {
            backgroundColor: '#93C6E7',
            padding: 12,
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
            padding: 12,
            flex: 1
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
