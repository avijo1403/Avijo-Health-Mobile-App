import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderItem from "../../components/HeaderItem";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import PaymentItem from "../../components/PaymentItem";

export default function AddPayment({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem text="Payment method" showSearch={true} onBack={() => navigation.goBack()} image={<Image source={require('../../assets/images/plus.png')} style={{ height: 30, width: 30 }} />} onRightPress={()=>navigation.navigate('PaymentMethod')} />
            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center' }}>
                <Text style={styles.heading}>Pay Using</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')} style={{ width: '90%', height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', backgroundColor: colors.lightgrey, borderRadius: 3, marginRight:'5%', marginLeft:"4%" }}>
                    <Text
                        style={{ width: '90%', paddingLeft: 15, fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}
                    >Debit / Credit Card</Text>
                    <Image source={require('../../assets/images/right.png')} style={{ width: 7, height: 12, alignSelf: 'center', marginRight: '4%' }} />
                </TouchableOpacity>
                <PaymentItem text="Paytm Postpaid and Wallet" />
                <PaymentItem text="UPI" />
                <PaymentItem text="Google Pay" />
                <PaymentItem text="Amazon Pay" />
                <PaymentItem text="Phonepe / BHIM UPI" />
                <PaymentItem text="Net Banking" />
                <PaymentItem text="Pay Later" />
                <PaymentItem text="Other" />
            </ScrollView>
        </View>
    )
}
