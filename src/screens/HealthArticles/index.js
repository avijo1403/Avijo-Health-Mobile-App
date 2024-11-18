import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import { tableOfContent } from "../../assets/Data";

export default function HealthArticles({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem2 onPress={() => navigation.goBack()} text="Health Articles" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Image source={require('../../assets/images/article4.png')} style={{ height: 200, width: '100%', resizeMode: 'cover' }} />
                <Text style={{ color: colors.darkGrey, width: '90%', fontSize: 20, fontFamily: "Gilroy-SemiBold", paddingTop: '5%' }}>Several essential oil besides curing ailments can aid overall vision health know about 5 essential</Text>
                <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: '5%' }} />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: '2%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>By <Text style={{ color: colors.lightGreen }}>Dr.Divya Mandial</Text></Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>04 jun, 2024</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'space-between', marginTop: '4%', paddingBottom: '5%' }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/share1.png')} style={{ height: 32, width: 32 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/heart1.png')} style={{ height: 32, width: 32 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ color: colors.black, width: '90%', fontSize: 20, fontFamily: "Gilroy-SemiBold", paddingTop: '5%', paddingBottom:'5%' }}>Table of Content</Text>
                {tableOfContent.map((item)=>(<View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: '3%', paddingTop:0 }}>
                    <View style={{ backgroundColor: colors.lightGreen, height: 7, width: 7, borderRadius: 10 }} />
                    <Text style={{ color: colors.lightGreen, width: '90%', fontSize: 16, fontFamily: "Gilroy-SemiBold", paddingLeft: '5%' }}>{item.heading}</Text>
                </View>))}
                {tableOfContent.map((item)=>(<View style={{width:'100%', alignItems:'center'}}>
                    <Text style={{ color: colors.black, width: '90%', fontSize: 20, fontFamily: "Gilroy-SemiBold", paddingTop: '2%', paddingBottom:'5%' }}>{item.heading}</Text>
                    {item.imageText && <Text style={{ color: colors.grey, width: '90%', fontSize: 16, fontFamily: "Gilroy-Medium", paddingBottom:'3%' }}>{item.imageText}</Text>}
                    {item.image && <Image source={item.image} style={{height:180, width:'80%', marginBottom:"3%", alignSelf:'flex-start', marginLeft:'5%', borderRadius:5}} />}
                <Text style={{ color: colors.grey, width: '90%', fontSize: 16, fontFamily: "Gilroy-Medium" }}>{item.text}</Text>
                </View>))}
            </ScrollView>
        </View>
    )
}