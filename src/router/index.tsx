import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import React from 'react'
import { BackupScreen, TestScreen } from '../screens'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'BottomTabNavigator'} component={BottomTabNavigator} />
        <Stack.Screen name='Test' component={TestScreen} />
        <Stack.Screen name='Backup' component={BackupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
