import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, hp, wp } from "../Theme/GlobalTheme";

export default function LabCard(props){

    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.container,{width:props.circle?'30%':'22%', marginRight:props.circle?8:12,backgroundColor:props.circle?colors.white:colors.aqua}]}>
            {props.circle?<Image source={props?.image} style={{width:wp(23), height:hp(12), borderRadius:50}}/>:<Image source={props?.image} style={{width:72, height:72}}/>}
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:3,
        padding:2,
        alignItems:'center',
        marginTop:'2%',
    },
    text:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        marginTop:5
    }
})