import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useThemeContext, lightTheme, darkTheme } from 'Themes';
import Stacks from './Stacks';
import { StatusBar } from "react-native";

export default function AppNavigator() {
    const theme = useThemeContext();
    return (
        <>
        <StatusBar barStyle={'dark-content'} Statusbarstyle={false} backgroundColor={ lightTheme?"#fff":"#000"}/>
        <NavigationContainer
            theme={theme.mode === 'dark' ? darkTheme : lightTheme}
        >
            {/* Use TabStacks or Stacks below to display the bottom tabs or not */}
            <Stacks />
            {/* <TabStacks /> */}
        </NavigationContainer>
        </>
        
    );
}
