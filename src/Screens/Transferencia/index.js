import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated'
const Transferencia = ({AnimatedStyle}) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#fff',
                ...AnimatedStyle
            }}
        >
            <Text>Transferencia Screen</Text>
        </Animated.View>
    );
};

export default Transferencia;
