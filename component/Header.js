import React from 'react'
import {StyleSheet,Text,TextInput,View} from 'react-native'

function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:80,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        // textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:"red"
    }
})