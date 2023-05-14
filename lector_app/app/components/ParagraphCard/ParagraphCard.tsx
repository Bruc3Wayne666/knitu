import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Theme} from "../../providers/ThemeProvider";

interface ParagraphCardProps {
    paragraph: {
        title: string
    },
    lessonPath: string,
    paragraphPath: string,
    index: number,
    theme: Theme
}

const ParagraphCard: FC<ParagraphCardProps> = ({paragraph, lessonPath, paragraphPath, index, theme}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('paragraph', {lessonPath, paragraphPath})}
            style={styles[theme].card}
        >
            <Text style={styles[theme].title}>
                <Text style={styles[theme].number}>{index + 1}. </Text>
                {paragraph.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    light: StyleSheet.create({
        card: {
            paddingLeft: 12,
            backgroundColor: '#B9F3FC',
            marginBottom: 12,
            minHeight: 90,
            alignItems: 'flex-start',
            justifyContent: 'center',
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
        title: {
            fontSize: 16,
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
            backgroundColor: '#444',
            marginBottom: 12,
            minHeight: 90,
            alignItems: 'flex-start',
            justifyContent: 'center',
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
        title: {
            fontSize: 16,
            color: 'white'
        },
        number: {
            fontSize: 22,
            fontWeight: '900'
        }
    })
}

export default ParagraphCard;
