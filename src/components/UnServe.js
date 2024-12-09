import React, { useState } from "react";
import Button2 from "./Button2";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function UnServer(props) {

    const navigation = useNavigation();


    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white }}>
            {props.loading ? <ActivityIndicator color={colors.blue} size={'large'} /> :
                <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: '5%' }}>
                        <Image source={require('../assets/images/dummyProfile.png')} style={{ height: 40, width: 40 }} />
                        <Text style={{ marginLeft: '3%', fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, maxWidth:'90%'}} numberOfLines={1} ellipsizeMode="tail">{props.area}</Text>
                        <Image source={require('../assets/images/down-arrow.png')} style={{ height: 16, width: 16, marginTop:'1%'}} />
                    </View>
                    <Image source={require('../assets/images/map-pin.png')} style={{ height: 80, width: 80, marginTop: '50%' }} />
                    <Text style={{ color: colors.black, fontSize: 22, fontFamily: 'Gilroy-Bold', marginTop: '5%' }}>Location Not Serviceable</Text>
                    <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-SemiBold', marginTop: '3%', textAlign: 'center', lineHeight: 18 }}>Our team working tirelessly to bring 10 minutes deliveries to your location.</Text>
                    <View style={{ marginTop: '10%', width: "100%", alignItems: 'center' }}>
                        <Button2 backgroundColor={colors.yellow} Text="Try Changing Location" onPress={() => navigation.navigate('Address')} />
                    </View>
                </View>
            }
        </View>
    )
}