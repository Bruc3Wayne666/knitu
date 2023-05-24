import React, {FC, useContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ScrollView, StyleSheet, Text, ToastAndroid, View} from "react-native";
import BookmarkCard from "../../components/BookmarkCard/BookmarkCard";
import {ThemeContext} from "../../providers/ThemeProvider";
import {useNavigation} from "@react-navigation/native";
import {BookmarksContext} from "../../providers/BookmarksProvider";


const Bookmarks = () => {
    const {navigate} = useNavigation()
    const {theme} = useContext(ThemeContext)
    const {bookmarks, removeBookmark} = useContext(BookmarksContext)

    return (
        <View style={styles[theme].screen}>
            <View style={styles[theme].headerBox}>
                <Text style={styles[theme].header}>Закладки</Text>
            </View>
            {
                bookmarks.length === 0 ?
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text style={{fontSize: 22, color: 'gray'}}>Нет заметок</Text>
                    </View> :
                    <ScrollView>
                        {
                            bookmarks?.map((key, index) => (
                                <BookmarkCard
                                    key={index}
                                    theme={theme}
                                    bookmark={key}
                                    handleRemove={removeBookmark}
                                    navigate={navigate}
                                />
                            ))
                        }
                    </ScrollView>
            }
        </View>
    )
}


const styles = {
    light: StyleSheet.create({
        screen: {
            backgroundColor: '#93C6E7',
            flex: 1
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
            flex: 1
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

export default Bookmarks
