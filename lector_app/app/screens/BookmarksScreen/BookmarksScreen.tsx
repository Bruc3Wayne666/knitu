import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import BookmarkCard from "../../components/BookmarkCard/BookmarkCard";

const Bookmarks = () => {
    const [keys, setKeys] = useState<string[]>()

    useEffect(() => {
        AsyncStorage.getAllKeys()
            .then(res => setKeys([...res]))
    }, [])

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.headerBox}>
                <Text style={styles.header}>Закладки</Text>
            </View>
            {/*<ScrollView>*/}
                {
                    keys?.map(key => (
                        <BookmarkCard key={key}/>
                    ))
                }
            {/*</ScrollView>*/}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        // paddingTop: 20,
        // paddingBottom: 20
        backgroundColor: '#93C6E7'
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

export default Bookmarks
