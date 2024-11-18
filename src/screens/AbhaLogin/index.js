import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function AbhaLogin({navigation}){

    return(
        <View style={styles.container}>
            <HeaderItem text="Login with ABHA address" onBack={()=>navigation.goBack()}/>
            <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:'center'}}>
                <Text style={{fontSize:24, fontFamily:"Gilroy-SemiBold", color:colors.black, width:"90%", marginTop:"5%"}}>Benefits of creating ABHA</Text>
                <View style={{width:"90%", alignItems:'center', marginTop:'5%'}}>
                    <Image source={require('../../assets/images/abha1.png')} style={{width:'100%', height:112}}/>
                    <Text style={{fontSize:18, fontFamily:"Gilroy-SemiBold", color:colors.black, width:"100%", marginTop:"5%"}}>Securely store all your health records </Text>
                    <Text style={{fontSize:14, fontFamily:"Gilroy-Medium", color:colors.black, width:"100%", marginTop:"5%"}}>Automatically receive and store medical records like lab reports, prescriptions and more from any ABDA enlisted health facilities.</Text>
                </View>
                <View style={{width:"90%", alignItems:'center', marginTop:'5%'}}>
                    <Image source={require('../../assets/images/abha2.png')} style={{width:'100%', height:112}}/>
                    <Text style={{fontSize:18, fontFamily:"Gilroy-SemiBold", color:colors.black, width:"100%", marginTop:"5%"}}>Share seamlessly with doctors and health facilities</Text>
                    <Text style={{fontSize:14, fontFamily:"Gilroy-Medium", color:colors.black, width:"100%", marginTop:"5%"}}>Avoid long queues for medical services with instant register and instant share of your health records with any doctor/facility using ABHA.</Text>
                </View>
                <TouchableOpacity style={{borderWidth:1, height:50, width:'90%', alignItems:"center", justifyContent:'center', marginTop:'5%', borderColor:colors.blue, borderRadius:5}}>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-SemiBold', color:colors.blue}}>Create new ABHA</Text>
                </TouchableOpacity>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:"5%"}}>
                    <Button1 Text="Login existing ABHA" onPress={()=>navigation.navigate('AbhaPhone')}/>
                </View>
            </ScrollView>
        </View>
    )
}