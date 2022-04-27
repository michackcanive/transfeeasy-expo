import React from 'react'
import {Logo,Background,Header,Button,TextInput,BackButton} from 'Components'
import Paragraph from '../../Components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login</Header>
      <Paragraph>
        Markting e negocios em Angola 😍
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SignIn')}
      >
        Entrar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SignUp')}
      >
        Registrar-se
      </Button>
    </Background>
  )
}
