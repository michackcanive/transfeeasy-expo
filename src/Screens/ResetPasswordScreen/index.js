import React, { useState } from 'react'

import {Logo,Background,Header,Button,TextInput,BackButton} from 'Components'

import { emailValidator } from '../../helpers/emailValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Recuperar Senha</Header>
      <TextInput
        label="Seu número da conta"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="phone-pad"
        keyboardType="phone-pad"
        description="Recebera um sms do código de confirmação"
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Enviar Código
      </Button>
    </Background>
  )
}
