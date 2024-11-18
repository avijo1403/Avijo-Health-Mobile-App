import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import SearchItem from "../../components/SearchItem";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible2 from "../../components/Collapsible2";
import Collapsible1 from "../../components/Collapsible";
import Collapsible3 from "../../components/Collapsible3";
import Collapsible4 from "../../components/Collapsible4";
import { offerData } from "../../assets/Data";
import Button1 from "../../components/Button1";

export default function LabReview({ navigation }) {

    const limitedData = offerData.slice(0, 3);

    return (
        <View style={styles.container}>
            <HeaderItem onBack={() => navigation.goBack()} text="Order Review" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center", paddingTop: '5%' }}>
                <SearchItem />
                <View style={{ width: '90%', padding: 5, borderRadius: 8, elevation: 5, backgroundColor: colors.white, marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '2%' }}>
                        <View style={{ width: '65%' }}>
                            <View style={{ flexDirection: 'row', width: '70%', marginTop: '5%' }}>
                                <Image source={require('../../assets/images/flask.png')} style={{ height: 15, width: 15 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Cardiac enzyme test</Text>
                            </View>
                            <View style={{ backgroundColor: colors.aqua, flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, marginTop: '5%' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, padding: '2%' }}>Includes 90 tests</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, padding: '2%' }}>Show all</Text>
                            </View>
                        </View>
                        <View style={{ width: '35%', marginLeft: '5%', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%', paddingBottom: '5%', textAlign: 'right', paddingRight: '15%' }}>Booking For</Text>
                            <View style={{ width: '90%' }}>
                                <Collapsible4 text="1 Patient" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '1%' }}>
                        <View>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, paddingLeft: '1%', marginTop: '3%' }}>$700/-</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, paddingLeft: '1%', marginTop: '3%' }}>$499/-   <Text style={{ color: colors.green, fontFamily: 'Gilroy-SemiBold' }}>37% off</Text></Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    style={{ width: "100%" }}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}
                    data={limitedData}
                    renderItem={({ item }) =>
                    (<View style={{ width: '90%', padding: 5, borderRadius: 8, elevation: 5, backgroundColor: colors.white, marginTop: '5%', flexDirection: 'row' }}>
                        <View style={{ width: '70%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '2%' }}>
                                <View style={{ width: '100%' }}>
                                    <View style={{ flexDirection: 'row', width: '70%', marginTop: '5%' }}>
                                        <Image source={require('../../assets/images/flask.png')} style={{ height: 15, width: 15 }} />
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Cardiac enzyme test</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '1%' }}>
                                <View>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, paddingLeft: '1%', marginTop: '3%' }}>$700/-</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, paddingLeft: '1%', marginTop: '3%' }}>$499/-   <Text style={{ color: colors.green, fontFamily: 'Gilroy-SemiBold' }}>37% off</Text></Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('LabReview')} style={{ backgroundColor: colors.blue, borderRadius: 8, height: 42, alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.white, paddingLeft: '7%', paddingRight: '7%' }}>Select</Text>
                        </TouchableOpacity>
                    </View>)}
                />
                <TouchableOpacity style={{ borderWidth: 1, borderColor: colors.blue, borderRadius: 5, alignSelf: 'flex-end', marginRight: '5%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, padding: 5, paddingLeft: '5%', paddingRight: '5%' }}>Veiw all</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, width: '90%', borderColor: colors.grey }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingBottom: '5%' }}>Order Summary</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '90%', borderColor: colors.grey, marginTop: '5%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, paddingBottom: '5%' }}>1 Item in Cart</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '90%', borderColor: colors.grey, marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingBottom: '5%' }}>Cardiac enzyme test</Text>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, paddingBottom: '5%' }}>$499/-</Text>
                </View>
                <View style={{ borderBottomWidth: 1, width: '90%', borderColor: colors.grey, marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingBottom: '5%' }}>Total</Text>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, paddingBottom: '5%' }}>$499/-</Text>
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%' }}>
                    <Button1 onPress={()=>navigation.navigate('LabCart')} Text="Veiw Cart"/>
                </View>
            </ScrollView>
        </View>
    )
}