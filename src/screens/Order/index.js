import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { offerData } from "../../assets/Data";
import { colors, wp } from "../../Theme/GlobalTheme";
import HeaderItem2 from "../../components/HeaderItem2";

export default function Order({ navigation }) {

    const [select, setSelect] = useState(1);


    const handleSelect = (number) => {
        setSelect(number);
    }

    const Orders = () => {
        return (
            <FlatList
                nestedScrollEnabled={true}
                contentContainerStyle={{ paddingBottom: '5%', marginTop: '5%', width: '90%', alignItems: 'center' }}
                data={offerData}
                renderItem={({ item }) => (
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderBottomWidth: 0, width: '100%', flexDirection: 'row', padding: '5%', borderColor: colors.lightgrey }}>
                            <Image source={require('../../assets/images/skincare1.png')} style={{ height: 92, width: wp(30) }} />
                            <View style={{ paddingLeft: '5%', width: '90%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Skin Care</Text>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Ishaan</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Cancelled</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginTop: '1%' }}>Delivery Method</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '1%' }}>30 day (Free)</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.grey, marginTop: '3%' }}>Ordered Placed On</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '1%' }}>08 May 2025</Text>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')} style={[styles.buttonSubContainer, { backgroundColor: colors.grey }]}>
                                <Text style={styles.buttonText}>Veiw Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Reschedule')} style={[styles.buttonSubContainer, { backgroundColor: colors.lightGreen }]}>
                                <Text style={styles.buttonText}>Reorder</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        )
    }

    const Consultations = () => {
        return (

            <View style={{ width: '100%', alignItems: 'center' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: '5%' }}
                    data={offerData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={{ width: '90%', marginTop: '5%', flexDirection: 'row', marginLeft: '5%', marginBottom: '5%' }}>
                            <Image source={require('../../assets/images/dr6.png')} style={{ width: 44, height: 53, borderRadius: 5, alignSelf: 'center' }} />
                            <View style={{ marginLeft: '5%', width: '100%' }}>
                                <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 16, color: colors.blue }}>Dr. Jane Cooper</Text>
                                <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 14, color: colors.darkGrey, paddingTop: '3%' }}>Psychologist at Apple Hospital</Text>
                                <View style={{ flexDirection: 'row', marginTop: '0%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Status: <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Completed</Text></Text>
                                    <View style={{ padding: 8, borderRadius: 7, backgroundColor: colors.skyblue }}>
                                        <Text style={{ color: colors.blue, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>Online</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: '3%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 10, fonthFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>12 June 2020 | 12:00 pm</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 25, justifyContent: 'space-between', marginRight: '1%' }}>
                                        <Image source={require('../../assets/images/phone2.png')} style={{ height: 12, width: 12 }} />
                                        <Image source={require('../../assets/images/chat2.png')} style={{ height: 12, width: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderItem2 onPress={() => navigation.goBack()} text="My Order" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginRight: 15, marginTop: '7%', marginLeft: '7%', justifyContent: 'space-between', width: '90%', borderBottomWidth:2, borderColor:colors.grey }}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={select === 1 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 2 ? styles.optionText2 : styles.optionText}>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={select === 2 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 4 ? styles.optionText2 : styles.optionText}>Diagnostics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={select === 3 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 3 ? styles.optionText2 : styles.optionText}>Consultations</Text>
                    </TouchableOpacity>
                </View>
                {select === 1 && <Orders/>}
                {select === 3 && <Consultations/>}
            </ScrollView>
        </View>
    )
}