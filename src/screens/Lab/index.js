import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HomeHeader from "../../components/HomeHeader";
import { colors, hp, wp } from "../../Theme/GlobalTheme";
import { common, men, test, test1, women } from "../../assets/Data";
import CategoryCard from "../../components/CategoryCard";
import LabCard from "../../components/LabCard";
import HeaderItem2 from "../../components/HeaderItem2";
import ArticleHeader2 from "../../components/ArticleHeader2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button2 from "../../components/Button2";

export default function Lab({ navigation }) {

    const [select, setSelect] = useState(1);
    const [columns, setColumns] = useState(3);
    const [columns2, setColumns2] = useState(4);
    const [location, setLocation] = useState('');
    const [pincode, setPincode] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchLocation = async () => {
        try {
            setLoading(true);
            const loc = await AsyncStorage.getItem('selectedLocation');
            if (loc) {
                setLocation(loc);
                console.log('loc:', loc);
            }
            const pincode = await AsyncStorage.getItem('pincode');
            console.log('location:', area, pincode);
            setLocation(area);
            setPincode(pincode);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log('error fetching location', e);
        }
    }


    useEffect(() => {
        fetchLocation();
    }, []);

    const handleSelect = (no) => {
        setSelect(no);
    }

    return (<View style={styles.container}>
        <ArticleHeader2 onBack={() => navigation.goBack()} text="Lab Services" showSearch={true} showBottomText={true} location={location} createPress={() => navigation.navigate("Address")} image={<Image source={require('../../assets/images/cart1.png')} style={{ height: 24, width: 24 }} />} />
        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: "5%", borderColor: colors.grey }}>Order Medicines Via</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../../assets/images/rx2.png')} style={{ height: 34, width: 34 }} />
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%', paddingTop: '5%' }}>Upload Prescription</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../../assets/images/chat5.png')} style={{ height: 34, width: 34 }} />
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%' }}>Call us to order medicine</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={require('../../assets/images/call.png')} style={{ height: 34, width: 34 }} />
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%' }}>Book via Chat</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', padding: 5, marginTop: '5%' }}>
                <View style={{ height: 40, width: 40, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <Text style={{ color: colors.black, fontSize: 20 }}>🎉</Text>
                </View>
                <View style={{ width: '70%', marginLeft: '5%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>10% discount availed successfully</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Bold', color: colors.green }}>₹ 119 Saved</Text>
                </View>
                <Image source={require('../../assets/images/blackInfo2.png')} style={{ height: 20, width: 20 }} />
            </View>
            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', marginTop: '10%' }}>Find test by health concern</Text>
            <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                <FlatList
                    style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    data={test}
                    numColumns={columns}
                    key={columns}
                    renderItem={({ item }) => (
                        <LabCard onPress={() => navigation.navigate('LabOrder')} image={item.image} text={item.text} circle={true} />
                    )} />
            </View>
            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '5%' }}>Checkup based on vital organs</Text>
            <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                <FlatList
                    style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    data={test1}
                    numColumns={columns2}
                    key={columns}
                    renderItem={({ item }) => (
                        <LabCard image={item.image} text={item.text} circle={false} />
                    )} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: '5%', width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '29%' }}>
                    <Image source={require('../../assets/images/lab4.png')} style={{ height: hp(10), width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Bold', color: colors.black, paddingTop: '5%' }}>Annual Health Check up</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '3%' }}>Ideal for individuals aged 18-100 years</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '3%' }}>112 test included</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 6, fontFamily: 'Gilroy-Medium', color: colors.black }}>$107,8  <Text style={{ color: colors.green }}>20% off</Text></Text>
                        <TouchableOpacity style={{ backgroundColor: colors.green, borderRadius: 2, marginTop: '3%' }}>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-Medium', color: colors.white, padding: '5%' }}>View detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '29%' }}>
                    <Image source={require('../../assets/images/lab4.png')} style={{ height: hp(10), width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Bold', color: colors.black, paddingTop: '5%' }}>Annual Health Check up</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '3%' }}>Ideal for individuals aged 18-100 years</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '3%' }}>112 test included</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 6, fontFamily: 'Gilroy-Medium', color: colors.black }}>$107,8  <Text style={{ color: colors.green }}>20% off</Text></Text>
                        <TouchableOpacity style={{ backgroundColor: colors.green, borderRadius: 2, marginTop: '3%' }}>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-Medium', color: colors.white, padding: '5%' }}>View detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '29%' }}>
                    <Image source={require('../../assets/images/lab4.png')} style={{ height: hp(10), width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Bold', color: colors.black, paddingTop: '5%' }}>Annual Health Check up</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '3%' }}>Ideal for individuals aged 18-100 years</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '3%' }}>112 test included</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 6, fontFamily: 'Gilroy-Medium', color: colors.black }}>$107,8  <Text style={{ color: colors.green }}>20% off</Text></Text>
                        <TouchableOpacity style={{ backgroundColor: colors.green, borderRadius: 2, marginTop: '3%' }}>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-Medium', color: colors.white, padding: '5%' }}>View detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '5%' }}>Routine Health Checkups for Men</Text>
            <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '1%' }}>Best choices specifically chosen by your own trusted doctor.</Text>
            <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                <FlatList
                    style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    horizontal={true}
                    data={men}
                    renderItem={({ item }) => (
                        <View style={{ borderWidth: 1, padding: 5, marginRight: 10, borderColor: colors.grey, borderRadius: 5 }}>
                            <Image source={item.image} style={{ height: 80, width: 92, borderRadius: 3 }} />
                            <View style={{ flexDirection: 'row', paddingTop: '5%', alignItems: 'center', paddingBottom: '5%' }}>
                                <Image source={require('../../assets/images/gender.png')} style={{ height: 16, width: 16 }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: 5 }}>{item.age} years</Text>
                            </View>
                        </View>
                    )} />
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '5%' }}>Routine Health Checkups for Women</Text>
            <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '1%' }}>Best choices specifically chosen by your own trusted doctor.</Text>
            <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                <FlatList
                    style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    horizontal={true}
                    data={women}
                    renderItem={({ item }) => (
                        <View style={{ borderWidth: 1, padding: 5, marginRight: 10, borderColor: colors.grey, borderRadius: 5 }}>
                            <Image source={item.image} style={{ height: 80, width: 92, borderRadius: 3 }} />
                            <View style={{ flexDirection: 'row', paddingTop: '5%', alignItems: 'center', paddingBottom: '5%' }}>
                                <Image source={require('../../assets/images/gender.png')} style={{ height: 16, width: 16 }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: 5 }}>{item.age} years</Text>
                            </View>
                        </View>
                    )} />
            </View>
            <View style={{ width: '100%', padding: 20, backgroundColor: colors.lightgrey, marginTop: '5%' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.grey, width: wp(80) }}>India's Best Health Guardian</Text>
                <Image source={require('../../assets/images/avijo.png')} style={{ height: 35, width: 54, marginTop: 5 }} />
            </View>
        </ScrollView>
    </View>
    )
}