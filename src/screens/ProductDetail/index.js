import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { Rating } from "react-native-ratings";
import Button2 from "../../components/Button2";

export default function ProductDetail() {

    return (
        <View style={styles.container}>
            <ArticleHeader text="Products Detail" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: "90%", alignItems: 'flex-start', marginTop: '5%', marginBottom: "5%" }}>
                    <Image source={require('../../assets/images/skinCare4.png')} style={{ height: 90, width: 90 }} />
                    <View style={{ paddingLeft: '5%', width: "70%" }}>
                        <Text style={{ fontSize: 15, color: colors.black, fontFamily: "Gilroy-SemiBold" }}>Skin shine Spf 30 sunscreen Location 100ml</Text>
                        <Text style={{ fontSize: 10, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>Cadila Pharmaceuticals Ltd</Text>
                        <Text style={{ fontSize: 10, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>Pack of 100 ML</Text>
                        <Text style={{ fontSize: 12, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>$178.02 <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>  MRP $197.80</Text></Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '0%' }}>
                            <Image source={require('../../assets/images/heart4.png')} style={{ height: 16, width: 16 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '2%' }}>3.0</Text>
                            <Rating
                                type="star"
                                ratingCount={5}
                                imageSize={11}
                                startingValue={3.0}
                                readonly={true}
                                style={{ height: 16, width: 70, marginTop: "3%" }}
                                ratingBackgroundColor={colors.white}
                            />
                            <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '2%', width: '55%' }}>(1 Ratings & 1 Reveiws)</Text>
                        </View>
                    </View>
                </View>
                <Button2 backgroundColor={colors.lightGreen} Text="Add To Cart" />
                <Text style={{ width: "90%", fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '1%' }}>*MRP inclusive of all taxes</Text>
                <View style={{ width: '90%', alignItems: "center", flexDirection: 'row', marginTop: "8%", borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 8, padding: '5%', justifyContent: 'space-between' }}>
                    <View style={{ width: '28%' }}>
                        <Image source={require('../../assets/images/detail1.png')} style={{ height: 56, width: '90%' }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', textAlign: "center", color: colors.black, paddingTop: '5%' }}>100% genuine medicine</Text>
                    </View>
                    <View style={{ height: '90%', width: 1, backgroundColor: colors.lightgrey }} />
                    <View style={{ width: '28%' }}>
                        <Image source={require('../../assets/images/detail2.png')} style={{ height: 56, width: '90%' }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', textAlign: "center", color: colors.black, paddingTop: '5%' }}>Safe & secure payments</Text>
                    </View>
                    <View style={{ height: '90%', width: 1, backgroundColor: colors.lightgrey }} />
                    <View style={{ width: '28%' }}>
                        <Image source={require('../../assets/images/detail3.png')} style={{ height: 56, width: '90%' }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', textAlign: "center", color: colors.black, paddingTop: '5%' }}>15 days Easy returns</Text>
                    </View>
                </View>
                <View style={{ width: '90%', flexDirection: 'column', marginTop: "8%", borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 8, padding: '3%' }}>
                    <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Composition</Text>
                        <Image source={require('../../assets/images/detail4.png')} style={{ height: 24, width: 24, marginLeft: '3%' }} />
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '2%' }}>All Other Combinations (0 MG)</Text>
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width:'90%', marginTop:'5%' }}>Quick Links</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding:'1%', marginTop:"3%", marginLeft:"5%" }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 7, width: 7, backgroundColor: colors.lightGreen, borderRadius: 10 }} />
                        <Text style={{fontSize:12, fontFamily:'Gilroy-Medium', color:colors.lightGreen, paddingLeft:'3%'}}>Uses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft:'5%' }}>
                        <View style={{ height: 7, width: 7, backgroundColor: colors.lightGreen, borderRadius: 10 }} />
                        <Text style={{fontSize:12, fontFamily:'Gilroy-Medium', color:colors.lightGreen, paddingLeft:'3%'}}>Direction for use</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding:'1%', marginLeft:"5%" }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 7, width: 7, backgroundColor: colors.lightGreen, borderRadius: 10 }} />
                        <Text style={{fontSize:12, fontFamily:'Gilroy-Medium', color:colors.lightGreen, paddingLeft:'3%'}}>Side effects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft:'5%' }}>
                        <View style={{ height: 7, width: 7, backgroundColor: colors.lightGreen, borderRadius: 10 }} />
                        <Text style={{fontSize:12, fontFamily:'Gilroy-Medium', color:colors.lightGreen, paddingLeft:'3%'}}>Medicine Activity</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    )
}