import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
import styles from "./style";
import LoginInput from "../../components/LoginInput";
import EnterOTP from "../../components/EnterOTP";
import Button1 from "../../components/Button1";
import { colors } from "../../Theme/GlobalTheme";
import axios from "axios";
import { BaseUrl2 } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateAccount({ navigation, route }) {

  const number = route?.params?.mobileNumber;


  const [seconds, setSeconds] = useState(60);
  const [phone, setPhone] = useState(number || "");
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [otpValue, setOtpValue] = useState("");

  useEffect(() => {
    if (phone) {
      sendOtp(phone);
    }
    console.log('phone:', phone);
  }, [phone,]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);


  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.error('Failed to save the data to the storage', e);
    }
  };

  const sendOtp = async (ph) => {
    try {
      const response = await axios.post(`${BaseUrl2}/user/register`, { mobileNumber: ph });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
    }
  };


  const handleVerifyOtp = async () => {
    try {
      // console.log(
      //   'fullName',fullName,
      //   email,
      //   dateOfBirth,
      //   'mobileNumber', phone,
      //   'otp', otpValue);
      setLoading(true);
      const response = await axios.post(`${BaseUrl2}/user/verify`, {
        fullName,
        email,
        dateOfBirth,
        mobileNumber: phone,
        otp: otpValue,
      });
      console.log("Verification Response:", response);
      await storeData('token', response.data.token);
      Alert.alert("Success", "OTP Verified Successfully");
      navigation.replace("Login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error verifying OTP:", error);
      Alert.alert("Error", "OTP Verification Failed");
    }
  };


  const resetCountdown = () => {
    sendOtp(phone);
    setSeconds(60);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <LoginInput text="FULL NAME" placeholder="Enter your Full Name" value={fullName} onChangeText={setFullName} />
      <LoginInput text="EMAIL ID" placeholder="Enter your Email Id" value={email} onChangeText={setEmail} />
      <LoginInput text="DATE OF BIRTH" placeholder="YYYY-MM-DD" value={dateOfBirth} onChangeText={setDob} />
      <Text style={styles.otpHeading}>VERIFYING NUMBER</Text>
      <View style={styles.otpTextContainer}>
        <Text style={styles.otpText}>We have sent 6 digit OTP on <Text style={{ color: colors.black }}>{phone}</Text></Text>
        {seconds === 0 && <TouchableOpacity onPress={resetCountdown}>
          <Text style={styles.change}>Change</Text>
        </TouchableOpacity>}
      </View>
      <EnterOTP value={otpValue} setValue={setOtpValue} />
      <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '2%' }}>
        Waiting for OTP...{seconds} Sec
      </Text>
      <View style={{ width: '100%', alignItems: 'center', marginTop: '10%' }}>
        {loading ? <ActivityIndicator size='large' color={colors.blue} /> : <Button1 Text="VERIFY" onPress={handleVerifyOtp} />}
      </View>
    </View>
  );
}
