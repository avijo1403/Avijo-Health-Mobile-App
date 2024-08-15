import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const Button1 =(props)=>{


    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.TextStyle}>{props.Text}</Text>
        </TouchableOpacity>
    )
}
export default Button1;

const styles = StyleSheet.create({
    button:{
        width:'90%',
        height:50,
        backgroundColor:colors.blue,
        borderRadius:5.47
    },
    TextStyle:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
        marginTop:15,
        alignSelf:'center'
    }
})