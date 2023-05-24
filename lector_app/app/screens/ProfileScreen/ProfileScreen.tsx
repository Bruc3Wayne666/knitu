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
        <SafeAreaView style={stylesLight[theme].screen}>
            <View style={stylesLight[theme].headerBox}>
                <Text style={stylesLight[theme].header}>Профиль</Text>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={stylesLight[theme].btnText}>Тема:</Text>
                <TouchableOpacity
                    onPress={toggleTheme}
                    style={stylesLight[theme].button}
                >
                    <Text style={stylesLight[theme].btnText}>{theme === 'light' ? 'Тёмная' : 'Светлая'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const stylesLight = {
    light: StyleSheet.create({
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
            fontSize: 42,
            fontWeight: '900',
            color: 'white'
        },
        btnText: {
            fontSize: 22,
            fontWeight: '600',
            color: 'white'
        },
        headerBox: {
            marginBottom: 20,
            marginTop: 20,
            paddingLeft: 12,
            justifyContent: 'center'
        },
        button: {
            width: 200,
            backgroundColor: '#222',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),
    dark: StyleSheet.create({
        screen: {
            backgroundColor: '#222',
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
            fontSize: 42,
            fontWeight: '900',
            color: 'white'
        },
        btnText: {
            fontSize: 22,
            fontWeight: '600',
            color: 'white'
        },
        headerBox: {
            marginBottom: 20,
            marginTop: 20,
            paddingLeft: 12,
            justifyContent: 'center'
        },
        button: {
            width: 200,
            backgroundColor: '#333',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}

export default ProfileScreen;
