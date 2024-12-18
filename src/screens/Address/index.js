import React, { useEffect, useRef, useState } from "react";
import { Modal, Text } from "react-native";
import { View, Image } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { ScrollView } from "react-native";
import Button2 from "../../components/Button2";
import { TouchableOpacity } from "react-native";
import { BaseUrl2 } from "../../assets/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Address({ navigation }) {

    const [myAddres, setMyAddress] = useState([]);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [selectLoc, setSelectLoc] = useState('');
    const [postCode, setPostCode] = useState('');
    const inputRef = useRef(null);

    const fetchMyAddress = async () => {

        const id = await AsyncStorage.getItem("id");
        try {
            const response = await fetch(`${BaseUrl2}/user/delivery-addresses/${id}`);
            const json = await response.json();
            console.log("json:", json.addresses);
            setMyAddress(json.addresses);
        } catch (e) {
            console.log('error fetching addresses...', e);
        }
    }

    const reverseGeocode = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
            );
            const data = await response.json();
            setPostCode(data.address.postcode);
            // return data.address;
        } catch (error) {
            console.error('Error with reverse geocoding:', error);
            return null;
        }
    };

    const handlePinCode = async (code, address) => {
        await AsyncStorage.setItem('pincode', code);
        // await AsyncStorage.removeItem('selectedLocation');
        // await AsyncStorage.removeItem('pincode');
        await AsyncStorage.setItem('selectedLocation', address)
            ;
        console.log('code:', code, address,);
    }

    const handlePinCode2 = async (code) => {
        await AsyncStorage.setItem('pincode', code);
        await AsyncStorage.setItem('selectedLocation', selectLoc);
    }

    const openModal = () => {
        setModalVisible1(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 200);
    };

    const handleLogout = async () => {
        await AsyncStorage.clear();
        navigation.replace('Login');
    }

    useEffect(() => {
        fetchMyAddress();
    }, [])


    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Delivery Address" image2={<Image source={require('../../assets/images/whiteAdd.png')} style={{ height: 32, width: 32 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => openModal()} style={{ height: 45, width: '90%', borderRadius: 4, borderColor: colors.lightgrey, marginTop: '5%', justifyContent: 'center', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '5%' }} numberOfLines={1} ellipsizeMode="tail">{selectLoc ? postCode + ', ' + selectLoc : 'Search Location'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('NewAddress')} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ justifyContent: 'center', backgroundColor: colors.white, height: 32, width: 32, borderRadius: 100 }}>
                            <Text style={{ fontSize: 32, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, textAlign: 'center', }}>+</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Add New Address</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 24, width: 24 }} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '10%' }}>Your saved addresses</Text>
                {/* <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                        <Image source={require('../../assets/images/location4.png')} style={{ height: 64, width: 64 }} />
                        <View style={{ alignSelf: 'flex-start', width: '80%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%', alignSelf: 'flex-start' }}>Others <Text style={{ fontSize: 12, color: colors.green, fontFamily: 'Gilroy-Medium' }}>You are here</Text></Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.grey, marginLeft: '5%', alignSelf: 'flex-start' }}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '22%', justifyContent: 'space-between', marginLeft: '5%', marginTop: '3%' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/horizontalDots2.png')} style={{ height: 24, width: 24 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/share3.png')} style={{ height: 24, width: 24.93566 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.lightgrey, borderRadius: 8, padding: '5%', marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/images/share3.png')} style={{ height: 32, width: 32.9366 }} />
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '5%', width: '70%' }}>Now share your addresses with friends and family</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', alignSelf: 'flex-start' }}>
                            <Image source={require('../../assets/images/redCross.png')} style={{ height: 24, width: 24 }} />
                        </View>
                    </View>
                </View> */}
                {myAddres?.map((item) => (
                    <TouchableOpacity onPress={() => {
                        handlePinCode(item.pinCode, `${item.address}, ${item.landmark}, ${item.city}`);
                        navigation.navigate('BottomNav');
                    }} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                        {item.mode === "Home" ? <Image source={require('../../assets/images/home6.png')} style={{ height: 64, width: 64 }} /> :
                            <Image source={require('../../assets/images/location4.png')} style={{ height: 64, width: 64 }} />}
                        <View style={{ alignSelf: 'flex-start', width: '80%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%', alignSelf: 'flex-start' }}>{item.mode} <Text style={{ fontSize: 12, color: colors.green, fontFamily: 'Gilroy-Medium' }}>{item.mode}</Text></Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.grey, marginLeft: '5%', alignSelf: 'flex-start' }}>{item.address}, {item.landmark}, {item.city}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '22%', justifyContent: 'space-between', marginLeft: '5%', marginTop: '3%' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/horizontalDots2.png')} style={{ height: 24, width: 24 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/share3.png')} style={{ height: 24, width: 24.93566 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
                // animationType="slide"
                // transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
                }}>
                <View style={{ width: '100%', alignItems: 'center', flex: 1, width: '100%', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                        <GooglePlacesAutocomplete
                            ref={inputRef}
                            placeholder="Search for a place"
                            fetchDetails={true} // Fetch detailed place information
                            onPress={(data, details = null) => {
                                console.log('Place Data:', data);
                                setSelectLoc(data.description);
                                reverseGeocode(details.geometry.location.lat, details.geometry.location.lng);
                                console.log('Place Details:', details.geometry.location);
                            }}
                            query={{
                                key: 'AIzaSyBR4iLjpG8FEw-gOBmL0MmX701c6E8iT2g',
                                language: 'en',
                            }}

                            styles={{
                                container: {
                                    flex: 0,
                                    width: '90%',
                                    backgroundColor: colors.white
                                },
                                textInput: {
                                    backgroundColor: colors.white,
                                    height: 44,
                                    borderRadius: 5,
                                    padding: 10,
                                    marginVertical: 5,
                                    width: '100%',
                                    color: 'black',
                                    fontSize: 16,
                                },
                                description: {
                                    color: 'black', // Change the dropdown text color
                                    fontSize: 16,   // Optional: Adjust text size
                                },

                                row: {
                                    backgroundColor: colors.white,
                                    padding: 13,
                                    height: 44,
                                    flexDirection: 'row',
                                }
                            }}
                            textInputProps={{
                                placeholderTextColor: 'gray',
                            }}
                        />
                        <TouchableOpacity onPress={() => setModalVisible1(false)} style={{ backgroundColor: colors.lightgrey, padding: 5, borderRadius: 100, marginTop: '5%' }}>
                            <Image source={require('../../assets/images/cross2.png')} style={{ height: 7, width: 7 }} />
                        </TouchableOpacity>
                    </View>
                    <Button2 backgroundColor={colors.green} Text="Confirm Address" onPress={() => {
                        if (selectLoc && postCode) {
                            handlePinCode2(postCode);
                            navigation.navigate("BottomNav");
                        }
                    }} />
                </View>
            </Modal>
        </View>
    )
}