import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import CodePicker from "../../components/CodePicker";
import Button2 from "../../components/Button2";
import { BaseUrl2 } from "../../assets/Data";
import CircleRadio from "../../components/CircleRadio";

export default function NewAddress({ navigation }) {

    const [select, setSelect] = useState(1);
    const [pinCode, setPinCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [patientFirstName, setPatientFirstName] = useState('');
    const [patientLastName, setPatientLastName] = useState('');
    const [address, setAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('91');

    const handleSelect = (number) => {
        setSelect(number);
    };

    const handleSaveAddress = async () => {
        const mode = select === 1 ? 'Home' : select === 2 ? 'Office' : 'Other';
        const payload = {
            mode: mode,
            pinCode: pinCode,
            city: city,
            state: state,
            patient: `${patientFirstName} ${patientLastName}`,
            address: address,
            landmark: landmark,
            mobileNumber: mobileNumber
        };

        try {
            const response = await fetch(`${BaseUrl2}/user/DeliveryAddress/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                Alert.alert('Success', 'Address saved successfully');
                navigation.navigate('ManageAddress');
            } else {
                Alert.alert('Error', 'Failed to save address');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'An error occurred while saving the address');
        }
    };

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Enter complete address" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', width: '90%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Who you are ordering for?</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginTop: '5%' }}>
                    <CircleRadio text="Myself" />
                    <CircleRadio text="Someone else" />
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.grey, width: '90%', marginTop: '5%' }}>Save address as</Text>
                <View style={{ flexDirection: 'row', marginRight: 15, marginTop: '7%' }}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={select === 1 ? styles.optionContainer2 : styles.optionContainer}>
                        <Image source={require('../../assets/images/homeAddress.png')} style={{ height: 24, width: 24 }} />
                        <Text style={select === 1 ? styles.optionText2 : styles.optionText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={select === 2 ? styles.optionContainer2 : styles.optionContainer}>
                        <Image source={require('../../assets/images/office.png')} style={{ height: 24, width: 24 }} />
                        <Text style={select === 2 ? styles.optionText2 : styles.optionText}>Office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={select === 3 ? styles.optionContainer2 : styles.optionContainer}>
                        <Image source={require('../../assets/images/other.png')} style={{ height: 24, width: 24 }} />
                        <Text style={select === 3 ? styles.optionText2 : styles.optionText}>Other</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 21, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Address Details</Text>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                    <View style={{ width: '32%', marginTop: '2%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Pin Code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="765896"
                            placeholderTextColor={colors.darkGrey}
                            value={pinCode}
                            onChangeText={setPinCode}
                        />
                    </View>
                    <TouchableOpacity style={{ width: '72%', flexDirection: 'row', alignItems: 'center', height: 48, borderWidth: 1, borderRadius: 6, borderColor: colors.blue, alignSelf: 'flex-end', alignItems: "center", justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/map-marker.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '3%' }}>Use current location</Text>
                    </TouchableOpacity>
                </View>
                {/* <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Patient first name</Text> */}
                <TextInput
                    style={[styles.input, { marginTop: '5%' }]}
                    placeholder="Flat / House no / Building name"
                    placeholderTextColor={colors.darkGrey}
                    value={patientFirstName}
                    onChangeText={setPatientFirstName}
                />
                {/* <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Patient last name</Text> */}
                <TextInput
                    style={[styles.input, { marginTop: '5%' }]}
                    placeholder="Floor (optional)"
                    placeholderTextColor={colors.darkGrey}
                    value={patientLastName}
                    onChangeText={setPatientLastName}
                />
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Area/Sector/Locality</Text>
                <TextInput
                    style={[styles.input, { marginTop: '3%' }]}
                    placeholder="Mahalaxmi Nagar , Indore"
                    placeholderTextColor={colors.darkGrey}
                    value={address}
                    onChangeText={setAddress}
                />
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Landmark</Text>
                <TextInput
                    style={[styles.input, { marginTop: "3%" }]}
                    placeholder="Nearby landmark ( optional)"
                    placeholderTextColor={colors.darkGrey}
                    value={landmark}
                    onChangeText={setLandmark}
                />
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Your Name</Text>
                <TextInput
                    style={[styles.input, { marginTop: "3%" }]}
                    placeholder="Mayank sharma"
                    placeholderTextColor={colors.darkGrey}
                    value={landmark}
                    onChangeText={setLandmark}

                />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Mobile Number</Text>
                <View style={styles.phoneContainer}>
                    <CodePicker onValueChange={setCountryCode} defaultValue={91} />
                    <TextInput
                        style={styles.phoneInput}
                        placeholder="Mobile Number"
                        placeholderTextColor={colors.darkGrey}
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button2 Text="Save Address" backgroundColor={colors.green} onPress={handleSaveAddress} />
                </View>
            </ScrollView>
        </View>
    );
}
