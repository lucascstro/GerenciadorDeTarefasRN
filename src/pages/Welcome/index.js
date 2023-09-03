import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext, createContext } from 'react'
import * as Animatable from 'react-native-animatable'
import axios from 'axios';
import { AuthContext } from '../../contexts/auth';


export default function Welcome() {
  const [passwordValue, setPasswordValue] = useState('');
  const [userValue, setUserValue] = useState('');

  const { singIn } = useContext(AuthContext);

  function handlerLogin() {
    singIn(userValue, passwordValue);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain' />
      </View>
      <Animatable.View
        animation='fadeInUp'
        style={styles.containerForm}>
        <Text style={styles.title}>Monitore e organize seus gastos de qualquer lugar</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <Text animation='fadeInUp' style={styles.TextEmail}>Email</Text>
        <TextInput
          style={styles.TextInputEmail}
          placeholder="Digite seu email..."
          value={userValue}
          onChangeText={(text) => {
            setUserValue(text);
          }} />
        <Text style={styles.TextSenha}>Senha</Text>
        <TextInput
          style={styles.TextInputSenha}
          secureTextEntry={true} placeholder="Digite sua senha..."
          value={passwordValue}
          onChangeText={(text) => { setPasswordValue(text); }} />
        <TouchableOpacity style={styles.btnEntrar}
          onPress={handlerLogin}>
          <Text style={styles.btnEntratText}>
            Acessar
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d"
  },
  containerLogo:
  {
    flex: 1,
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems: "center"
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    alignSelf: 'center'
  },
  text: {
    color: '#a1a1a1',
    alignSelf: 'center'
  },
  TextEmail: {
    marginTop: '10%',
    marginLeft: '5%',
    fontSize: 16,
  },
  TextInputEmail: {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    fontSize: 14
  },
  TextSenha: {
    marginTop: '10%',
    marginLeft: '5%',
    fontSize: 16,
  },
  TextInputSenha: {
    marginTop: '2%',
    marginLeft: '5%',
    marginRight: '5%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    fontSize: 14
  },
  btnEntrar: {
    height: '9%',
    backgroundColor: "#38a69d",
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '9%',
    borderRadius: 5
  },
  btnEntratText: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
})