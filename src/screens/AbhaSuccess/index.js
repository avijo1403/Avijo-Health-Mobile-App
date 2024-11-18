import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function AbhaSuccess({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem text="Login with ABHA address" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '10%',}}>Your ABHA has been successfully linked</Text>
            <Image source={require('../../assets/images/success2.png')} style={{height:124, width:124, marginTop:'8%'}}/>
            <View style={{width:'90%', alignItems:'center', padding:'10%', backgroundColor:colors.lightgrey, borderRadius:8, marginTop:'20%'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:colors.black, width:'40%'}}>ABHA Address:</Text>
                    <Text style={{color:colors.black, width:'60%', fontSize:14, fontFamily:'Gilroy-SemiBold'}}>213388641375@abdm</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:"3%"}}>
                    <Text style={{color:colors.black, width:'40%'}}>ABHA NO:</Text>
                    <Text style={{color:colors.black, width:'60%'}}>21-3388-6413-7517</Text>
                </View>
            </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: "5%" }}>
                    <Button1 Text="Countinue" onPress={() => navigation.navigate('AbhaTerms')} />
                </View>
            </ScrollView>
        </View>
    )
}