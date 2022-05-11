import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('')
  const [token, setToken] = useState(null)
  const [valid, setValid] = useState('Вы не вошли !')
  
 const onSubmit = async() => {
        await AsyncStorage.setItem('token', username)
        if (username === 'nikita' && password === '1111') {
            setValid('Вы вошли !')
            
        }else {
             setValid('Неверные данные !')
        }
    }

    const tokenlogin = async() => {
        const value = await AsyncStorage.getItem('token')
        console.log(value)
        //if (value !== null) {
          //  navigation.navigate('Main')
          //  console.log('Connected')
       // }else {
         //   console.log('No connected')
       // }
    }

    tokenlogin()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Логин "
          placeholderTextColor="#F2F6F7"
          onChangeText={(value) => setUsername(value)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Пароль"
          placeholderTextColor="#F2F6F7"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <Text style={{fontSize:30}}>{valid}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#186e7d",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    zIndex:1,
    width:350,
    height:240,
    resizeMode:"conteain"
  },
 
  inputView: {
    backgroundColor: "#0AD0D6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    bottom:110,
    marginBottom: 20,
    alignItems: "flex-start",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems:'center',
    alignText:'center'
  },
 
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#09B2B8",
    bottom:-20
  },
});