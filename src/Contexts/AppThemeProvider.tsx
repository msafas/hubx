import React, { createContext, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Provider, ThemeProvider, withTheme, DefaultTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useConfig } from "./ConfigProvider";


const AppThemeContext = createContext({});

interface AppThemeState {
    isDarkMode: boolean;
    theme: any;
    themes: { [key: string]: any };
    setTheme: (dark: boolean) => void;
}

export function useAppTheme() {
    return useContext(AppThemeContext) as AppThemeState;
}

const themes = {
    'dark': withTheme({
        ...DefaultTheme,
        dark: true,
        colors: {
            ...DefaultTheme.colors,
            primary:"#28af6f",
            appColor: "#273f8e",
            background: '#F9F9F9',
            purple: '#7D53DE',
            placeholder: "#979798"
            
        },
        roundness: 20
       
    } as any),
    'light': withTheme({
        ...DefaultTheme,
        dark: false,


        colors: {
            ...DefaultTheme.colors,
            primary:"#28af6f",
            appColor: "#273f8e",
            background: '#F9F9F9',
            purple: '#7D53DE',
            placeholder: "#979798"


        },
        roundness: 20
    } as any)
}

export function AppThemeProvider(props: any) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState<any>(themes["light"] as any);
    const { config, getConfigParameter } = useConfig();

    useEffect(() => {
        setTheme(themes[isDarkMode ? "dark" : "light"] as any);
    }, [isDarkMode]);

    useEffect(() => {
        setIsDarkMode(getConfigParameter("isDarkMode"));
    }, [config.isDarkMode]);
   
    useEffect(() => {
        const loadDarkModeFromStorage = async () => {
          try {
            const storedIsDarkMode = await AsyncStorage.getItem("isDarkMode");
            if (storedIsDarkMode !== null) {
              setIsDarkMode(JSON.parse(storedIsDarkMode));
            }
          } catch (error) {
            console.error("Error loading dark mode from AsyncStorage:", error);
          }
        };
    
        loadDarkModeFromStorage();
      }, []);
    
      const saveDarkModeToStorage = async (isDark: boolean) => {
        try {
          await AsyncStorage.setItem("isDarkMode", JSON.stringify(isDark));
        } catch (error) {
          console.error("Error saving dark mode to AsyncStorage:", error);
        }
      };
    
      const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        setTheme(themes[newDarkMode ? "dark" : "light"] as any);
        saveDarkModeToStorage(newDarkMode);
      };

    return (
        <AppThemeContext.Provider value={{
            isDarkMode,
            theme,
            themes: props.themes,
            setTheme: toggleDarkMode
        }}>
            <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <Provider theme={theme}>
                    {props.children}
                </Provider>
            </View>
        </AppThemeContext.Provider>
    );
}


