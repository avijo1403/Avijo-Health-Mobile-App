import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, wp } from "../../Theme/GlobalTheme";
import { data2, shopCategory } from "../../assets/Data";

export default function OnlineMedicine({navigation}) {

    const [columns, setColumns] = useState(3);
    const [columns2, setColumns2] = useState(2);

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Online Medicine Order" showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', borderBottomWidth: 1, paddingBottom: "2%", marginTop: "5%", borderColor: colors.grey }}>Order Medicine Online</Text>
                <View style={{ width: '90%', backgroundColor: colors.aqua, marginTop: '5%', padding: '2%' }}>
                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.lightgrey, paddingBottom: "3%" }}>
                        <Image source={require('../../assets/images/med1.png')} style={{ height: 100, width: 100 }} />
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Upload prescription</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '100%', marginTop: '3%' }}>Just upload the photo of your prescriptions and get medicines delivered to you.</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('AttachPrescription')} style={[styles.buttonSubContainer, { backgroundColor: colors.lightGreen }]}>
                                <Text style={styles.buttonText}>Upload now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%', backgroundColor: colors.aqua, marginTop: "2%", flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/med2.png')} style={{ height: 44, width: 44 }} />
                            <View style={{ width: '70%', paddingLeft: '2%' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>No Prescription? No Problem</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '100%', marginTop: '3%' }}>Get a free doctor consultation.</Text>
                                <TouchableOpacity style={[styles.buttonSubContainer2, { backgroundColor: colors.lightGreen, marginTop: '5%' }]}>
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Consult Doctor</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/med3.png')} style={{ height: 44, width: 44 }} />
                            <View style={{ width: '70%', paddingLeft: '2%' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Call to Order</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '100%', marginTop: '3%' }}>Just a call away to order medicine at your doorstep.</Text>
                                <TouchableOpacity style={[styles.buttonSubContainer2, { backgroundColor: colors.lightGreen, marginTop: '5%' }]}>
                                    <Image source={require('../../assets/images/phone3.png')} style={{ height: 12, width: 12 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}> Call to Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', borderBottomWidth: 1, paddingBottom: "2%", marginTop: "5%", borderColor: colors.grey }}>Shop by Categories</Text>
                <View style={{ width: "90%", alignItems: 'center', marginTop: "5%" }}>
                    <FlatList
                        style={{ width: "100%" }}
                        contentContainerStyle={{ alignItems: 'center', }}
                        numColumns={columns}
                        data={shopCategory}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('ProductList')} style={{ width: "31%", alignItems: 'center', padding: '3%', backgroundColor: colors.aqua, borderRadius: 12, borderColor: colors.darkGrey, borderWidth: 1, marginTop: '3%', marginRight: '2%', paddingBottom: '5%' }}>
                                <Image source={item.image} style={{ height: 47, width: 72 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', width: '100%', paddingTop: "5%" }}>{item.text}</Text>
                            </TouchableOpacity>
                        )} />
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingBottom: "2%", marginTop: "5%", }}>Best Selling Item</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', color: colors.grey }}>Exclusive Online Consultations with Verified Specialists</Text>
                <View style={{ width: "90%", alignItems: 'center', marginTop: "2%" }}>
                <FlatList
                        style={{ width: "100%" }}
                        contentContainerStyle={{ alignItems: 'center', }}
                        numColumns={columns2}
                        data={data2}
                        renderItem={({ item }) => (
                    <View style={{ width: "48%", alignItems: 'center', padding: '3%', borderRadius: 12, borderColor: colors.grey, borderWidth: 1, marginTop: '3%', marginRight: '2%', paddingBottom: '5%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Alp tablet 0.5mg</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '100%', paddingTop: "3%" }}>Known as Blood CP test</Text>
                        <View style={{ flexDirection: 'row', marginTop: '5%', alignItems: 'center', width: '100%' }}>
                            <Image source={require('../../assets/images/home5.png')} style={{ height: 16, width: 16 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.lightGreen }}> Free Home Delivery</Text>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '5%', width: "100%" }}>800 - 1,050</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('MyCart')} style={[styles.buttonSubContainer3, { backgroundColor: colors.white, marginTop: '5%', borderWidth: 1, borderColor: colors.lightGreen }]}>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.lightGreen }}>View Detail</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonSubContainer3, { backgroundColor: colors.lightGreen, marginTop: '5%' }]}>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                        )}/>
                </View>
                <View style={{ width: '100%', padding: 20, backgroundColor: colors.lightgrey, marginTop: '5%' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.grey, width: wp(80) }}>India's Best Health Guardian</Text>
                    <Image source={require('../../assets/images/avijo.png')} style={{ height: 35, width: 54, marginTop: 5 }} />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', padding: 15, alignItems: 'center', borderTopWidth: 1, borderColor: colors.lightgrey, paddingTop: '5%' }}>
                    <Image source={require('../../assets/images/delivery.png')} style={{ width: 74, height: 72 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Get Free Delivery</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Offer valid for a limited time only!</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}