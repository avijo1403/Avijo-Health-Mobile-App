import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const Button2 =(props)=>{


    return(
        <TouchableOpacity style={[styles.button,{backgroundColor:props.backgroundColor}]} onPress={props.onPress}>
            {props.image}
          <Text style={styles.TextStyle}>{props.Text}</Text>
        </TouchableOpacity>
    )
}
export default Button2;

const styles = StyleSheet.create({
    button:{
        width:'90%',
        height:50,
        borderRadius:5.47,
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'center'
    },
    TextStyle:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
        alignSelf:'center'
    }
})