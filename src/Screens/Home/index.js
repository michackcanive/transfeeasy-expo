import React from 'react';
import { View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated'
import styled, { useTheme } from 'styled-components/native';
import { McText, McImage } from 'Components';
import { Images } from 'Constants';
import { dummyData } from 'Mock'
import Icon from 'react-native-vector-icons/Ionicons'





const Home = ({ AnimatedStyle, navigation }) => {
    const theme = useTheme()
    const {openDrawer}=navigation;
    console.log(openDrawer)

    return (
        <Animated.View
            style={{
                flex: 1,
                // justifyContent: 'center',
                //alignItems: 'center',
                backgroundColor: theme.colors.background,
                paddingTop: 30,
                ...AnimatedStyle
            }}
        >
            {/*Header Setion */}
            <HeaderSection>
                <TouchableOpacity
                    style={{
                        width: 29,
                        height: 29,
                        tintColor: theme.colors.text2
                    }}
                    onPress={() => openDrawer()}>
                    <McImage source={Images.union}
                        style={{
                            width: 19,
                            height: 19,
                            tintColor: theme.colors.text2
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <McText secondary size={20} color={theme.colors.text1} style={{ marginRight: 10 }} >JABAKULÉ</McText>
                    <McImage source={Images.logo} style={{
                        width: 30,
                        height: 30,
                        tintColor: theme.colors.text2
                    }} />

                </View>


            </HeaderSection>

            {/*Account Overview */}

            <HeaderSection style={{ marginTop: 20 }}>
                <McText semic size={16} color={theme.colors.text3}>Actividades da Conta</McText>
            </HeaderSection>
            <View
                style={{
                    marginHorizontal: 25,
                    marginTop: 20,
                    height: 116,
                    backgroundColor: theme.colors.boxBackground,
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        marginLeft: 25
                    }}
                >
                    <McText
                        semi
                        size={24}
                        color={theme.colors.text1}
                        style={{
                            lineHeight: 30,
                            marginBottom: 8
                        }}
                    >50,09 JB</McText>
                    <McText
                        size={16}
                        color={theme.colors.text3}
                    >Valor disponivel</McText>
                </View>
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 24,
                        marginRight: 20,
                        backgroundColor: theme.colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <McImage source={Images.plus} />
                </TouchableOpacity>
            </View>

            {/*JABA Enviados */}

            <HeaderSection style={{ marginTop: 30 }}>
                <McText semi size={16} color={theme.colors.text2}>Jaba enviados</McText>
                <TouchableOpacity>
                    <McImage source={Images.scan} style={{
                        width: 20,
                        height: 20,
                        tintColor: theme.colors.text2
                    }} />
                </TouchableOpacity>


            </HeaderSection>

            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.SendMoneyRecords}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    marginTop: 20,
                                    marginLeft: index === 0 ? 25 : 0,
                                    marginRight: index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10,
                                }}>
                                {index === 0 ? (
                                    <View
                                        style={{
                                            width: 52,
                                            height: 120,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <TouchableOpacity

                                            style={{
                                                width: 42,
                                                height: 42,
                                                borderRadius: 26,
                                                backgroundColor: theme.colors.primary,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            {/* <Icon name='contact' />*/}
                                            <McImage source={item.img} />
                                        </TouchableOpacity>

                                    </View>
                                ) : (
                                    <TouchableOpacity

                                        style={{
                                            width: 100,
                                            height: 100,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: theme.colors.boxBackground,
                                            borderRadius: 12
                                        }}>
                                        <View
                                            style={{
                                                width: 42,
                                                height: 42,
                                                borderRadius: 21,
                                                borderWidth: 1,
                                                borderColor: 'rgba(58,66,118,0.2)',
                                                backgroundColor: theme.colors.boxBackground,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            {<Icon name='person' color={theme.colors.text1} size={35} />}
                                        </View>
                                        <McText
                                            size={16}
                                            color={theme.colors.text3}
                                            style={{
                                                marginTop: 16,
                                            }}
                                        >{item.name}</McText>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )
                    }}
                >

                </FlatList>
            </View>

            {/*Servicos no APP */}

            <HeaderSection style={{ marginTop: 10, marginBottom: 10 }}>
                <McText semi size={16} color={theme.colors.text2}>Serviços</McText>
                <McImage source={Images.filter} style={{
                    width: 20,
                    height: 20,
                    tintColor: theme.colors.text2
                }} />
            </HeaderSection>
            <ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 25,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap'
                    }}>

                    {dummyData.Services?.map((item, index) => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    height: 96,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: (index === 0 || index === 4) ? 0 : 20,
                                    marginTop: index > 3 ? 20 : 0
                                }}
                            >
                                <TouchableOpacity

                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 12,
                                        backgroundColor: theme.colors.boxBackground,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <McImage source={item.img} style={{
                                        width: 29,
                                        height: 29,
                                        tintColor: theme.colors.text2
                                    }} />

                                </TouchableOpacity>
                                <McText
                                    semi
                                    size={10}
                                    color={theme.colors.text3}
                                    style={{
                                        marginTop: 6,
                                        width: 52,
                                        textAlign: 'center'
                                    }}
                                >{item.name}</McText>
                            </View>
                        )
                    })}

                </View>
            </ScrollView>



        </Animated.View>
    );
};

const HeaderSection = styled.View`
margin: 0px 25px;
justify-content: space-between;
align-items: center;
flex-direction: row;
`

export default Home;
