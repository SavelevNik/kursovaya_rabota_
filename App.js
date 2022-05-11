import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapScreen from './src/srceens/MapScreen';
import MapListScreen from './src/srceens/MapListScreen';
import { setNavigator } from './src/navigationRef';
import MainPhysics from './src/components/MainPhysics';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/srceens/Login'

    const switchNavigator = createSwitchNavigator({
      mainFlow: createBottomTabNavigator({
        Карта: MapScreen,
        Физактивность: MainPhysics,
        Информация: MapListScreen,
        Логин: Login
      })
    })

    const App = createAppContainer(switchNavigator)

    export default () => {
      return (
        <App 
          ref={navigator => {
            setNavigator(navigator)
          }}
        />
      );
    }