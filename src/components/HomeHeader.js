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
                <View style={{ flexDirection: 'column', width: '75%' }}>
                    {props.heading && <Text style={{ fontSize: 28, fontFamily: 'Gilroy-SemiBold', color: props?.headingColor, marginLeft: '10%' }}>{props?.heading}</Text>}
                    {props.showText && <Text style={{ fontSize: 20, color: colors.white, fontFamily: 'Gilroy-SemiBold', paddingLeft: '5%' }}>{props.text}</Text>}
                    <TouchableOpacity onPress={props.createPress} style={styles.textContainer}>
                        <Text style={styles.CreateText}>Other <Text style={{color:colors.darkGrey, fontSize:12}}>- Mahalaxmi</Text></Text>
                        <Image source={require('../assets/images/down.png')} style={{ height: 8, width: 8, marginLeft:'3%' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: 65, justifyContent: 'space-between', marginLeft: '2%' }}>
                {/* <View style={{ height: 30, width: 30 }} /> */}
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.number}>33+</Text>
                    </View>
                    <Image source={require('../assets/images/blackChat.png')} style={{ height: 24, width: 24 }} />
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
        backgroundColor: colors.white,
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 50,
    },
    textContainer: {
        flexDirection: 'row',
        marginLeft: '5%',
        backgroundColor: colors.white,
        padding: 10,
        paddingTop:0,
        borderRadius: 50,
        // borderWidth: 3,
        // borderColor: colors.darkBlue,
        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%'
    },
    CreateText: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
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
        backgroundColor: colors.blue,
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