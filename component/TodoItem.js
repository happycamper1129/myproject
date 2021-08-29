import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

function TodoItem({item,handler}) {
    return (
       <View style={styles.container}>
           <TouchableOpacity onPress={()=>handler(item.key)}>
               <View style={styles.item}>
                   <MaterialIcons name="delete" size={20} color='#34d'/>
                   <Text style={styles.text}>{item.text}</Text>
               </View>
           </TouchableOpacity>
       </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        padding:20,
        borderWidth:1,
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderRadius:10
    },
    text:{
        marginLeft:10
    }
})
