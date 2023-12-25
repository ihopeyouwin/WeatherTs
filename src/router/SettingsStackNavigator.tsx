import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Settings } from '../screens'

const Stack = createStackNavigator()

const SettingsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={'Language'} component={Settings} />
    <Stack.Screen name={'Theme'} component={Settings} />
    <Stack.Screen name={'Navigation'} component={Settings} />
    <Stack.Screen name={'About'} component={Settings} />
  </Stack.Navigator>
)

export default SettingsStackNavigator
