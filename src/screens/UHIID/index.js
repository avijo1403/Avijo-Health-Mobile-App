import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, offerData } from "../../assets/Data";
import RazorpayCheckout from 'react-native-razorpay';

const RAZORPAY_TEST_KEY = 'rzp_test_aAAisbxaDEGUY9';

export default function UHIID({ navigation }) {

    const [english, setEnglish] = useState(true);
    const [hindi, setHindi] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [drData, setDrData] = useState([]);
    const amount = 1000;


    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/getAllDoctorProfile`);
            const json = await response.json();
            console.log('json:', json.data[0]._id);
            setDrData(json.data);
        } catch (e) {
            console.log('error fetching...', e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handlePayment = () => {
        const options = {
            description: 'Thank you for your purchase',
            image:
                'https://maigha.com/wp-content/uploads/2023/10/Untitled_design-2-removebg-preview.png',
            currency: 'INR',
            key: RAZORPAY_TEST_KEY,
            amount: amount * 100,
            name: 'Maigha Inc',
            prefill: {
                email: 'support@maigha.com',
                phone: '9888626111',
                name: 'Hrushikesh Vetagiri',
                address: {
                    city: 'Nellore',
                    state: 'Andhra Pradesh',
                    country: 'India',
                    zip: '524137',
                },
            },
            theme: {
                color: '#09518e'
            },
        };

        RazorpayCheckout.open(options)
            .then(data => {
                console.log(`Payment successful: ${data.razorpay_payment_id}`);
                setPaymentSuccess(true);
                if (paymentSuccess) {
                    navigation.navigate('VideoChat');
                }
            })
            .catch(error => {
                console.log('Payment error:', error.description, error.code);
            });
    };


    const handleEnglish = () => {
        setEnglish(true);
        setHindi(false);
    }

    const handleHindi = () => {
        setEnglish(false);
        setHindi(true);
    }

    return (
        <View style={styles.container}>
            <HeaderItem text="Summary" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ width: '100%' }}>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/images/symp2.png')} style={styles.image1} />
                    <Text style={styles.heading}>Consultation for Psychological Counselling</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', alignSelf: 'flex-start', padding: '5%', paddingBottom: '2%', color: colors.black }}>We will assign you a top doctor from bellow.</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', alignSelf: 'flex-start', paddingLeft: '5%', color: colors.darkGrey }}>Verified Doctors Online Now</Text>
                    <Image source={require('../../assets/images/dot.png')} style={{ height: 20, width: 20, marginLeft: '2%' }} />
                </View>
                {drData.length > 0 ? <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={{ marginRight: 5, marginLeft: '5%', }}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    data={drData}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10, borderWidth: 1, borderRadius: 0, borderColor: colors.lightgrey, width: 314, marginRight: 10, marginTop: '5%', elevation: 5, backgroundColor: colors.white }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/dr5.png')} style={{ height: 72, width: 72, borderRadius: 10 }} />
                                <View style={{ paddingLeft: '2%', width: '90%' }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '5%' }}>{item.fullName}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '2%', paddingLeft: '4%' }}>{item.specialization}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between', alignItems: 'center', marginTop: '0%', width: '80%' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 6 }}>
                                                <Image source={require('../../assets/images/time2.png')} style={{ width: 24, height: 24 }} />
                                                <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold' }}>01:00 - 08:00 PM</Text>
                                            </View>
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '6%' }}>Distance. <Text style={{ color: colors.black, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>30 Km away</Text></Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 6, marginTop: '15%' }}>
                                            <Image source={require('../../assets/images/calendar2.png')} style={{ width: 12, height: 12 }} />
                                            <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.green }}>Avaliable Today</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )} /> : <ActivityIndicator color={colors.blue} style={{ padding: 10 }} />}
                <View style={styles.languageContainer}>
                    <Text style={styles.languageHeading}>Choose Your Preferred Language</Text>
                    <Text style={styles.languageDetail}>We will find the doctor who can speak in your language.</Text>
                    <View style={styles.languageButtonContainer}>
                        <TouchableOpacity onPress={handleEnglish} style={[styles.languageButton, { borderColor: english ? colors.blue : colors.grey }]}>
                            <Text style={[styles.languageText, { color: english ? colors.blue : colors.grey }]}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleHindi} style={[styles.languageButton, { marginLeft: '10%', borderColor: hindi ? colors.blue : colors.grey }]}>
                            <Text style={[styles.languageText, { color: hindi ? colors.blue : colors.grey }]}>Hindi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.consultContainer}>
                    <View style={styles.tickContainer}>
                        <Image source={require('../../assets/images/uidTick.png')} style={styles.uidTick} />
                        <Text style={styles.consultHeading}>Single Online Consultation</Text>
                    </View>
                    <Text style={styles.consultDetail}>Chat, audio, video consultation and free 7 day follow up</Text>
                    <View style={styles.feeContainer}>
                        <View style={styles.freeContainer}>
                            <Text style={styles.freeText}>You will also get a FREE follow-up 7 days with every consultation</Text>
                        </View>
                        <TouchableOpacity style={styles.feeButton}>
                            <Text style={styles.fee}>$999</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.privacyContainer}>
                    <View style={styles.shieldContainer}>
                        <Image source={require('../../assets/images/shield.png')} style={styles.shield} />
                        <Text style={styles.privacyHeading}>Data and Privacy</Text>
                    </View>
                    <Text style={styles.privacyText}>
                        The contents of your consultations are private and confidential.avijo’s medical team may carry out routine anonymised audits to improve service quality.
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>
                            Know more
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.privacyText}>By proceeding to avail a consultation, you agree to</Text><TouchableOpacity><Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>avijo's Terms of use</Text></TouchableOpacity>
                    <Text style={styles.bottomText}>avijo Gaurantee: 100% Money back if no response</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('VideoChat', { id: drData[3]._id, fcmToken: drData[3].firebaseToken });
                }} style={styles.buttonContainer}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.buttonContainer}> */}
                    <View style={{ flexDirection: 'row', height: 48, alignItems: 'center', justifyContent: 'space-between', width: '55%', marginLeft: 20 }}>
                        <Text style={styles.buttonFee}>$999</Text>
                        <View style={{ width: 2, height: '50%', backgroundColor: colors.white }} />
                        <Text style={styles.buttonText}>Pay & Consult</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}