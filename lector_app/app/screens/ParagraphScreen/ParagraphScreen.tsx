import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {lessons} from "../../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Invert} from "react-native-image-filter-kit";


const ParagraphScreen: FC<any> = ({route}) => {
    const navigation = useNavigation()
    const {lessonPath, paragraphPath} = route.params
    // const path = `../../assets/lessons/${lessonPath}/${paragraphPath}/${paragraphPath}.1.png`

    const showToast = (lessonPath: string, paragraphPath: string, index: number) => {
        AsyncStorage.setItem(
            `${lessonPath}-${paragraphPath}-${index + 1}`,
            `${lessonPath}-${paragraphPath}-${index}`
        ).then(() => {
            ToastAndroid.showWithGravityAndOffset(
                `${lessonPath}-${paragraphPath}-${index + 1} добавлено в закладки`,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        })
    };

    console.log(lessons[lessonPath].paragraphs[paragraphPath].title)
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.headerBox}>
                <Text style={styles.header}>{lessons[lessonPath].title}</Text>
            </View>
            {
                lessons[lessonPath].paragraphs[paragraphPath].images
                    .map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onLongPress={() => {
                                showToast(lessonPath, paragraphPath, index)
                            }}
                        >
                            {/*<Invert image={*/}
                                <Image
                                    style={styles.image}
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

const styles = StyleSheet.create({
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
})

export default ParagraphScreen;
