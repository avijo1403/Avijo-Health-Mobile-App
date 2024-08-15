import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import { useNavigation } from "@react-navigation/native";

export default function HomeHeader(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {props.showText && <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../assets/images/leftWhite.png')} style={{ height: 20, width: 21 }} />
                </TouchableOpacity>}
                {props.profile && <TouchableOpacity onPress={props.onPress}>
                    <Image source={require('../assets/images/profile.png')} style={styles.image} />
                </TouchableOpacity>}
                {props.showText && <Text style={{ fontSize: 20, color: colors.white, fontFamily: 'Gilroy-SemiBold', paddingLeft: '5%' }}>{props.text}</Text>}
                {props.profile && <TouchableOpacity onPress={props.createPress} style={styles.textContainer}>
                    <Image source={require('../assets/images/add.png')} style={{ height: 18, width: 18 }} />
                    <Text style={styles.CreateText}>Create New UHI ID</Text>
                </TouchableOpacity>}
            </View>
            <View style={{ flexDirection: 'row', width: 65, justifyContent: 'space-between', marginLeft: '2%' }}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/whiteSearch.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>33+</Text>
                    </View>
                    <Image source={require('../assets/images/whiteNoti.png')} style={{ height: 30, width: 28 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
        paddingTop: '10%',
        justifyContent: 'space-between',
        backgroundColor: colors.blue,
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 50,
    },
    textContainer: {
        flexDirection: 'row',
        marginLeft: '10%',
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.darkBlue,
        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%'
    },
    CreateText: {
        fontSize: 10,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.darkBlue,
        paddingLeft: 5,
    },
    location: {
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.grey,
        margin: 3
    },
    numberContainer: {
        height: 14,
        width: 14,
        backgroundColor: colors.red,
        color: colors.white,
        borderRadius: 13,
        position: 'absolute',
        zIndex: 2,
        marginLeft: 15,
        alignItems: 'center'
    },
    number: {
        fontSize: 6,
        textAlign: 'center',
        fontFamily: 'Gilroy-Regular',
        color: colors.white,
        paddingTop: 2,
        paddingLeft: 2
    }
})