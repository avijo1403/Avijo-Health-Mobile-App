import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function CategoryCard(props){

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={props?.image} style={{width:'99%', height:75, borderRadius: props.circle? 50:7.41}}/>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        width:'23%',
        padding:2,
        alignItems:'center',
        marginRight:8,
        marginTop:'2%'
    },
    text:{
        fontSize:10,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        marginTop:5
    }
})