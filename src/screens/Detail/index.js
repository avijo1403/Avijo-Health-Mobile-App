import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { offerData } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function Detail({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Appointment details" onPress={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentConftainerStyle={{ alignItems: 'center' }}>
                <View style={{ padding: 10, borderRadius: 0, borderColor: colors.lightgrey, width: 314, marginRight: 10, marginTop: '5%', borderBottomWidth: 1, backgroundColor: colors.white, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '90%' }}>
                        <Image source={require('../../assets/images/dr5.png')} style={{ height: 72, width: 72, borderRadius: 10 }} />
                        <View style={{ paddingLeft: '2%', width: '80%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '5%' }}>Dr. Wilson</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '5%', paddingLeft: '4%' }}>General Pulmonologist</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', padding: 5, paddingTop:0, alignItems: 'center', borderRadius: 6 }}>
                                        <Image source={require('../../assets/images/time2.png')} style={{ width: 24, height: 24 }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.black }}>01:00 - 08:00 PM</Text>
                                    </View>
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '6%' }}>Distance. <Text style={{ color: colors.black, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>30 Km away</Text></Text>
                                </View>
                                    <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', borderRadius: 6, marginTop: '20%' }}>
                                        <Image source={require('../../assets/images/calendar2.png')} style={{ width: 12, height: 12 }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.green }}>Avaliable Today</Text>
                                    </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.detailHeading}>Patient Details</Text>
                <View style={styles.patientContainer}>
                    <Image source={require('../../assets/images/pp.png')} style={{ height: 58, width: 58, borderRadius: 90 }} />
                    <View style={styles.subPatient}>
                        <Text style={styles.patientName}>Daniel</Text>
                        <View style={styles.genderContainer}>
                            <Text style={styles.gender}>Gender: <Text style={styles.genderDetail}>Male</Text></Text>
                            <Text style={styles.gender}>Age: <Text style={styles.genderDetail}>30</Text></Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.detailHeading}>Appointment Details</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Appointment ID</Text>
                    <Text style={styles.detail}>1644172</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Distance.</Text>
                    <Text style={styles.detail}>30 Km away</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detail}>12 June 2020</Text>
                    <Text style={styles.detail}>12:00 pm</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Transaction ID</Text>
                    <Text style={styles.detail}>1644172</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Status</Text>
                    <Text style={styles.detail}>Completed</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Appointment for</Text>
                    <Text style={styles.detail}>Chest Pain</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Attachment</Text>
                    <Text style={styles.detail}>report355356.pdf</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                    <Button1 Text="Download" />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.callContainer}>
                    <Image source={require('../../assets/images/phone.png')} style={{ height: 16, width: 16 }} />
                    <Text style={styles.call}>Chat / Call</Text>
                </TouchableOpacity>
                <Text style={styles.detailHeading}>Payment Details</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Consultation Fee</Text>
                    <Text style={styles.detail}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Total Payment</Text>
                    <Text style={styles.detail}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Payment mode</Text>
                    <Text style={styles.detail}>Pay at Clinic</Text>
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalOption}>Total Saving</Text>
                    <Text style={styles.totalOption}>$40.00</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonSubContainer, { backgroundColor: colors.grey }]}>
                        <Text style={styles.buttonText}>Cancel Appointment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Reschedule')} style={[styles.buttonSubContainer, { backgroundColor: colors.blue }]}>
                        <Text style={styles.buttonText}>Reshedule</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}