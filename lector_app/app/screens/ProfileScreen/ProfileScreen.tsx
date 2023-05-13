import React, {FC, useContext} from 'react';
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import {ThemeContext} from "../../providers/ThemeProvider";

const ProfileScreen: FC<any> = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <SafeAreaView style={stylesLight.screen}>
            <View style={stylesLight.headerBox}>
                <Text style={stylesLight.header}>Профиль</Text>
            </View>
            <View>
                <Button
                    onPress={toggleTheme}
                    title={'theme'}
                />
            </View>
        </SafeAreaView>
    );
};

const stylesLight = StyleSheet.create({
    screen: {
        backgroundColor: '#93C6E7',
        flex: 1
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: '#222',
        borderRadius: 12,
        marginBottom: 20
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

export default ProfileScreen;
