import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { ReactJsx } from '../core/types'
import { Favourite, History, MainScreen } from '../screens'
import SettingsStackNavigator from './SettingsStackNavigator'
import styles from './styles'
import { View } from 'react-native'
import Icon from '../../assets/icons'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = (): ReactJsx => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name='MainScreen'
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.icon}>
              <Icon icon={'main'} color={color} isFill={focused} />
            </View>
          ),
          title: 'weather',
        }}
      />
      <Tab.Screen
        name='Favourite'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.icon}>
              <Icon icon={'main'} color={color} isFill={focused} />
            </View>
          ),
          title: 'Favourite',
        }}
        component={Favourite}
      />
      <Tab.Screen
        name='History'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.icon}>
              <Icon icon={'main'} color={color} isFill={focused} />
            </View>
          ),
          title: 'History',
        }}
        component={History}
      />
      <Tab.Screen
        name='Settings'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.icon}>
              <Icon icon={'main'} color={color} isFill={focused} />
            </View>
          ),
          title: 'Settings',
        }}
        component={SettingsStackNavigator}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
