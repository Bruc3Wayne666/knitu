import React, {FC, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ToastAndroid} from "react-native";

type BookmarksContext = { bookmarks: string[]; addBookmark: (v1: string, v2: string, v3: number) => void; removeBookmark: (v: string) => void };

export const BookmarksContext = React.createContext<BookmarksContext>(
    {} as BookmarksContext
);


export const BookmarkProvider: FC<any> = ({children}) => {
    const [bookmarks, setKeys] = useState<string[]>([])

    // AsyncStorage.clear().then()
    useEffect(() => {
        AsyncStorage.getAllKeys()
            .then(res => setKeys([...res.filter(item => item !== 'theme')]))
    }, [])

    const addBookmark = (lessonPath: string, paragraphPath: string, index: number) => {
        console.log(lessonPath, paragraphPath, index)
        AsyncStorage.setItem(
            `${lessonPath}-${paragraphPath}-${index}`,
            `${lessonPath}-${paragraphPath}-${index}`
        ).then(() => {
            setKeys(prevState => Array.from(new Set([`${lessonPath}-${paragraphPath}-${index}`, ...prevState])))
            ToastAndroid.showWithGravityAndOffset(
                `${lessonPath}-${paragraphPath}-${index + 1} добавлено в закладки`,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        })
    };

    const removeBookmark = (bookmark: string) => {
        AsyncStorage.removeItem(bookmark).then(() => {
            setKeys(prevState => [...prevState?.filter(item => item !== bookmark)])
            const [lesson, paragraph, example] = bookmark.split('-')
            ToastAndroid.showWithGravityAndOffset(
                `${lesson}-${paragraph}-${Number(example) + 1} убрано из закладок`,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        })
    }

    return (
        <BookmarksContext.Provider value={{bookmarks, addBookmark, removeBookmark}}>
            {children}
        </BookmarksContext.Provider>
    );
};
