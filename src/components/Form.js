import React from 'react';
import {StyleSheet, View, Text,TextInput, TouchableOpacity, Button} from 'react-native';
import {useState} from 'react'

export default function Form({addHandler}){
  
  const [text, setText] = useState('');

  const onChange =(text) =>{
      setText(text);
  }


    return(
      <View style={styles.container}>
          <TextInput multiline={true} style={styles.input} onChangeText={onChange} placeholder="Ваша физическая активность за сегодня " />
          <Button color="green" title='Добавить' onPress={()=> addHandler(text)}/>
      </View>
    )
  }

const styles = StyleSheet.create({
    input:{
      borderWidth:3,
      borderRadius:10,
      padding: 10,
      marginVertical: 30,
      marginHorizontal:'20%',
      width:'60%',
      marginBottom:'0%',
    },
    container:{
      paddingTop:'20%'
    }
}); 