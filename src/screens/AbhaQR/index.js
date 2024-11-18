import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { ScrollView } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import HeaderItem from "../../components/HeaderItem";

export default function AbhaQR({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem text="ABHA" onBack={() => navigation.goBack()} right={<View style={{ flexDirection: 'row', alignItems: 'center' }}><Image source={require('../../assets/images/plus.png')} style={{ height: 24, width: 24 }} /><Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white, paddingLeft: '2%' }}>Create new ABHA</Text></View>} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', marginTop: '10%', elevation: 5, borderRadius: 8, backgroundColor: colors.white, padding: '3%' }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ width: 64, height: 84 }} />
                    <View style={{ paddingLeft: '5%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Dr. Sunil Puraswani</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '3%' }}>-070676-35032</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '3%' }}>Pediatrician</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', padding: '10%', backgroundColor: colors.lightgrey, borderRadius: 8, marginTop: '7%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View>
                        <Text style={{ color: colors.black }}>ABHA Address:</Text>
                        <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-SemiBold' }}>213388641375@abdm</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Copy</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', alignItems: 'center', marginTop: '10%', borderWidth: 1, borderColor: colors.grey, padding: '5%' }}>
                    <Image source={require('../../assets/images/qr2.png')} style={{ height: 240, width: 240, marginTop: '5%' }} />
                    <Text style={{ marginTop: '15%', fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, textAlign: 'center' }}>Register or login with health facilities by allowing scan of this QR code</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonSubContainer, { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.blue }]}>
                        <Text style={styles.buttonText1}>Switch Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ScanScreen')} style={[styles.buttonSubContainer, { backgroundColor: colors.blue }]}>
                        <Text style={styles.buttonText}>Scan hospital QR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}