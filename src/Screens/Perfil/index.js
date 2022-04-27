import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated'
import { useTheme } from 'styled-components/native';
const Perfil = ({AnimatedStyle},navigation) => {
const theme=useTheme()
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:theme.colors.background,
                ...AnimatedStyle
            }}
        >
            <Text>Perfil Screen</Text>
        </Animated.View>
    );
};

export default Perfil;
