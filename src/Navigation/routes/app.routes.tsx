import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../../core/theme';
import { StatusBar } from "react-native";
import AppNavigator from "../navigators";
const Tab = createBottomTabNavigator();

export const AppRoutes: React.FC = () => {

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.colors.primary} />
      <Tab.Navigator >
      <AppNavigator/>
      </Tab.Navigator>
      
    </>
  )
}

