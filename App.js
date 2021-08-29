import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, ScrollView, View, FlatList, TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import AddTodo from './component/AddTodo';
import Header from './component/Header'
import Sandbox from './component/Sandbox';
import TodoItem from './component/TodoItem'


export default function App() {
  
  const [todos, setTodos] = useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'},
    {text:'when pigs fly',key:'4'},
    {text:'piece of cake',key:'5'},
  ]);

  const [textvalue, setTextvalue] = useState("Header")
  const todoHandler = (key) => {
    setTodos((prevTodo)=>{
      return prevTodo.filter((todo)=>todo.key!=key)
    })
  }
  const changeText = (value) => {
     setTextvalue(value)
     if (value.length > 3) {
        return setTodos((prevTodos)=>
        [{text:value,key:Math.random().toString()},...prevTodos]
        )
     }else{
       Alert.alert("OOPS","Todos must be over 3 characters long",[
        {text:"Ok",onPress:()=>console.log("3 over long111111")}
      ])
     }
    
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
      console.log("keyboard")
    }}>
      <View style={styles.container}>
          <View style={styles.content}>
            <Header title={textvalue} />
              <View style={styles.list}>
                <AddTodo changeText={changeText}/>
                  <FlatList
                    data = {todos}
                    renderItem={({item})=>(
                      <TodoItem item={item} handler={todoHandler}/>
                    )}
                  />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
    // <Sandbox />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    paddingHorizontal:1
  },
  content:{
    flex:1,
    backgroundColor:'pink',
    paddingTop:30
  },
  list:{

    flex:1,
    backgroundColor:'yellow',
    margin:10
  }
});
