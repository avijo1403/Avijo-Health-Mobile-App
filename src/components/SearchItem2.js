import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function SearchItem2(props) {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/search1.png')} style={{ height: 24, width: 24 }} />
            <TextInput
                placeholder="Search"
                style={styles.search}
            />
            <Image source={props?.right} style={{ height: props.rightHeight, width: props.rightWidth }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 12,
        paddingLeft: '5%',
        borderColor: colors.lightgrey,
        height: 47,
        backgroundColor: colors.white,
        elevation: 2
    },
    search: {
        width: '80%',
        fontSize: 16,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        paddingLeft: 10,
    }
})