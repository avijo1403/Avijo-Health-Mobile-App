import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import SearchItem2 from "./SearchItem2";
import LinearGradient from "react-native-linear-gradient";

export default function ArticleHeader2(props) {

    return (
        <>
            <LinearGradient colors={['white', 'white']} style={{ width: '100%' }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={props.onBack}>
                            <Image source={require('../assets/images/blackLeft.png')} style={{ width: 15, height: 14 }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.text}>{props.text}</Text>
                            {props.showBottomText && <TouchableOpacity onPress={props.createPress} style={styles.textContainer}>
                                <Text style={styles.CreateText}>Other <Text style={{ color: colors.darkGrey, fontSize: 12, fontFamily:'Gilroy-Medium' }}>- Mahalaxmi</Text></Text>
                                <Image source={require('../assets/images/down.png')} style={{ height: 8, width: 8, marginLeft: '3%' }} />
                            </TouchableOpacity>}
                        </View>
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
                <View style={{ width: '100%', alignItems: 'center', paddingBottom: '5%' }}>
                    <SearchItem2 right={require('../assets/images/micGrey2.png')} rightHeight={20} rightWidth={20} />
                </View>
            </LinearGradient>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: '10%',
        // backgroundColor: colors.green,
        justifyContent: 'space-between'

    },
    text: {
        fontSize: 20,
        color: colors.black,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
    },
    textContainer: {
        flexDirection: 'row',
        marginLeft: '5%',
        // backgroundColor: colors.green,
        padding: 10,
        paddingTop: 0,
        borderRadius: 50,
        // borderWidth: 3,
        // borderColor: colors.darkBlue,
        alignItems: 'center',
    },
    CreateText: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        paddingLeft: 5,
    }
})