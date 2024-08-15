import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import Button2 from "../../components/Button2";

export default function OrderDetail({navigation}) {

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={()=>navigation.goBack()} text="Order Details" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: colors.grey, paddingTop: '5%', paddingBottom: '3%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>CUSTOMER NAME</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey }}>Ishaan</Text>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: colors.grey, paddingTop: '5%', paddingBottom: '3%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>Order ID</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey }}>00000093r0r939093</Text>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: colors.grey, paddingTop: '5%', paddingBottom: '3%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>Order Placed</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey }}>May04, 2024 10:30AM</Text>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingTop: '5%' }}>PRESCRIPTION UPLOAD</Text>
                <Image source={require('../../assets/images/prescription.png')} style={{ height: 125, width: '40%', alignSelf: 'flex-start', margin: '5%', borderRadius: 5 }} />
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '5%', paddingBottom: '3%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>DELIVERY ADDRESS</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Bold', color: colors.lightGreen }}>SELECT ADDRESS</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Ishaan</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>Shahs, Shivpuri - 473770, Madhy Pradesh.</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%' }}>+91 - 7974814696</Text>
                <Text style={styles.detailHeading}>Payment Details</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Consultation Fee</Text>
                    <Text style={styles.detail}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Booking Fee <Text style={{ color: colors.lightGreen }}>(Free)</Text></Text>
                    <Text style={styles.detail}>$40.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Total Payment</Text>
                    <Text style={styles.detail}>$80.00</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailOption}>Payment mode</Text>
                    <Text style={styles.detail}>Pay at Clinic</Text>
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalOption}>Total Saving</Text>
                    <Text style={styles.totalOption}>$40.00</Text>
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%'}}>
                    <Button2 backgroundColor={colors.lightGreen} Text="Reorder"/>
                </View>
            </ScrollView>
        </View>
    )
}