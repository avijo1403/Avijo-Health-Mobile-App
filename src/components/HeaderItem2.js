import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem2(props) {

    return (
        <View style={[styles.headerContainer, { backgroundColor: props?.backgroundColor }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={props.backgroundColor ? require('../assets/images/leftWhite.png') : require('../assets/images/blackLeft.png')} style={{ height: 14, width: 15 }} />
                </TouchableOpacity>
                {props.text && <Text style={[styles.headerText, { color: props.backgroundColor ? props.textColor : colors.black, }]}>{props?.text}</Text>}
                {props.center && <View style={{ backgroundColor: colors.blue, flexDirection: 'row', alignItems: 'center', padding: '5%', marginLeft: '0%', borderRadius: 8, paddingLeft: "5%", paddingRight: "10%" }}>
                    {props?.profileImage && <Image source={props?.profileImage} style={{ height: 46, width: 46, borderRadius: 100, }} />}
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.white, marginLeft: '5%', width: '65%' }}>{props.name}</Text>
                </View>}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    {props.right}
                </TouchableOpacity>
                <TouchableOpacity>
                    {props.right2}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: '4%',
        paddingLeft: '5%',
        paddingRight: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // height:60
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '10%',

    }
})