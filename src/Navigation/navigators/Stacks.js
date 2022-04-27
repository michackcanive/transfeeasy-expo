import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerMenu from './DrawerMenu';
import { Home, Perfil,
    Transferencia,
    Operacoes,
    Definicao,
    Conta,
    Help } from 'Screens';

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
    
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={DrawerMenu}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Transferencia"
            component={Transferencia}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Operacoes"
            component={Operacoes}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Definicao"
            component={Definicao}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Conta"
            component={Conta}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Help"
            component={Help}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

export default Stacks;
