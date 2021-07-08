import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';


const Task =(props)=>{
    return (
        <View style={styles.item}>
            <View style={styles.leftItem} onMagicTap>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
                
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#ffff',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
       marginBottom:20,
    },

    leftItem:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6' ,
        opacity:0.4,
        borderRadius:5,
    marginRight:7  },
    text:{
        maxWidth:'80%',
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
        
    }

});

export default Task;