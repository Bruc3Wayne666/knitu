import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {lessons} from "../../assets";

const ParagraphScreen: FC<any> = ({route}) => {
    const navigation = useNavigation()
    const {lessonPath, paragraphPath} = route.params
    // const path = `../../assets/lessons/${lessonPath}/${paragraphPath}/${paragraphPath}.1.png`

    console.log(lessons[lessonPath].paragraphs[paragraphPath].title)
    return (
        <ScrollView>
            {
                lessons[lessonPath].paragraphs[paragraphPath].images
                    .map((_, index) => (
                        <Image
                            style={styles.image}
                            source={lessons[lessonPath].paragraphs[paragraphPath].images[index]}
                        />
                    ))
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        resizeMode: 'contain',
    }
})

export default ParagraphScreen;
