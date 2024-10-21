import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Clipboard from "@react-native-clipboard/clipboard";
import { colors } from "../../Theme/GlobalTheme";
import ProfileItem from "../../components/ProfileItem";
import { BaseUrl2 } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {

    // const id = route?.params?.id;

    const [userData, setUserData] = useState([]);

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (e) {
            console.error('Failed to fetch the data from storage', e);
        }
    };


    const fetchData = async () => {
        const userId = await AsyncStorage.getItem('id');
        console.log('userId:', userId);
        try {
            const response1 = await fetch(`${BaseUrl2}/user/getUserSingle/${userId}`);
            const json1 = await response1.json();
            setUserData(json1.data);
            console.log('json:', json1.data);
        } catch (e) {
            console.log('fetch error:', e);
        }
    }
    const textToCopy = "This is some text that can be copied.";

    const copyToClipboard = () => {
        Clipboard.setString(textToCopy);
        Alert.alert("Copied to clipboard", textToCopy);
    };

    useEffect(() => {
        fetchData();
        // getData('token').then(token => console.log('token:', token));
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/images/blackLeft.png')} style={{ width: 15, height: 13, margin: 20, marginLeft: '5%' }} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ width: '100%' }}>
                <View style={styles.profile} />
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={styles.profileContainer}>
                    {/* <Image source={require('../../assets/images/profile3.png')} style={styles.profile} /> */}
                    {/* <View style={styles.textContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{userData?.fullName}</Text>
                            <Image source={require('../../assets/images/tick.png')} style={styles.tick} />
                        </View> */}
                    {/* <View style={styles.nameContainer}>
                            <Text style={styles.number}>{userData?.mobileNumber}</Text>
                            <TouchableOpacity style={{ marginLeft: '5%' }}>
                                <Image source={require('../../assets/images/copy.png')} style={styles.copy} />
                            </TouchableOpacity>
                        </View> */}
                    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={styles.addContainer}>
                        <Text style={styles.addText}>{userData?.fullName}</Text>
                        <Image source={require('../../assets/images/rightBlack.png')} style={styles.blueRight} />
                    </TouchableOpacity>
                    {/* </View> */}
                </TouchableOpacity>
                {/* <View style={styles.qrContainer}>
                    <Image source={require('../../assets/images/qr.png')} style={styles.qr} />
                    <View style={{ flexDirection: 'row', width: '100%', paddingLeft: '3%', paddingBottom: 5 }}>
                        <Image source={require('../../assets/images/tick.png')} style={{ height: 18, width: 18 }} />
                        <Image source={require('../../assets/images/copy.png')} style={styles.copy} />
                    </View>
                </View> */}
                {/* <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: '5%', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.shareContainer}>
                        <Image style={styles.share} source={require('../../assets/images/share.png')} />
                        <Text style={styles.shareText}>Share QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareContainer}>
                        <Image style={styles.share} source={require('../../assets/images/download.png')} />
                        <Text style={styles.shareText}>Download QR</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={{ width: '100%', height: 1, backgroundColor: colors.grey, marginTop: '5%' }} /> */}
                <ProfileItem icon={require('../../assets/images/profile1.png')} text="ABHA" onPress={() => navigation.navigate('Order')} />
                <ProfileItem icon={require('../../assets/images/profile2.png')} text="Order & Booking" onPress={() => navigation.navigate('Order')} />
                <ProfileItem icon={require('../../assets/images/profile4.png')} text="Addresses" onPress={() => navigation.navigate('Wallet')} />
                <ProfileItem icon={require('../../assets/images/profile5.png')} text="Reminders" onPress={() => navigation.navigate('HealthRecords')} />
                {/* <ProfileItem icon={require('../../assets/images/location2.png')} text="Manage Addresses" onPress={() => navigation.navigate('Address')} />
                <ProfileItem icon={require('../../assets/images/reminder.png')} text="Reminder" />
                <ProfileItem icon={require('../../assets/images/earn.png')} text="Refer and Earn" />
                <ProfileItem icon={require('../../assets/images/article2.png')} text="Health Articles (Docare)" /> */}
                <ProfileItem icon={require('../../assets/images/profile6.png')} text="Ambulance" onPress={()=> navigation.navigate('Ambulance')} emergency={true} />
                <ProfileItem icon={require('../../assets/images/profile7.png')} text="Support and Help" onPress={() => navigation.navigate('Support')} />
                <TouchableOpacity style={{ margin: '5%', alignSelf: 'flex-end' }}>
                    <Image source={require('../../assets/images/setting1.png')} style={{ height: 32, width: 32, }} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}