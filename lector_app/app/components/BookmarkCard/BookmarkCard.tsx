import React, {FC} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Theme} from "../../providers/ThemeProvider";
import {lessons} from "../../assets";

interface BookmarkCardProps {
    theme: Theme
    bookmark: string
    handleRemove: (key: string) => void,
    navigate: (v1: string, v2: any) => void
}

const BookmarkCard: FC<BookmarkCardProps> = ({theme, bookmark, handleRemove, navigate}) => {
    const [lesson, paragraph, example] = bookmark.split('-')

    return bookmark !== 'theme' && (
        <TouchableOpacity
            onPress={() => navigate('bookmark', {bookmark})}
            style={styles[theme].card}
        >
            <View style={styles[theme].titleBox}>
                <Text style={styles[theme].title}>
                    {
                        lessons[lesson].title.length >= 38
                            ? `${lessons[lesson].title.slice(0, 38)}...`
                            : `${lessons[lesson].title}`
                    }
                </Text>
                <Text style={styles[theme].title}>
                    {
                        lessons[lesson].paragraphs[paragraph].title.length >= 38
                            ? `${lessons[lesson].paragraphs[paragraph].title.slice(0, 38)}...`
                            : `${lessons[lesson].paragraphs[paragraph].title}`
                    }
                </Text>
                <Text style={styles[theme].title}>
                    Пример {Number(example) + 1}
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.light.button}
                    onPress={() => handleRemove(bookmark)}
                >
                    <Text style={styles.light.btnX}>&times;</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    light: StyleSheet.create({
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
            width: '96%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        button: {
            width: 30,
            height: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15
        },
        btnX: {
            color: 'white',
            fontSize: 22
        },
        titleBox: {
            flexWrap: 'wrap'
        },
        title: {
            fontSize: 14,
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
            paddingRight: 12,
            backgroundColor: '#444',
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
            width: '96%',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        titleBox: {
            flexWrap: 'wrap'
        },
        title: {
            fontSize: 14,
            color: 'white'
        },
        number: {
            fontSize: 22,
            fontWeight: '900'
        }
    })
}

export default BookmarkCard;
