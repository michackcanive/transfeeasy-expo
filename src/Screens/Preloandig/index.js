import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import styled, { useTheme } from 'styled-components/native';
import {Logo}from 'Components';
import { Footer, FromType } from './styles';

export default function Preloanding() {
    const theme = useTheme()
    return (
        <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.colors.primary }}>
                <Logo />
                <ActivityIndicator style={{ marginTop: 30 }} size="large" color={theme.colors.primary} />
            </View>
            <Footer >
                <FromType style={{ marginBottom: 23 }}>
                    <Text>FROM:<Text style={{ color: theme.colors.primary }} > AJEC</Text></Text>
                </FromType>
            </Footer>
        </>

    )
}