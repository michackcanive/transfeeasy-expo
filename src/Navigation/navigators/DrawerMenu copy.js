import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components/native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { McText, McImage } from 'Components'
import { Image } from 'Constants'
import { Home } from 'Screens'

const CustomDrawerContent = ({ navigation, theme }) => {
    return <View style={{ flex: 1 }}>

        {/* Header*/}
        <View style={{
            width: 210,
            height: 107,
            borderBottomEndRadius: 107 / 2,
            backgroundColor: theme.Colors.background,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <View
            style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <View
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        backgroundColor: theme.colors.boxBackground,
                        marginRight: 10
                    }}
                >
                    <McImage source={Image.avatar1} />
                </View>
                <View>
                    <McText seni size={16} colors={theme.colors.tex1}>
                        Michack Canive
                    </McText>
                    <McText medium size={10} colors={theme.colors.tex3} >
                        Seattle, Washington
                    </McText>
                </View>

            </View>
        </View>
        {/* DrawerItem*/}
        {/* Footer*/}
    </View>
}

const Drawer = createDrawerNavigator()

const DrawerMenu = () => {
    const theme = useTheme()

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.boxBackground
            }}>

            <Drawer.Navigator
                hideStatusBar={true}
                drawerType="slide"
                overlayColor='transparent'
                drawerStyle={{
                    flex: 1,
                    width: '60%',
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Home'
                drawerContent={(props) => {
                    <CustomDrawerContent
                        navigation={props.navigation}
                        theme={theme}
                    />
                }}>

                <Drawer.Screen name='Home'>
                    {(props) => <Home {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu