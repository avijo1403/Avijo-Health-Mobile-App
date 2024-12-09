import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Modal, Pressable, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, wp } from "../../Theme/GlobalTheme";
import { conditions, data2, getAreaName, hilight, product, productCategory, shopCategory } from "../../assets/Data";
import SearchItem2 from "../../components/SearchItem2";
import ArticleHeader2 from "../../components/ArticleHeader2";
import Geolocation from 'react-native-geolocation-service';
import GetLocation from "../../components/GetLocation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setArea } from "agora-rtc-sdk-ng/esm";
import Button2 from "../../components/Button2";

export const Context = React.createContext();

export default function OnlineMedicine({ navigation }) {

    const [columns, setColumns] = useState(4);
    const [columns2, setColumns2] = useState(2);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [pincode, setPincode] = useState('');

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const fetchLocation = async () => {
        try {
            setLoading(true);
            const loc = await AsyncStorage.getItem('selectedLocation');
            console.log('loc:', loc);
            if (loc) {
                setLocation(loc);
            }
            const pincode = await AsyncStorage.getItem('pincode');
            console.log('location:',
                pincode);
            setPincode(pincode);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log('error fetching location', e);
        }
    }

    useEffect(() => {
        fetchLocation();
        startLoading();
    }, []);

    return (<>
        {loading ?
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color={colors.blue} size={'large'} />
            </View>
            : <Context.Provider value={[location, setLocation]}>
                <View style={styles.container}>
                    <ArticleHeader2 text="Medicines & Products" showSearch={true} showBottomText={true} location={location} createPress={() => navigation.navigate("Address")} image={<Image source={require('../../assets/images/cart1.png')} style={{ height: 24, width: 24 }} />} />
                    {loading ? <ActivityIndicator size={'large'} color={colors.blue} style={{ flex: 1, width: '100%', alignSelf: 'center' }} /> : <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: "5%", borderColor: colors.grey }}>Order Medicines Via</Text>
                        <View style={{ width: '90%', backgroundColor: colors.white, marginTop: '0%', padding: '2%' }}>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '0%' }}>
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                <Image source={require('../../assets/images/rx2.png')} style={{ height: 34, width: 34 }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%', paddingTop: '5%' }}>Upload Prescription</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                <Image source={require('../../assets/images/chat5.png')} style={{ height: 34, width: 34 }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%' }}>Call us to order medicine</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                <Image source={require('../../assets/images/call.png')} style={{ height: 34, width: 34 }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%' }}>Book via Chat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', }}>Personal Care</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('AllCategories') }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <FlatList
                                style={{ width: '100%' }}
                                contentContainerStyle={{ alignItems: 'center' }}
                                data={productCategory}
                                numColumns={columns}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductList')} style={{ flexDirection: 'column', width: "23%", alignItems: 'center', borderRadius: 3, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '2%' }}>
                                        <View style={{ backgroundColor: colors.lightgrey, width: '100%', height: 60 }}>
                                            <Image source={item.image} style={{ height: 59, width: 67, borderRadius: 3 }} />
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%", textAlign: 'center' }}>{item.text}</Text>
                                    </TouchableOpacity>)} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', }}>Health Essentials</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('AllCategories') }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <FlatList
                                style={{ width: '100%' }}
                                contentContainerStyle={{ alignItems: 'center' }}
                                data={productCategory}
                                numColumns={columns}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={{ flexDirection: 'column', width: "23%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '2%' }}>
                                        <View style={{ backgroundColor: colors.lightgrey, width: '100%', height: 60 }}>
                                            <Image source={item.image} style={{ height: 59, width: 67, borderRadius: 3 }} />
                                        </View>
                                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Bold', color: colors.green, width: '100%', paddingTop: "5%", textAlign: 'center', fontStyle: 'italic' }}>UP TO 20 % OFF </Text>
                                    </TouchableOpacity>)} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', }}>Shop by Health Conditions</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <FlatList
                                style={{ width: '100%' }}
                                contentContainerStyle={{ alignItems: 'center' }}
                                data={productCategory}
                                numColumns={columns}
                                renderItem={({ item }) => (
                                    <View style={{ flexDirection: 'column', width: "23%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '1%' }}>
                                        <View style={{ backgroundColor: colors.lightgrey, width: '100%', height: 60 }}>
                                            <Image source={item.image} style={{ height: 59, width: 67, borderRadius: 3 }} />
                                        </View>
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%", textAlign: 'center' }}>{item.text}</Text>
                                    </View>)} />
                        </View>
                    </ScrollView>}
                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: colors.blackTrasparent }}>
                            <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.white, backgroundColor: colors.white }}>
                                <Text style={{ padding: '5%', fontSize: 22, color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>Uploads</Text>
                                <View style={{ height: 1, width: '90%', backgroundColor: colors.lightgrey, alignSelf: 'center' }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%', alignSelf: 'center', marginBottom: '2%' }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Chat', { name: "Dr. Jii (Ai health assistance)" }) }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/images/rx.png')} style={{ height: 36, width: 36 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Prescription</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Chat', { name: "Dr. Jii (Ai health assistance)" }) }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/images/rx.png')} style={{ height: 36, width: 36 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '70%', textAlign: 'center' }}>Past Prescription</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Chat', { name: "Dr. Jii (Ai health assistance)" }) }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/images/report.png')} style={{ height: 36, width: 36 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, }}>Reports</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '1%', alignSelf: 'center', marginBottom: '5%' }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Chat', { name: "Dr. Jii (Ai health assistance)" }) }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/images/gallery.png')} style={{ height: 36, width: 36 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Gallery</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Chat', { name: "Dr. Jii (Ai health assistance)" }) }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '70%', textAlign: 'center' }}>Camera</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Chat', { name: "Dr. Jii (Ai health assistance)" }) }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, }}>Documents</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Pressable>
                    </Modal>
                </View>
            </Context.Provider>}
    </>
    )
}