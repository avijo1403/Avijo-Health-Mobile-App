import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import Button2 from "../../components/Button2";
import HeaderItem2 from "../../components/HeaderItem2";
import { TouchableOpacity } from "react-native";

export default function OrderDetail({ navigation }) {

    const [qty, setQty] = useState(1);

    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }

    const increment = () => {
        setQty(qty + 1);
    }

    return (
        <View style={styles.container}>
            <HeaderItem2 onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Order Details</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '90%', marginTop: '2%' }}>Arrived at 9:00 pm</Text>
                <TouchableOpacity style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '2%', paddingBottom: '3%', }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.green }}>Download Invoice</Text>
                    <Image source={require('../../assets/images/download2.png')} style={{ height: 16, width: 16, marginLeft: '2%' }} />
                </TouchableOpacity>
                <View style={{ width: '100%', height: 1, backgroundColor: colors.lightgrey }} />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>2 items in this order</Text>
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
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/images/start1.png')} style={{ height: 32, width: 32, borderRadius: 3 }} />
                        <View style={{ height: '100%', alignSelf: 'flex-start', width: '60%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginLeft: '5%' }}>How were your ordered items?</Text>
                        </View>
                    </View>
                    <View style={{ width: '20%', alignItems: 'flex-end' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: colors.green, borderRadius: 5, height: 25 }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.white, marginLeft: '5%' }}>Rate now</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', borderBottomWidth: 1, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '5%' }}>Attached Prescription</Text>
                    <Image source={require('../../assets/images/prescription.png')} style={{ height: 50, width: 56, alignSelf: 'flex-start', margin: '5%', borderRadius: 5 }} />
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '5%', paddingBottom: '3%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Order Details</Text>
                </View>
                <View style={{ width: '85%', paddingBottom: '3%', marginTop: '3%', padding: '3%', borderWidth: 1, borderColor: colors.lightgrey }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5 }}>
                        <Text style={{ fontSize: 12, color: colors.grey, fontFamily: 'Gilroy-SemiBold', width: '30%' }}>Order Id :</Text>
                        <Text style={{ fontSize: 12, color: colors.black, marginLeft: '2%', fontFamily: 'Gilroy-SemiBold', width: '30%' }}>ORD87635566</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/copy2.png')} style={{ height: 12, width: 12, marginLeft: '2%' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5 }}>
                        <Text style={{ fontSize: 12, color: colors.grey, fontFamily: 'Gilroy-SemiBold', width: '30%' }}>Payment :</Text>
                        <Text style={{ fontSize: 12, color: colors.black, marginLeft: '2%', fontFamily: 'Gilroy-SemiBold', width: '70%' }}>Pay on Delivery</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5 }}>
                        <Text style={{ fontSize: 12, color: colors.grey, fontFamily: 'Gilroy-SemiBold', width: '30%' }}>Deliver to :</Text>
                        <Text style={{ fontSize: 12, color: colors.black, marginLeft: '2%', fontFamily: 'Gilroy-SemiBold', width: '70%' }}>Mahalaxmi nagar , F102 Nariman point</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5 }}>
                        <Text style={{ fontSize: 12, color: colors.grey, fontFamily: 'Gilroy-SemiBold', width: '30%' }}>Order placed :</Text>
                        <Text style={{ fontSize: 12, color: colors.black, marginLeft: '2%', fontFamily: 'Gilroy-SemiBold', width: '70%' }}>Placed on Tue, 08 Aug 2024, 4:12 pm</Text>
                    </View>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '5%', paddingBottom: '3%', marginTop: '2%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Bill Details</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.grey }]}>MRP</Text>
                    <Text style={[styles.detail, { color: colors.black }]}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.green }]}>Product discount</Text>
                    <Text style={[styles.detail, { color: colors.green }]}>$40.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.grey }]}>Item total</Text>
                    <Text style={[styles.detail, { color: colors.black }]}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.grey }]}>Handling charge</Text>
                    <Text style={[styles.detail, { color: colors.black }]}>$2</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.grey }]}>Delivey Charge</Text>
                    <Text style={[styles.detail, { color: colors.green }]}>Free</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.grey }]}>Feeding india donation</Text>
                    <Text style={[styles.detail, { color: colors.black }]}>+$1</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={[styles.detailOption, { color: colors.grey }]}>Bill total</Text>
                    <Text style={[styles.detail, { color: colors.black }]}>+$86</Text>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1%', paddingBottom: '3%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Need help with your order?</Text>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{justifyContent:'center', backgroundColor: colors.green, height: 32, width: 32, borderRadius: 100}}>
                            <Text style={{ fontSize: 17, fontFamily: 'Gilroy-SemiBold', color: colors.white, textAlign: 'center', }}>M</Text>
                        </View>
                        <View style={{ height: '100%', alignSelf: 'flex-start', width: '80%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Chat with us</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginLeft: '5%' }}>About any issues related to your order</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                    <Image source={require('../../assets/images/rightBlack.png')} style={{height:24, width:24}}/>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button2 backgroundColor={colors.green} Text="Reorder" />
                </View>
            </ScrollView>
        </View>
    )
}