import React, {FC, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void; isLoading: boolean};

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);


export const ThemeProvider: FC<any> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        AsyncStorage.getItem('theme')
            .then(res => {
                if (res === null) {
                    setTheme('light')
                    return setIsLoading(false)
                }
                setTheme(res as Theme)
                return setIsLoading(false)
            })
    }, [])

    const toggleTheme = () => {
        AsyncStorage.setItem('theme', theme === "light" ? "dark" : "light")
            .then(() => setTheme(theme === "light" ? "dark" : "light"))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isLoading }}>
            {children}
        </ThemeContext.Provider>
    );
};
