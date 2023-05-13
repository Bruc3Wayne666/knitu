import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface ParagraphCardProps {
    paragraph: {
        title: string
    },
    lessonPath: string,
    paragraphPath: string,
    index: number
}

const ParagraphCard: FC<ParagraphCardProps> = ({paragraph, lessonPath, paragraphPath, index}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('paragraph', {lessonPath, paragraphPath})}
            style={styles.card}
        >
            <Text style={styles.title}>
                <Text style={styles.number}>{index}. </Text>
                {paragraph.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
        elevation: 6
    },
    title: {
        fontSize: 16,
        color: '#555'
    },
    number: {
        fontSize: 22,
        fontWeight: '900'
    }
})

export default ParagraphCard;
