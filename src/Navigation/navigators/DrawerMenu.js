import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import {
    Home, Perfil,
    Transferencia,
    Operacoes,
    Definicao,
    Conta,
    Help
} from 'Screens';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'


const MENUs = [
    {
        name: 'Home',
        label: 'Inicio'
    },
    {
        name: 'Perfil',
        label: 'Perfil'
    },
    {
        name: 'Conta',
        label: 'Conta'
    },
    {
        name: 'Transferencia',
        label: 'Transferencia'
    },
    {
        name: 'Operacoes',
        label: 'Operacões'
    },
    {
        name: 'Definicao',
        label: 'Definições'
    },
    {
        name: 'Help',
        label: 'Suporte'
    }

]
const Drawer = createDrawerNavigator()


const CunstomDrawerContent = ({ navigation, theme }) => {
    const {closeDrawer}=navigation;
    console.log(closeDrawer)

    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={{ flex: 1 }}
        >
            <View
                style={{

                    width: 210,
                    height: 107,
                    borderBottomEndRadius: 107 / 2,
                    backgroundColor: theme.colors.background,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        

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
                        
                        <McImage source={Images.avatar1} style={{
                             width: 40,
                             height: 40,
                        }} />
                    </View>
                    <View>
                        <McText semi size={16} color={theme.colors.text1}>Michack Canive</McText>
                        <McText medium size={10} color={theme.colors.text3}>Serços Online</McText>
                    </View>
                </View>
              
               
            </View>
           

            {/* DrawerItem*/}
            <DrawerContentScrollView
                scrollEnabled={true}
                contentContainerStyle={{
                    marginBottom:90
                }}
                style={{
                    marginLeft: -16
                }}

            >
                {MENUs?.map((menu, index) => {
                    return (
                        <DrawerItem
                            activeTintColor={theme.colors.boxBackground}
                            focused={activeIndex === index}
                            key={index}
                            onPress={() => {
                                navigation.navigate(menu.name, navigation)
                                setActiveIndex(index)
                            }}
                            label={({ focused }) => {
                                return (
                                    <View
                                        style={{
                                            marginTop:5,
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center'
                                        }}>
                                        <View
                                            style={{
                                                width: 4,
                                                height: 20,
                                                borderRadius:24,
                                                marginRight: 26,
                                                backgroundColor: focused ? theme.colors.primary : 'transparent'
                                            }}
                                        >

                                        </View>
                                        <McText
                                            size={16}
                                            bold={focused}
                                            color={theme.colors.text1}
                                        >{menu.label}
                                        </McText>
                                    </View>
                                )
                            }}
                        >
                        </DrawerItem>
                    )
                })}
            </DrawerContentScrollView>
            {/* Footer*/}
            <View
                style={{
                    marginBottom: 27,
                    marginLeft: 30,
                    justifyContent:'space-between'
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <McImage
                        source={Images.logout}
                        style={{
                            tintColor: theme.colors.text2,
                            marginRight: 8,
                            width:10,
                            height: 12
                        }}
                    />
                    <McText
                        bold
                        size={12}
                        color={theme.colors.text2}
                    >Sair
                    </McText>
                </View>
                <View
                    style={{
                        marginTop: 19
                    }}>
                    <McText
                        medium
                        size={10}
                        color={theme.colors.text2}
                    >V2.0.1.JABAKULE</McText>
                </View>
            </View>
        </View>
    )
}
const DrawerMenu = () => {

    const [progress, setProgress] = useState(new Animated.Value(0))


    const theme = useTheme()
    ///////////////Animação do screens////////////////////
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 1]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 15]
    })

    const rotate = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg']
    })
    const AnimatedStyle = {
        borderRadius, transform: [{ scale }]
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'rgba(38,24,120,0.1)'
            }}>

            <Drawer.Navigator
                hideStatusBar={false}
                drawerType="front"
                overlayColor='rgba(0,0,0,0.5)'
                drawerStyle={{
                    flex: 1,
                    width: '80%',
                    backgroundColor: theme.colors.boxBackground
                }}
                sceneContainerStyle={{
                    backgroundColor: '#fff'
                }}
                initialRouteName='Home'
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                    return (
                        <>

                            <CunstomDrawerContent
                                navigation={props.navigation}
                                theme={theme}
                            />

                        </>

                    )
                }}
            >

                <Drawer.Screen name='Home'>
                    {(props) => <Home {...props} AnimatedStyle={AnimatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Perfil'>
                    {(props) => <Perfil {...props} AnimatedStyle={AnimatedStyle}  />}
                </Drawer.Screen>

                <Drawer.Screen name='Transferencia'>
                    {(props) => <Transferencia {...props} AnimatedStyle={AnimatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Operacoes'>
                    {(props) => <Operacoes {...props} AnimatedStyle={AnimatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Conta'>
                    {(props) => <Conta {...props} AnimatedStyle={AnimatedStyle}  />}
                </Drawer.Screen>


                <Drawer.Screen name='Definicao'>
                    {(props) => <Definicao {...props} AnimatedStyle={AnimatedStyle}  />}
                </Drawer.Screen>

                <Drawer.Screen name='Help'>
                    {(props) => <Help {...props} AnimatedStyle={AnimatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu