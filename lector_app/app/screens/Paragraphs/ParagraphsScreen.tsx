import React, {FC} from 'react';
import {ScrollView, Text} from "react-native";
import ParagraphCard from "../../components/ParagraphCard/ParagraphCard";

const ParagraphsScreen: FC<any> = ({route}) => {
    const {lesson, lessonPath} = route.params
    console.log(lessonPath)

    return (
        <ScrollView>
            {
                Object.keys(lesson.paragraphs)
                    .map(paragraph => (
                            <ParagraphCard
                                lessonPath={lessonPath}
                                paragraphPath={paragraph}
                                paragraph={lesson.paragraphs[paragraph]}
                            />
                        )
                    )
            }
        </ScrollView>
    );
};

export default ParagraphsScreen;
