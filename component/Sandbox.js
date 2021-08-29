import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

function Sandbox() {
    return (
       <View style={styles.container} >
           <Text style={styles.one}>one</Text>
           <Text style={styles.two}>two</Text>
           <Text style={styles.three}>three</Text>
           <Text style={styles.four}>four</Text>
       </View>
    )
}

export default Sandbox

const styles = StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'#ddd',
        paddingTop:25,
    },
    one:{
        flex:1,
        backgroundColor:'violet',
        padding:10
    },
    two:{
        flex:1,
        backgroundColor:'gold',
        padding:20
    },
    three:{
        flex:2,
        backgroundColor:'coral',
        padding:30
    },
    four:{
        flex:4,
        backgroundColor:'skyblue',
        padding:40
    },
})
