import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function SpecialistCard(props){

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={props.image} style={{width:77, height:48, borderTopRightRadius:7.41, borderTopLeftRadius:7.41}}/>
            <Text style={styles.heading}>Psychologist</Text>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        width:88,
        padding:2,
        alignItems:'center',
        height:100,
        marginRight:10
    },
    text:{
        fontSize:5,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
        padding:5,
    },
    heading:{
        fontSize:10,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        margin:5,
        marginBottom:0,
        textAlign:'center' 
    }
})