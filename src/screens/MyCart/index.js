import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, hp, wp } from "../../Theme/GlobalTheme";
import Button2 from "../../components/Button2";
import Collapsible4 from "../../components/Collapsible4";
import Collapsible5 from "../../components/Collapsible5";
import { product } from "../../assets/Data";

export default function MyCart({ navigation }) {

    const [select, setSelect] = useState(1);
    const [qty, setQty] = useState(1);
    const [columns, setColumns] = useState(3);

    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }

    const increment = () => {
        setQty(qty + 1);
    }

    const handleSelect = (no) => {
        setSelect(no);
    }

    const Medicine = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, padding: '3%', borderWidth: 1, borderColor: colors.grey, marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ padding: 5, backgroundColor: colors.grey, height: 40, width: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/clock.png')} style={{ height: 24, width: 24, backgroundColor: colors.white, borderRadius: 100 }} />
                        </View>
                        <View style={{ height: '100%', width: '80%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Delivery in 8 minutes</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '5%' }}>Shipment of 2 items</Text>
                        </View>
                    </View>
                    {/* <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                    </View> */}
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/images/product4.png')} style={{ height: 80, width: '30%', borderRadius: 3 }} />
                        <View style={{ height: '100%', alignSelf: 'flex-start', width: '50%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Clipcal 500 Tablet 15</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginLeft: '5%' }}>30mg </Text>
                        </View>
                    </View>
                    <View style={{ width: '20%', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', backgroundColor: colors.green, borderRadius: 5, marginBottom: '10%', height: 25 }}>
                            <TouchableOpacity onPress={decrement} style={{ alignItems: 'center', width: '35%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white, marginLeft: '5%', paddingLeft: '5%' }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.white, marginLeft: '5%' }}>{qty}</Text>
                            <TouchableOpacity onPress={increment} style={{ alignItems: 'center', width: '35%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white, marginLeft: '5%', paddingRight: '5%' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>$24.56 </Text>
                    </View>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Consumers also bought</Text>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={product}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', width: "32%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey }}>
                                <Image source={item} style={{ height: 75, width: '100%', borderRadius: 4 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Dry Apricot </Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "3%" }}>$40.56 </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '5%' }}>
                                    <Text style={{ fontSize: 6, fontFamily: 'Gilroy-Medium', color: colors.green, backgroundColor: colors.lightgrey, padding: 5, textAlign: 'center', borderRadius: 30 }}>200 ml</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "50%", marginTop: '5%' }}>
                                        <Image source={require('../../assets/images/clock.png')} style={{ height: 16, width: 16 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>15 mins</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} style={[styles.buttonSubContainer, { backgroundColor: '#2C851121' }]}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>)} />
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Bill Details</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "90%", marginTop: '5%' }}>Bill details</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '5%' }}>MRP</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '5%' }}> $197.80</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.green, marginTop: '3%' }}>Product Discount</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.green, marginTop: '3%' }}>  $19.78</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '3%' }}>Taxes and Charges</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '3%' }}>  $11.00</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '3%' }}>Delivery charges</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '3%' }}><Text style={{ color: colors.grey, textDecorationLine: 'line-through' }}>$149.00</Text>  $39.00</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '3%' }}>Bill total</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '3%' }}>$228.02</Text>
                </View>
                <View style={{ height: 1, width: '100%', backgroundColor: colors.lightgrey, marginTop: '5%', marginBottom: '5%' }} />
                <View style={{ width: '90%', alignItems: 'center', backgroundColor: colors.background, borderRadius: 5, marginTop: '5%', padding: 5, marginBottom: '5%', paddingBottom: 10 }}>
                    <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', color: colors.green, marginTop: '3%', width: "60%", textAlign: 'left' }}>Inclusive of all taxes</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', color: colors.green, marginTop: '3%', width: "20%", textAlign: 'left' }}>$32.00</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.green, marginTop: '3%', width: "100%", textAlign: 'left' }}>Includes $30 savings through free delivery</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Delivery Instructions</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                    <View style={{ borderWidth: 1, borderColor: colors.grey, borderRadius: 5, width: '32%', alignItems: 'center', height: 100, justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/micGrey.png')} style={{ height: 32, width: 32 }} />
                        <Text style={{ color: colors.green, fontSize: 14, fontFamily: 'Gilroy-SemiBold', width: 60, textAlign: 'center' }}>Press here an..</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.grey, borderRadius: 5, width: '32%', alignItems: 'center', height: 100, justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/cutPhone.png')} style={{ height: 32, width: 32 }} />
                        <Text style={{ color: colors.green, fontSize: 14, fontFamily: 'Gilroy-SemiBold', width: 60, textAlign: 'center' }}>Avoid calling</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: colors.grey, borderRadius: 5, width: '32%', alignItems: 'center', height: 100, justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/cutRing.png')} style={{ height: 32, width: 32 }} />
                        <Text style={{ color: colors.green, fontSize: 14, fontFamily: 'Gilroy-SemiBold', width: 60, textAlign: 'center' }}>Don’t ring the bell</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', backgroundColor: colors.white, borderRadius: 5, marginTop: '5%', padding: 5, marginBottom: '5%', paddingBottom: 10, borderWidth: 1, borderColor: colors.lightgrey }}>
                    <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', color: colors.black, marginTop: '3%', width: "70%", textAlign: 'left' }}>Ordering for someone else?</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', color: colors.green, marginTop: '3%', width: "30%", textAlign: 'left' }}>Add Details</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', backgroundColor: colors.white, borderRadius: 5, marginTop: '2%', padding: 5, marginBottom: '5%', paddingBottom: 10, borderWidth: 1, borderColor: colors.lightgrey }}>
                    <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', color: colors.black, marginTop: '3%', width: "70%", textAlign: 'left' }}>Cancellation Policy</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', color: colors.darkGrey, marginTop: '3%', width: "100%", textAlign: 'left' }}>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided. If applicable.</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="My Cart" showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View horizontal={true} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '100%', justifyContent: 'space-between', borderBottomWidth: 2, borderColor: colors.lightgrey }}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { backgroundColor: colors.white, borderBottomWidth: select === 1 ? 2 : 0, marginLeft: '5%' }]}>
                        <Text style={{
                            fontFamily: 'Gilroy-SemiBold', fontSize: 14, color: colors.black
                            , textAlign: 'center'
                        }}>Online Consultation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { backgroundColor: colors.white, borderBottomWidth: select === 2 ? 2 : 0 }]}>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 14, color: colors.black, textAlign: 'center' }}>Find Doctor near You</Text>
                    </TouchableOpacity>
                </View>
                <Medicine />
            </ScrollView>
        </View>
    )
}