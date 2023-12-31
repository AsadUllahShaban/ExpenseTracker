import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import { Home } from './screens'

const theme = {
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator
screenOptions={{
  headerShown: false
}}
initialRouteName='Home'
>
  <Stack.Screen name='Home' component={Home}/>
</Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})