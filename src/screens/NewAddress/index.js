import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert, ToastAndroid, ActivityIndicator } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import CodePicker from "../../components/CodePicker";
import Button2 from "../../components/Button2";
import { BaseUrl2 } from "../../assets/Data";
import CircleRadio from "../../components/CircleRadio";
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewAddress({ navigation }) {

    const [select, setSelect] = useState(1);
    const [pinCode, setPinCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [patientFirstName, setPatientFirstName] = useState('');
    const [patientLastName, setPatientLastName] = useState('');
    const [address, setAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('91');
    const [coordinates, setCoordinates] = useState(null);
    const [acitve, setActive] = useState('');
    const [loading, setLoading] = useState(false);
    const [floor, setFloor] = useState('');

    const handleSelect = (number) => {
        setSelect(number);
    };


    const handleSaveAddress = async () => {
        const id = await AsyncStorage.getItem("id");
        setLoading(true);
        const mode = select === 1 ? 'Home' : select === 2 ? 'Office' : 'Other';
        if (!pinCode || !address) {
            console.log('address:', address);
            ToastAndroid.show("all require fileds are not fill", ToastAndroid.SHORT);
            setLoading(false);
            return;
        }
        const payload = {
            mode: mode,
            pinCode: pinCode,
            city: city,
            state: state,
            patient: `${patientFirstName} ${patientLastName}`,
            address: houseNo + floor + address,
            landmark: landmark,
            mobileNumber: mobileNumber,
            userId: id,
            for: acitve,
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
                await AsyncStorage.setItem('pincode', pinCode);
                await AsyncStorage.setItem('selectedLocation', houseNo + floor + address);
                navigation.navigate('ManageAddress');
            } else {
                Alert.alert('Error', 'Failed to save address');
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
            Alert.alert('Error', 'An error occurred while saving the address');
        }
    };

    const getLocation = () => {
        setLoading(true);
        Geolocation.getCurrentPosition(
            (position) => {
                setCoordinates(position.coords);
                reverseGeocode(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.error(error);
                alert('Failed to get location');
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        setLoading(false);
    };


    const getLocationDetails = async (lat, lng) => {
        const apiKey = 'AIzaSyBR4iLjpG8FEw-gOBmL0MmX701c6E8iT2g'; // Your API Key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&language=en&region=pk`;

        try {
            const response = await fetch(url); // Using fetch instead of axios

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Parsing the response to JSON

            if (data.status === 'OK') {
                const results = data.results;
                const addressComponents = results[0].address_components;

                let areaName = '';
                let route = '';
                let province = '';
                let country = '';

                console.log('address:', addressComponents);

                for (let component of addressComponents) {
                    if (component.types.includes('locality')) {
                        areaName = component.long_name;
                        setCity(areaName);
                        // await AsyncStorage.setItem('area', areaName);
                    }
                    if (component.types.includes('route')) {
                        route = component.long_name;
                        console.log('pincode:', route);
                        setAddress(route);
                        // await AsyncStorage.setItem('area', areaName);
                    }
                    if (component.types.includes('administrative_area_level_3')) {
                        province = component.long_name;
                        console.log('pincode:', province);
                        setLandmark(province);
                        // await AsyncStorage.setItem('area', areaName);
                    }
                    if (component.types.includes('country')) {
                        country = component.long_name;
                        console.log('pincode:', country);
                        // await AsyncStorage.setItem('area', areaName);
                    }
                }

            } else {
                console.log('No valid result found');
            }
        } catch (error) {
            console.error('Error fetching location details:', error);
        }
    }

    const reverseGeocode = async (latitude, longitude) => {
        try {
            getLocationDetails(latitude, longitude);
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
            );
            const data = await response.json();
            //   console.log('pincode:', data.address);
            setPinCode(data.address.postcode);
            // await AsyncStorage.setItem('pincode', data.address.postcode);
        } catch (error) {
            console.error('Error with reverse geocoding:', error);
            return null;
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
                    <CircleRadio text="Myself" onPress={() => setActive('myself')} active={acitve === 'myself' ? true : false} />
                    <CircleRadio text="Someone else" onPress={() => setActive('else')} active={acitve === 'else' ? true : false} />
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
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Pin Code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="765896"
                            placeholderTextColor={colors.darkGrey}
                            value={pinCode}
                            onChangeText={setPinCode}
                        />
                    </View>
                    {loading ?
                        <View style={{ width: '67%', flexDirection: 'row', alignItems: 'center', height: 48, alignSelf: 'flex-end', alignItems: "center", justifyContent: 'center' }}>
                            <ActivityIndicator size={'small'} color={colors.blue} />
                        </View>
                        : <TouchableOpacity onPress={getLocation} style={{ width: '67%', flexDirection: 'row', alignItems: 'center', height: 48, borderWidth: 1, borderRadius: 6, borderColor: colors.blue, alignSelf: 'flex-end', alignItems: "center", justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/map-marker.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, paddingLeft: '3%', width:'80%' }} numberOfLines={1} ellipsizeMode="tail">Use current location</Text>
                        </TouchableOpacity>}
                </View>
                {/* <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Patient first name</Text> */}
                <TextInput
                    style={[styles.input, { marginTop: '5%' }]}
                    placeholder="Flat / House no / Building name"
                    placeholderTextColor={colors.darkGrey}
                    value={houseNo}
                    onChangeText={setHouseNo}
                />
                {/* <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Patient last name</Text> */}
                <TextInput
                    style={[styles.input, { marginTop: '5%' }]}
                    placeholder="Floor (optional)"
                    placeholderTextColor={colors.darkGrey}
                    value={floor}
                    onChangeText={setFloor}
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
                    value={patientFirstName}
                    onChangeText={setPatientFirstName}

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
                {loading ? <ActivityIndicator color={colors.green} size={'small'} style={{ marginTop: '5%', marginBottom: '5%' }} /> : <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button2 Text="Save Address" backgroundColor={colors.green} onPress={handleSaveAddress} />
                </View>}
            </ScrollView>
        </View>
    );
}
