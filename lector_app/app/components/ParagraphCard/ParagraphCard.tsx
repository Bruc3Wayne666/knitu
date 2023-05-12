import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface ParagraphCardProps {
    paragraph: {
        title: string
    },
    lessonPath: string,
    paragraphPath: string
}

const ParagraphCard: FC<ParagraphCardProps> = ({paragraph, lessonPath, paragraphPath}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('paragraph', {lessonPath, paragraphPath})}
            style={styles.card}
        >
            <Text style={styles.title}>{paragraph.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#888',
        marginBottom: 12,
        minHeight: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    title: {
        fontSize: 18,
        color: 'black'
    }
})

export default ParagraphCard;
