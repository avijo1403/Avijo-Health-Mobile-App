import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";

export default function OrderReview({ navigation }) {
    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Order Review" showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: "5%" }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Prescription upload</Text>
                <Image source={require('../../assets/images/prescription.png')} style={{ height: 133, width: 166, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%', borderRadius: 4 }} />
                <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: "5%" }} />
                <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>PROMO CODE APPLIED</Text>
                <View style={{ width: "90%", alignItems: 'center', flexDirection: 'row', marginTop: "3%" }}>
                    <Image source={require('../../assets/images/tick4.png')} style={{ height: 20, width: 20 }} />
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen, paddingLeft: '3%' }}><Text style={{ fontSize: 14, color: colors.black }}>Ac60</Text> Your save 70% </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: "5%" }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>DELIVERY ADDRESS</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Bold', color: colors.blue }}>SELECT ADDRESS</Text>
                </View>
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "90%", marginTop: "2%" }}>Ishaan</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "90%", marginTop: "2%" }}>Snahsb.</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "90%", marginTop: "2%" }}>Shahs,</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "90%", marginTop: "2%" }}>Shivpuri - 473770, Madhy Pradesh.</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "90%", marginTop: "2%" }}>+91 - 7974814696</Text>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '10%' }}>PAYMENT DETAIL</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: "5%" }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>MRP Total</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Bold', color: colors.blue }}>To be decided</Text>
                </View>
                <Text style={{ fontSize: 15, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "90%", marginTop: "2%" }}>Total amount to be paid will be confirmed once your order is generated.</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "90%", marginTop: "2%" }}>Delivery charges</Text>
                <Text style={{ fontSize: 15, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "90%", marginTop: "2%" }}>Delivery charges is applicable if the total amount is less then Rs 1000</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: "5%" }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Total Amount</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Bold', color: colors.blue }}>To be decided</Text>
                </View>
                <TouchableOpacity style={[styles.buttonSubContainer, { backgroundColor: colors.lightGreen }]}>
                    <Text style={styles.buttonText}>CONFIRM ORDER</Text>
                </TouchableOpacity>
                <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: "5%" }} />
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, width: '90%', marginTop: "5%" }}>avijo IS THE TECHNOLOGY PLATFORM TO FACILITATE TRANSCATION OF BUSiNESS THE PRODUCTS AND THE SERVICES  ARE OFFERED FOR SaLe BUY THE SALERS. THE USER AUTHORISRS THE DELIVERY PERSOND TO BE HIS AGENT FOR DELIVERY OF THE GOODS . FOR DETAIL READ </Text>
                <TouchableOpacity style={{ width: "90%" }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.lightGreen }}>TERM &  CONDITIONS.</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}