import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, wp } from "../Theme/GlobalTheme";

export default function SymptomCard2(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', marginTop: '10%' }}>
                <Text style={styles.text}>{props.text}</Text>
                <Image source={props?.image} style={{ width: '50%', height: 57, position: 'absolute', alignSelf: 'flex-end', zIndex: 1, left: '60%' }} />
            </View>
            <View style={{ width: '100%', padding: '5%', backgroundColor: props.bottomBackground, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, alignItems: 'center', marginTop: '5%' }}>
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Bold', color: props.bottomColor, fontStyle: 'italic' }}>{props.bottomText}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        width: '50%',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: colors.white,
        // padding: 4,
        borderWidth: 1,
        borderColor: colors.grey,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        color: colors.black,
        // paddingTop: 5,
        paddingLeft: '5%',
        width: wp(24),
        // textAlign: 'center',
        zIndex: 2,
        width: '70%',
        // borderWidth:1
    }
})