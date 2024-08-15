import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, hp, wp } from "../../Theme/GlobalTheme";
import Button2 from "../../components/Button2";
import Collapsible4 from "../../components/Collapsible4";
import Collapsible5 from "../../components/Collapsible5";

export default function MyCart() {

    const [select, setSelect] = useState(1);

    const handleSelect = (no) => {
        setSelect(no);
    }

    const Medicine = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "5%" }}>
                    <Image source={require('../../assets/images/search1.png')} style={{ height: 24, width: 24 }} />
                    <Text style={{ fontSize: 15, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: "2%" }}>Search for Medicine/Health products</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: "2%", width: '90%' }}>1 Item in your cart</Text>
                <View style={{ flexDirection: 'row', width: "90%", alignItems: 'center', marginTop: '5%', marginBottom: "5%" }}>
                    <Image source={require('../../assets/images/skinCare4.png')} style={{ height: 90, width: 90 }} />
                    <View style={{ paddingLeft: '5%', width: "70%" }}>
                        <Text style={{ fontSize: 12, color: colors.black, fontFamily: "Gilroy-SemiBold" }}>Skin shine Spf 30 sunscreen Location 100ml</Text>
                        <Text style={{ fontSize: 10, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>Cadila Pharmaceuticals Ltd</Text>
                        <Text style={{ fontSize: 10, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>Pack of 100 ML</Text>
                        <Text style={{ fontSize: 12, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>$178.02 <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>  MRP $197.80</Text></Text>
                    </View>
                </View>
                <Button2 backgroundColor={colors.lightGreen} Text="Add more Medicines" image={<Image source={require('../../assets/images/plus2.png')} style={{ height: 24, width: 24, marginRight: '5%' }} />} />
                <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/bin2.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <View style={{ width: "30%", marginLeft: "3%" }}>
                        <Collapsible5 text="1 item" />
                    </View>
                </View>
                <Text style={{ width: '90%', fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Upload Prescription</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                    <View style={{ width: '40%', alignItems: 'center', padding: '5%' }}>
                        <Image source={require('../../assets/images/add4.png')} style={{ height: 19, width: 19 }} />
                        <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.lightGreen, marginTop: '5%' }}>Add more Prescription</Text>
                    </View>
                    <View style={{ width: '45%', alignItems: 'center', padding: '5%' }}>
                        <TouchableOpacity style={{ height: 24, width: 24, zIndex: 2, marginTop: hp(3), position: 'absolute', alignSelf: 'flex-end', marginRight: '25%' }}>
                            <Image source={require('../../assets/images/cross.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/prescription.png')} style={{ height: 100, width: '100%', marginTop: '5%', borderRadius: 5 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: "90%", alignItems: 'center', justifyContent: "space-between", marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/coupon2.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', color: colors.lightGreen }}>Apply coupon</Text>
                    </View>
                    <Image source={require('../../assets/images/greenRight.png')} style={{ height: 20, width: 20 }} />
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Bill details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.darkGrey, marginTop: '5%' }}>MRP</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '5%' }}> $197.80</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>Discount</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>  $19.78</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>Taxes and Charges</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>  $11.00</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>Delivery charges</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}><Text style={{ color: colors.grey, textDecorationLine: 'line-through' }}>$149.00</Text>  $39.00</Text>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.lightGreen, marginTop: '3%', width: "90%" }}>Add items worth $221.99 more to save $10 on delivery</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>Estimated Payable</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.black, marginTop: '3%' }}>$228.02</Text>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.darkGrey, marginTop: '3%', width: "90%", textAlign:'right' }}>Inclusive of all taxes</Text>
                <View style={{width:'100%', alignItems:'center'}}>
                <Button2 backgroundColor={colors.lightGreen} Text="Add Delivery Detail"/>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="My Cart" showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '5%', marginTop: '5%' }} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { backgroundColor: select === 1 ? colors.lightGreen : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 1 ? colors.white : colors.lightGreen }}>Online Consultation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { backgroundColor: select === 2 ? colors.lightGreen : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 2 ? colors.white : colors.lightGreen }}>Find Doctor near You</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={[styles.tabContainer, { backgroundColor: select === 3 ? colors.lightGreen : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 3 ? colors.white : colors.lightGreen }}>Medicine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(4)} style={[styles.tabContainer, { backgroundColor: select === 4 ? colors.lightGreen : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 4 ? colors.white : colors.lightGreen, }}>Lab Test</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Medicine />
            </ScrollView>
        </View>
    )
}