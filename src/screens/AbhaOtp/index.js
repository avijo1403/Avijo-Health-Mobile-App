import React, { useState } from "react";
import HeaderItem from "../../components/HeaderItem";
import { ScrollView, Text, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import EnterOtp2 from "../../components/EnterOtp2";
import Button1 from "../../components/Button1";

export default function AbhaOtp({ navigation }) {
    const [otp, setOtp] = useState('');

    return (
        <View style={styles.container}>
            <HeaderItem text="Login with ABHA address" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '10%', marginBottom: '10%' }}>Enter the 6-digit OTP sent to 7974814696</Text>
                <EnterOtp2 value={otp} setValue={setOtp}/>
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '0%' }}>Enter the 6-digit OTP</Text>
                <View style={{ width: "90%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '15%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '0%' }}>Didn’t receive the OTP?</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, marginTop: '0%' }}> Resend</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '0%' }}>00:43</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '88%', marginBottom: "5%" }}>
                    <Button1 Text="Countinue" onPress={() => navigation.navigate('AbhaSelect')} />
                </View>
            </ScrollView>
        </View>
    )
}


