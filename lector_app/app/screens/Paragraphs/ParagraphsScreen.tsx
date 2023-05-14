import React, {FC, useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import ParagraphCard from "../../components/ParagraphCard/ParagraphCard";
import {ThemeContext} from "../../providers/ThemeProvider";

const ParagraphsScreen: FC<any> = ({route}) => {
    const {lesson, lessonPath} = route.params
    const {theme} = useContext(ThemeContext)

    return (
        <ScrollView style={styles[theme].screen}>
            <View style={styles[theme].headerBox}>
                <Text style={styles[theme].header}>Темы</Text>
            </View>
            {
                Object.keys(lesson.paragraphs)
                    .map((paragraph, index) => (
                            <ParagraphCard
                                lessonPath={lessonPath}
                                paragraphPath={paragraph}
                                paragraph={lesson.paragraphs[paragraph]}
                                index={index}
                                key={index}
                                theme={theme}
                            />
                        )
                    )
            }
        </ScrollView>
    );
};

const styles = {
    light: StyleSheet.create({
        screen: {
            // paddingTop: 20,
            // paddingBottom: 20
            backgroundColor: '#93C6E7',
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

export default ParagraphsScreen;
