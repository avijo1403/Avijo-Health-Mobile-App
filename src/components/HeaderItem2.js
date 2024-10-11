import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem2(props) {

    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../assets/images/blackLeft.png')} style={{ height: 14, width: 15 }} />
                </TouchableOpacity>
                {props.text && <Text style={styles.headerText}>{props?.text}</Text>}
                {props.center && <View style={{ backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', padding: '5%', marginLeft: '10%', borderRadius: 8, paddingLeft: "10%", paddingRight: "10%" }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.white }}>{props.name}</Text>
                    <Image source={require('../assets/images/star2.png')} style={{ height: 14, width: 14, marginLeft: '2%' }} />
                </View>}
            </View>
            <TouchableOpacity>
                {props.right}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: '5%',
        paddingTop: '10%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '10%',
        color: colors.black,
    }
})