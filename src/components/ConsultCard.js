import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, hp, wp } from "../Theme/GlobalTheme";

export default function ConsultCard(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={props?.image} style={{ width: '99%', height: 72, borderRadius: 2, borderRadius:5 }} />
            <Text style={styles.text}>{props.text}</Text>
            <TouchableOpacity style={{ backgroundColor: colors.blue, width: 50, padding:5,  borderRadius: 4, margin: '5%', marginBottom:'10%' }}>
                <Text style={{ fontSize: 6, fontFamily: 'Gilroy-SemiBold', color:colors.white }}>Consult Now</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: '22.5%',
        alignItems: 'center',
        marginRight: 7,
        marginTop:'2%'
    },
    text: {
        fontSize: 8,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.darkGrey,
        marginTop:5,
        width:wp(20),
        height:hp(3),
        textAlign:'center',
    }
})