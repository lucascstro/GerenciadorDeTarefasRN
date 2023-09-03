import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/index'
import AuthProvider from './src/contexts/auth'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38a69d" barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}