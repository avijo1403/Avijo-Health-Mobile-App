import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";

export default function AbhaTerms({navigation}) {

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '15%', lineHeight: 30 }}>Personal Data Processing Consent Form</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>1. I have been provided with the Ayushman Bharat Health Account (ABHA) privacy policy which is also available on </Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, width: '90%', marginTop: '2%' }}>https://abdm.gov.in/documents/ABDM_Health _Records_PHR_mobile_application_privacy_policy and Privacy Notice</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%'}}> and Privacy Notice, and have understood the contents thereof.</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>2. I understand that the Privacy Notice and Privacy policy mentioned in Paragraph 1 above provide information about how my personal data may be collected, used and disclosed by Practo's Ayushman Bharat Health Account app (ABHA) or the ABDM or its ecosystem partners across the National Digital health Ecosystem.</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>3. I understand that my personal data may be collected only with my valid consent and that it may be used or processed only in accordance with the ABDM health Data Management policy published by the ABDM, and the Privacy Policy and Privacy Notice issued by Ayushman Bharat Health Account App (ABHA).</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>4. I understand that my personal data may be shared across various entities within the National Digital health Ecosystem only with my consent, and for the following purposes:</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>a. The data is used for displaying the records to the user with consent</Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonSubContainer, { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.blue }]}>
                        <Text style={styles.buttonText1}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AbhaQR')} style={[styles.buttonSubContainer, { backgroundColor: colors.blue }]}>
                        <Text style={styles.buttonText}>I Agree</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}