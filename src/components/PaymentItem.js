import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";


const PaymentItem=(props)=>{


    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.arrowContainer}>
            <Image style={styles.arrow} source={require('../assets/images/right.png')}/>
        </View>
        </TouchableOpacity>
    )
}
export default PaymentItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        height:48,
        marginTop:'2%',
        paddingLeft:'5%',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:colors.grey,
        alignSelf:'center'
    },
    icon:{
        height:24,
        width:24
    },
    text:{
        fontSize:18,
        fontFamily:'Gilroy-Medium',
        color:colors.black,
        paddingLeft:5
    },
    arrow:{
        height:12,
        width:7,
    },
    textContainer:{
        width:250,
    },
    arrowContainer:{
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center'
    }
})