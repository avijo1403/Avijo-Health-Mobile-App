import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";

export default function Wallet({navigation}) {

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={()=>navigation.goBack()} text="My Wallet" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginTop: "5%" }}>
                    <View style={{ width: '48%' }}>
                        <Image source={require('../../assets/images/method.png')} style={{ height: 160, width: '100%', borderRadius: 5 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingTop: '2%' }}>Payment Methods</Text>
                    </View>
                    <View style={{ width: '48%' }}>
                        <Image source={require('../../assets/images/medOrder.png')} style={{ height: 160, width: '100%', borderRadius: 5 }} />
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingTop: '2%' }}>Medicine Order</Text>
                    </View>
                </View>
                <Image source={require('../../assets/images/rewards.png')} style={{ height: 200, width: '90%', borderRadius: 5, marginTop:'5%' }} />
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingTop: '2%', width:'90%', paddingTop:'2%' }}>My Rewards</Text>
                <Text style={{ fontSize: 11, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingTop: '2%', width:'85%', paddingTop:'5%' }}>Available Balance</Text>
                <Text style={{ fontSize: 17, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingTop: '2%', width:'85%', paddingTop:'2%' }}>Rs. 0.00</Text>
                <View style={{flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:'5%'}}>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:colors.lightGreen, padding:5, borderRadius:3, width:'48%'}}>
                        <Image source={require('../../assets/images/coin.png')} style={{height:15, width:15}}/>
                        <Text style={{fontFamily:'Gilroy-SemiBold', fontSize:9, color:colors.darkGrey, paddingLeft:'3%', width:'60%'}}>NMS Cash</Text>
                        <View>
                            <Text style={{fontSize:9, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey}}>Rs. 0.00</Text>
                            <Text style={{fontSize:6, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey}}>How to use?</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:colors.lightGreen, padding:5, borderRadius:3, width:'48%'}}>
                        <Image source={require('../../assets/images/coin.png')} style={{height:15, width:15}}/>
                        <Text style={{fontFamily:'Gilroy-SemiBold', fontSize:9, color:colors.darkGrey, paddingLeft:'3%', width:'60%'}}>NMS Super Cash</Text>
                        <View>
                            <Text style={{fontSize:9, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey}}>Rs. 0.00</Text>
                            <Text style={{fontSize:6, fontFamily:'Gilroy-SemiBold', color:colors.darkGrey}}>How to use?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}