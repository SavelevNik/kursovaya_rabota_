    import React from 'react'
    import { SafeAreaView } from 'react-navigation'
    import { Text, StyleSheet,View } from 'react-native'
    
    const MapListScreen = ({ navigation }) => {
      return (
        <SafeAreaView forceInset={{ top: 'always' }} style={{paddingTop:120}}>
          <Text style={{ fontSize: 38, textAlign:'center', paddingTop:50 }}>Савельев Никита</Text>
          <View style={{height:20}}/>
          <Text style={{ fontSize: 20, textAlign:'center' }}>Студент финансового университета при правительсве РФ</Text>
          <View style={{height:20}}/>
          <Text style={{ fontSize: 20, textAlign:'center' }}>Группа: ПИ20-6</Text>
          <View style={{height:20}}/>
          <Text style={{ fontSize: 20, textAlign:'center' }}>Тема: мобильное приложение для учёта физической активности с использованием геолокации</Text>
        </SafeAreaView>
      )
    }
    
    export default MapListScreen