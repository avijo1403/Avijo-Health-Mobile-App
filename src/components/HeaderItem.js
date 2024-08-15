import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function HeaderItem(props) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onBack}>
                    <Image source={require('../assets/images/leftWhite.png')} style={{ width: 15, height: 14 }} />
                </TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            {
                props.showSearch ? (<TouchableOpacity onPress={props.onRightPress}>
                    {props.image}
                </TouchableOpacity>) : (<View style={{ width: 30 }} />)
            }
            {props.right}
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: '10%',
        backgroundColor: colors.blue,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
    }
})