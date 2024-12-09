import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Alert, ToastAndroid } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import axios from "axios";
import Button1 from "../../components/Button1"; // Adjust the import path as needed
import styles from "./style"; // Ensure the path to your styles is correct
import { BaseUrl2 } from "../../assets/Data";
import { colors } from "../../Theme/GlobalTheme";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {

  const phoneInput = useRef(null);
  const [phone, setPhone] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    GoogleSignin.configure();
  }, [])




  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("user info", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  }



  const handleUseOtp = async () => {
    setLoading(true);
    if (!phone) {
      setLoading(false);
      ToastAndroid.show("Please Enter a Number", ToastAndroid.SHORT);
      return;
    }
    try {
      console.log('phone1:', phone);
      const response = await axios.post(`${BaseUrl2}/user/login`, { mobileNumber: phone });
      if (response.status === 200) {
        navigation.navigate('OtpVerify', { mobileNumber: phone });
        Alert.alert('Success!', response.data.message);
        console.log('login response:', response);
      } else {
        navigation.navigate('CreateAccount', { mobileNumber: phone });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      if (error?.response?.status === 404) {
        navigation.navigate('CreateAccount', { mobileNumber: phone });
        ToastAndroid.show("user not found", ToastAndroid.SHORT);
      } else if (error.code === 'ERR_NETWORK') {
        ToastAndroid.show("Network Error", ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  };




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <Text style={styles.text}>Sign up or Sign in to access your orders, special offers, health tips and more!</Text>
      <View style={styles.phoneContainer}>
        <Text style={styles.phoneText}>PHONE NUMBER</Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phone}
          defaultCode="IN"
          layout="first"
          placeholder="Enter your mobile no"
          onChangeText={setPhone}
          onChangeFormattedText={setFormattedValue}
          textContainerStyle={styles.textContainerStyle}
          codeTextStyle={styles.codeTextStyle}
          textInputStyle={styles.textInputStyle}
          flagButtonStyle={{ display: 'none' }}
          containerStyle={styles.input}
        />
      </View>
      <View style={{ width: '100%', alignItems: 'center', marginTop: '15%' }}>
        {loading ? (
          <ActivityIndicator color={colors.blue} size={'large'} />
        ) : (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Button1 Text="USE OTP" onPress={handleUseOtp} />
            {/* <Button1 Text="USE OTP" onPress={()=>{navigation.navigate('BottomNav')}} /> */}
          </View>
        )}
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.or}>Or</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={googleLogin} style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'center', height: 46, backgroundColor: colors.white, marginTop: '5%', elevation: 5, borderRadius: 10 }}>
          <Image style={styles.icon} source={require('../../assets/images/google.png')} />
          <Text style={{ paddingLeft: '5%', fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Log In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
