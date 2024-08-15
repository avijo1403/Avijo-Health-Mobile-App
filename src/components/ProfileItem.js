import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";


const ProfileItem=(props)=>{


    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image style={styles.icon} source={props.icon}/>
            <View style={[styles.textContainer,{width:props.emergency?'65%':'82%'}]}>
            <Text style={styles.text}>{props.text}</Text>
            </View>
            {props.emergency && <Image source={require('../assets/images/emergency.png')} style={{height:20, width:56}}/>}
            <View style={styles.arrowContainer}>
            <Image style={styles.arrow} source={require('../assets/images/right.png')}/>
        </View>
        </TouchableOpacity>
    )
}
export default ProfileItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        flex:1,
        marginTop:'2%',
        padding:'2%',
        marginLeft:'2%',
        borderBottomWidth:1,
        borderColor:colors.grey,
        alignSelf:'center'
    },
    icon:{
        height:24,
        width:24
    },
    text:{
        fontSize:20,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        paddingLeft:5
    },
    arrow:{
        height:12,
        width:7,
    },
    textContainer:{
        paddingLeft:'3%',
    },
    arrowContainer:{
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:"1%"
    }
})