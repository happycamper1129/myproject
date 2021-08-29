import React,{useState} from 'react'
import {StyleSheet,Text,Button,TextInput,View} from 'react-native'

function AddTodo({changeText}) {

    const [text_value, setText_value] = useState('')

    const changeHandler = (value) => {
        setText_value(value)
    }
    const buttonClick = () => {
        changeText(text_value)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter Title"
                onChangeText={(value)=>{changeHandler(value)}}
            />
            <Button style={styles.button} title="Submit" onPress={buttonClick}/>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor: "#ddd",
        borderWidth:1
    },
    button:{
        color:'coral',
        borderWidth:1,
        borderRadius:2
    }
})