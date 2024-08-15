import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, wp } from "../Theme/GlobalTheme";

export default function SymptomCard(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={props?.image} style={{ width: '99%', height: 65, borderRadius: 10 }} />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '22%',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: colors.white,
        padding: 2
    },
    text: {
        fontSize: 10,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.darkGrey,
        paddingTop: 5,
        paddingLeft:'5%',
        width:wp(20),
        textAlign:'center',
        // borderWidth:1
    }
})