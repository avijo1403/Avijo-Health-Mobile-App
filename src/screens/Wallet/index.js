import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import HeaderItem2 from "../../components/HeaderItem2";

export default function Wallet({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem2 onPress={() => navigation.goBack()} text="Wallet" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Image source={require('../../assets/images/rewards.png')} style={{ height: 200, width: '100%', borderRadius: 5, marginTop: '2%' }} />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', marginTop: '5%' }}>
                    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 3, width: '48%', paddingTop: 15, paddingBottom: 15, zIndex: 2, bottom: '15%', backgroundColor: 'white', elevation: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.darkGrey, paddingLeft: '3%' }}>avijo Credits</Text>
                            <Image source={require('../../assets/images/info.png')} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ width: "55%", marginTop: '10%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>$8.24</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 3, width: '48%', zIndex: 2, bottom: '15%', paddingTop: 15, paddingBottom: 15, backgroundColor: 'white', elevation: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.darkGrey, paddingLeft: '3%' }}>Refund Cash</Text>
                            <Image source={require('../../assets/images/info.png')} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ width: "55%", marginTop: '10%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'left', }}>$8.24</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, padding: '3%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/images/transaction.png')} style={{ height: 38, width: 43 }} />
                        <View style={{ height: '100%', width: '80%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>View Transactions</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                    </View>
                </View>
                <View style={{ width: '100%', borderTopWidth: 1, backgroundColor: colors.skyblue, borderColor: colors.grey, alignItems: 'center', paddingBottom:'20%' }}>
                    <View style={{width:'100%', alignItems:'center', backgroundColor:colors.white, marginTop:'5%', paddingBottom:'5%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, padding: '3%', marginTop: '5%', backgroundColor: colors.white }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ height: '100%', width: '80%' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>How it works</Text>
                                </View>
                            </View>
                            <View style={{ marginRight: '5%' }}>
                                <Image source={require('../../assets/images/arrowUp.png')} style={{ height: 20, width: 20 }} />
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'flex-start', width:'90%'}}>
                            <View style={{height:6, width:6, backgroundColor:colors.darkGrey, borderRadius:30, marginTop:'2%'}}/>
                            <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.darkGrey, marginLeft:'3%'}}>You can use your entire refund cash to pay for your Order</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'flex-start', width:'90%', marginTop:'5%'}}>
                            <View style={{height:6, width:6, backgroundColor:colors.darkGrey, borderRadius:30, marginTop:'2%'}}/>
                            <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.darkGrey, marginLeft:'3%'}}>You can pay 5% of your medicine order value with avijo Credits.</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'flex-start', width:'90%', marginTop:'5%'}}>
                            <View style={{height:6, width:6, backgroundColor:colors.darkGrey, borderRadius:30, marginTop:'2%'}}/>
                            <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.darkGrey, marginLeft:'3%'}}>You can 50% of your Lab Test booking value with avijo Credits.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}