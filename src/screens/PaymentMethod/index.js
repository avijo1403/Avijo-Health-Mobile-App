import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import LoginInput from "../../components/LoginInput";
import Collapsible1 from "../../components/Collapsible";
import SquareRadio from "../../components/SquareRadio";
import Button1 from "../../components/Button1";

export default function PaymentMethod({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 14, width: 15 }} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Payment method</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                <Image source={require('../../assets/images/mastercard.png')} style={{ width: '90%', height: 216, resizeMode: 'contain', marginTop: '5%' }} />
                <TextInput
                    style={styles.input}
                    placeholder="Mayn"
                    placeholderTextColor={colors.grey}
                />
                <TextInput
                    style={styles.input}
                    placeholder="****  ****  ****  7865"
                    placeholderTextColor={colors.grey}
                />
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: '50%' }}>
                        <Collapsible1 text="16" />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Collapsible1 text="2024" />
                    </View>
                </View>
                <View style={{ width: '46%', alignSelf: 'flex-start', marginLeft: '5%' }}>
                    <Collapsible1 text="16" />
                </View>
                <Text style={styles.bottomText}>Your transactions are 100% secure</Text>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Pay Using</Text>
                    <Image source={require('../../assets/images/paytm.png')} style={{ height: 29, width: 29 }} />
                    <Image source={require('../../assets/images/visa.png')} style={{ height: 29, width: 29 }} />
                    <Image source={require('../../assets/images/paypal.png')} style={{ height: 29, width: 29 }} />
                    <Image source={require('../../assets/images/ban.png')} style={{ height: 29, width: 29 }} />
                    <Image source={require('../../assets/images/gpay.png')} style={{ height: 29, width: 29 }} />
                    <Image source={require('../../assets/images/pay.png')} style={{ height: 29, width: 29 }} />
                </View>
                <View style={{ width: '90%', alignSelf: 'flex-start' }}>
                    <SquareRadio text="Remember this card (Your CVV won’t be saved)" />
                </View>
                <Button1 Text="Pay" onPress={() => navigation.navigate('VideoChat')} />
            </ScrollView>
        </View>
    )
}