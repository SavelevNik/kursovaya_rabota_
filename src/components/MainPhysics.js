import React, {useState} from 'react';
import {StyleSheet, View, FlatList,Text,ScrollView} from 'react-native';
import Header from './Hedaer'
import Listitem from './ListItem'
import Form from './Form'


export default function MainPhysics({navigation}){
  const [list, setList] = useState([
    {text: 'Добавляйте ваши физические достижения и следите за ними !', key: '1'},
  ])

  const add_value = (text) => {
    setList((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

const deleteHandler =(key) =>{
  setList((list) => {
    return list.filter(list => list.key != key)
  })
}

  return(
    <View>
      <Header />
      <Form addHandler={add_value}/>
      <View>
      <ScrollView>
        <FlatList data={list} renderItem={({item})=>(
         <Listitem el={item} deleteHandler={deleteHandler}/>
        )}/>
        </ScrollView>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({

});