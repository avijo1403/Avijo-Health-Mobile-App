import React, { useEffect, useId, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style"; // Make sure to import your stylesheet
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme"; // Assuming colors are imported from a global theme file
import { BaseUrl2, consult2 } from "../../assets/Data"; // Assuming consult2 is imported from a data file
import Button1 from "../../components/Button1";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ConfirmBooking({ navigation, route }) {
    // Combine the "Add" button with the rest of the items
    const dataWithAddButton = [{ isAddButton: true }, ...consult2];
    const [singleData, setSingleData] = useState({});
    const [userData, setUserData] = useState({});
    const id = route.params.id || "";

    const storeMultipleValues = async (key, values) => {
        try {
            const jsonString = JSON.stringify(values);
            await AsyncStorage.setItem(key, jsonString);
        } catch (e) {
            console.error("Failed to save the data to the storage", e);
        }
    };


    const handleSubmit = async () => {
        const userId = await AsyncStorage.getItem('id');
        console.log('userId:', userId, id);
        try {
            const data = {
                "userId": userId,
                "doctorId": id,
                "time": "10:00 AM",
                "date": "2024-08-25",
                "userName": singleData?.fullName
            }

            const response = await fetch(`${BaseUrl2}/user/appointment/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Parse the JSON response
            const result = await response.json();
            navigation.navigate('AppointmentConfirm', { id: id });
            console.log('Success:', result);
        } catch (e) {
            console.log('error submitting...', e);
        }
    }


    const fetchData = async () => {
        const userId = await AsyncStorage.getItem('id');
        console.log('userId:', userId);
        console.log('id:', id);
        try {
            const response = await fetch(`${BaseUrl2}/doctor/getDoctorProfile/${id}`);
            const response1 = await fetch(`${BaseUrl2}/user/getUserSingle/${userId}`);
            const json = await response.json();
            const json1 = await response1.json();
            setSingleData(json.data);
            setUserData(json1.data);
            console.log('json:', json1.data);
        } catch (e) {
            console.log('fetch error:', e);
        }
    }

    useEffect(() => {
        fetchData();
        console.log('id:', id);
    }, []);

    return (
        <View style={styles.container}>
            <HeaderItem2 onPress={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', }}>
                    <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row' }}>
                        <Image source={require('../../assets/images/dr6.png')} style={{ width: 56, height: 58, borderRadius: 5, }} />
                        <View style={{ marginLeft: '5%', width: '80%' }}>
                            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.blue }}>{singleData?.fullName}</Text>
                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: colors.darkGrey, paddingTop: '3%' }}>{singleData?.specialization}</Text>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '60%', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Exp. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>22 years</Text></Text>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>fees. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>$30</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', marginBottom: '5%' }}>
                                <TouchableOpacity style={{ backgroundColor: colors.blue, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/follow.png')} style={{ height: 8, width: 8, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Follow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.white, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/notify.png')} style={{ height: 10, width: 10, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Notify me</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.white, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/ask2.png')} style={{ height: 8, width: 8, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Ask</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/dot1.png')} style={{ height: 25, width: 25 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/stars.png')} style={{ height: 12, width: 73, marginTop: '2%' }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>(152)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '15%' }}>Who is this consultation for?</Text>
                <View style={{ width: '100%' }}>
                    <FlatList
                        contentContainerStyle={{ alignItems: 'flex-start', marginLeft: '5%', marginTop: '2%', paddingRight: '5%' }}
                        horizontal={true}
                        data={dataWithAddButton}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ alignItems: 'center', padding: 5, marginRight: 10 }}>
                                {item.check === 'true' && <Image source={require('../../assets/images/tick2.png')} style={{ height: 10, width: 10, position: 'absolute', zIndex: 2, marginTop: 7, right: '12%' }} />}
                                {item.isAddButton ? <Image source={require('../../assets/images/add2.png')} style={{ height: 23, width: 23.5, marginTop: 5 }} /> : <Image source={item.image} style={{ height: 35, width: 35, borderRadius: 30 }} />}
                                {item.isAddButton ? <Text style={{ color: colors.darkGrey, fontSize: 10, fontFamily: 'Gilroy-SemiBold', marginTop: 5 }}>Add</Text> : <Text style={{ color: colors.darkGrey, fontSize: 10, fontFamily: 'Gilroy-SemiBold', marginTop: 5 }}>{item.text}</Text>}
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={styles.specialization}>Payment Details</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '5%' }}>Consultation Fee</Text>
                <Text style={styles.generalMedicine}>$80.00</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '5%' }}>Booking Fee <Text style={{ color: colors.blue }}>(Free)</Text></Text>
                <Text style={styles.generalMedicine}>$40.00</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '5%' }}>Total Payment</Text>
                <Text style={styles.generalMedicine}>$80.00</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '5%' }}>Payment mode</Text>
                <Text style={styles.generalMedicine}>Pay at Clinic</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalOption}>Total Saving</Text>
                    <Text style={styles.totalOption}>$40.00</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button1 Text="Confirm booking" onPress={() => navigation.navigate('Slot', { name: singleData?.fullName, id: id, token: singleData?.firebaseToken })} />
                </View>
            </ScrollView>
        </View>
    );
}
