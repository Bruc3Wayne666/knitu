import React, {FC, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loadOptions} from "@babel/core";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);


export const ThemeProvider: FC<any> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {

        AsyncStorage.getItem('theme')
            // @ts-ignore
            .then(res => setTheme(res))
    }, [])

    const toggleTheme = () => {
        AsyncStorage.setItem('theme', theme === "light" ? "dark" : "light")
            .then(() => setTheme(theme === "light" ? "dark" : "light"))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
