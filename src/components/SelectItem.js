import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../Theme/GlobalTheme";



const SelectItem =(props)=>{

    const [seleceted, setSelected] = useState(false);
   

    return(
        <Pressable onPress={props.onPress}  style={styles.container}>
            {props.select?<Image style={styles.image} source={require('../assets/images/Oval-blue.png')}/>:<Image style={styles.image} source={require('../assets/images/Oval.png')}/>}
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}
export default SelectItem;


 const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    height:50,
    margin:2,
  },
  text:{
    fontSize:16,
    fontWeight:'500',
    textAlignVertical:'center',
    padding:5,
    color:colors.black
  },
  image:{
    height:20,
    width:20,
    padding:2
  }
 })