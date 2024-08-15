import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

export default function ArticleHeader(props) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.onBack}>
                    <Image source={require('../assets/images/leftWhite.png')} style={{ width: 15, height: 14 }} />
                </TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {props.showSearch ? (<TouchableOpacity onPress={props.onRightPress}>
                    {props.image}
                </TouchableOpacity>) : (<View style={{ width: 30 }} />)}
                {props.image2 && (<TouchableOpacity onPress={props.onRightPress2}>
                    {props.image2}
                </TouchableOpacity>)}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: '10%',
        backgroundColor: colors.lightGreen,
        justifyContent: 'space-between'

    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
    }
})