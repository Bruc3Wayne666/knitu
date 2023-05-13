import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import ParagraphCard from "../../components/ParagraphCard/ParagraphCard";

const ParagraphsScreen: FC<any> = ({route}) => {
    const {lesson, lessonPath} = route.params

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.headerBox}>
                <Text style={styles.header}>Темы</Text>
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
                            />
                        )
                    )
            }
        </ScrollView>
    );
};

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

export default ParagraphsScreen;
