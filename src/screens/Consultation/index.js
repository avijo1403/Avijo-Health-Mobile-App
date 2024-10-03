import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HeaderItem2 from "../../components/HeaderItem2";
import styles from "./style";
import { colors, wp } from "../../Theme/GlobalTheme";
import { BaseUrl2, offerData } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Consultation({ navigation }) {

    const [all, setAll] = useState(false);
    const [consult, setConsult] = useState(true);
    const [orders, setOrders] = useState(false);

    const handleAll = () => {
        setAll(true);
        setConsult(false);
        setOrders(false);
    }

    const handleConsult = () => {
        setAll(false);
        setConsult(true);
        setOrders(false);
    }

    const handleOrders = () => {
        setAll(false);
        setConsult(false);
        setOrders(true);
    }

    const Orders = () => {
        return (
            <FlatList
                nestedScrollEnabled={true}
                contentContainerStyle={{ paddingBottom: '5%', marginTop: '5%', width: '90%', alignItems: 'center' }}
                data={offerData}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderBottomWidth: 0, width: '100%', flexDirection: 'row', padding: '5%', borderColor: colors.lightgrey }}>
                            <Image source={require('../../assets/images/skincare1.png')} style={{ height: 92, width: wp(30) }} />
                            <View style={{ paddingLeft: '5%', width: '90%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: '80%' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Skin Care</Text>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Ishaan</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Cancelled</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginTop: '1%' }}>Delivery Method</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '1%' }}>30 day (Free)</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginTop: '3%' }}>Ordered Placed On</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '1%' }}>08 May 2025</Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')} style={[styles.buttonSubContainer, { backgroundColor: colors.grey }]}>
                                <Text style={styles.buttonText}>Veiw Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Reschedule')} style={[styles.buttonSubContainer, { backgroundColor: colors.lightGreen }]}>
                                <Text style={styles.buttonText}>Reorder</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        )
    }


    const Consultations = () => {

        const [userData, setUserData] = useState([]);

        const fetchData = async () => {
            const userId = await AsyncStorage.getItem("id");
            try {
                const response = await fetch(`${BaseUrl2}/user/appointments`);
                const json = await response.json();
                const myConsult = await json?.appointments?.filter((item) => (item.userId._id === userId));
                setUserData(myConsult);
                console.log('json:', myConsult);
            } catch (e) {
                console.log('fetch error:', e);
            }
        }

        useEffect(() => {
            fetchData();
            // console.log('id:', id);
        }, []);

        return (

            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: '10%' }}>
                    <View >
                        <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>My Consultations</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Upcoming</Text>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/dotBlue.png')} style={{ width: 4, height: 18 }} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    nestedScrollEnabled={true}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: '5%' }}
                    data={userData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={{ width: '90%', marginTop: '5%', flexDirection: 'row', marginLeft: '5%', marginBottom: '5%' }}>
                            <Image source={require('../../assets/images/dr6.png')} style={{ width: 44, height: 53, borderRadius: 5, alignSelf: 'center' }} />
                            <View style={{ marginLeft: '5%', width: '100%' }}>
                                <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 16, color: colors.blue }}>{item?.userName}</Text>
                                <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: colors.darkGrey, paddingTop: '3%' }}>Psychologist at Apple Hospital</Text>
                                <View style={{ flexDirection: 'row', marginTop: '0%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Status: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Completed</Text></Text>
                                    <View style={{ padding: 8, borderRadius: 7, backgroundColor: colors.skyblue }}>
                                        <Text style={{ color: colors.blue, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>Online</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: '3%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 10, fonthFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>12 June 2020 | 12:00 pm</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 25, justifyContent: 'space-between', marginRight: '1%' }}>
                                        <Image source={require('../../assets/images/phone2.png')} style={{ height: 12, width: 12 }} />
                                        <Image source={require('../../assets/images/chat2.png')} style={{ height: 12, width: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <HeaderItem2 onPress={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={handleOrders} style={[styles.topButton, { borderColor: orders ? colors.blue : colors.grey, backgroundColor: orders ? colors.blue : colors.white }]}>
                        <Text style={[styles.topButtonText, { color: orders ? colors.white : colors.grey }]}>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleConsult} style={[styles.topButton, { borderColor: consult ? colors.blue : colors.grey, backgroundColor: consult ? colors.blue : colors.white }]}>
                        <Text style={[styles.topButtonText, { color: consult ? colors.white : colors.grey }]}>Consultations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAll} style={[styles.topButton, { borderColor: all ? colors.blue : colors.grey, backgroundColor: all ? colors.blue : colors.white }]}>
                        <Text style={[styles.topButtonText, { color: all ? colors.white : colors.grey }]}>Booking</Text>
                    </TouchableOpacity>
                </View>
                {orders && <Orders />}
                {consult && <Consultations />}
            </ScrollView>
        </View>
    )
}