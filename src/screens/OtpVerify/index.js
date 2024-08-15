import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, Keyboard, ActivityIndicator } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Button1 from "../../components/Button1";
import EnterOTP from "../../components/EnterOTP";
import axios from 'axios';
import { colors } from "../../Theme/GlobalTheme";
import styles from "./style";
import { BaseUrl2 } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OtpVerify({ navigation, route }) {
    const number = route.params.mobileNumber;
    const phoneInput = useRef(null);
    const [value, setValue] = useState(number);
    const [formattedValue, setFormattedValue] = useState(number);
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          console.error('Failed to save the data to the storage', e);
        }
      };

    const handleVerify = async () => {
        try {
            setLoading(true);
            console.log('otp:', otp);
            const response = await axios.post(`${BaseUrl2}/user/verifyLogin`, {
                mobileNumber: number,
                otp: otp,
            });
            console.log('Response:', response.data);
            storeData('token', response.data.token);
            storeData('id', response.data.id);
            if (response.status === 200) {
                navigation.navigate('BottomNav');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            Alert.alert('Verification Failed', 'Invalid OTP. Please try again.');
        }finally{
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.text}>Sign up or Sign in to access your orders, special offers, health tips, and more!</Text>
            <View style={styles.phoneContainer}>
                <Text style={styles.phoneText}>PHONE NUMBER</Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="IN"
                    layout="first"
                    placeholder="Enter your mobile no"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    textContainerStyle={styles.textContainerStyle}
                    codeTextStyle={styles.codeTextStyle}
                    textInputStyle={styles.textInputStyle}
                    flagButtonStyle={{ display: 'none' }}
                    containerStyle={styles.input}
                />
            </View>
            <Text style={styles.otpHeading}>VERIFYING NUMBER</Text>
            <View style={styles.otpTextContainer}>
                <Text style={styles.otpText}>We have sent a 6-digit OTP to <Text style={{ color: colors.black }}>{number}</Text></Text>
                <TouchableOpacity>
                    <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
            </View>
            <EnterOTP value={otp} setValue={setOtp} />
            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '0%' }}>Waiting for OTP...36 Sec</Text>
            <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
                {loading ? <ActivityIndicator size={"large"} color={colors.blue}/>:<Button1 Text="Verify" onPress={() => handleVerify(otp)} />}
            </View>
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.or}>Or</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'center', height: 46, backgroundColor: colors.white, marginTop: '5%', elevation: 5, borderRadius: 10  }}>
                    <Image style={styles.icon} source={require('../../assets/images/google.png')} />
                    <Text style={{ paddingLeft: '5%', fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey}}>Log In with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
