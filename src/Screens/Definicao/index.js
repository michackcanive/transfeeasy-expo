import React from 'react';
import { View, Text,Switch } from 'react-native';
import Animated, { Value } from 'react-native-reanimated'
import {useThemeContext} from 'Themes'
import {McText} from 'Components'
import { useTheme } from 'styled-components/native';
const Definicao = ({AnimatedStyle},navigation) => {
    const theme=useTheme()
    const themeContext=useThemeContext()
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
            <McText 
            bold
            size={24}
            color={theme.colors.text1} >
                Definicao Screen
                </McText>
                <View
                
                style={{
                    marginTop:55,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Switch
                    value={themeContext.mde==='dark'}
                    onValueChange={(value)=>{
                    themeContext.setMode(value ?'dark':'light')
                    }}
                    >
                    </Switch>
                </View>

        </Animated.View>
    );
};

export default Definicao;
