import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import SquareRadio from "../../components/SquareRadio";
import Button1 from "../../components/Button1";

export default function AbhaPhone({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem text="Login with ABHA address" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '10%' }}>Enter your Mobile number</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '3%' }}>We’ll send an OTP to this number for verification</Text>
                <TextInput
                    style={{ borderWidth: 1, width: '90%', marginTop: '5%', borderColor: colors.grey, borderRadius: 8, paddingLeft: 10, fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black }}
                    keyboardType="phone-pad"
                />
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '3%' }}>Enter your 10 digit mobile number</Text>
                <View style={{ width: '95%', alignItems: 'center', flexDirection: 'row' }}>
                    <SquareRadio text="I agree to the" />
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.blue, textDecorationLine: 'underline' }}>terms and conditions </Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '75%', marginBottom: "5%" }}>
                    <Button1 Text="Countinue" onPress={() => navigation.navigate('AbhaOtp')} />
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, marginBottom: '5%' }}>or login using ABHA address or number</Text>
            </ScrollView>
        </View>
    )
}