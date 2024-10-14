import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors, hp } from "../../Theme/GlobalTheme";
import SearchItem from "../../components/SearchItem";
import Collapsible4 from "../../components/Collapsible4";
import Button1 from "../../components/Button1";
import HeaderItem2 from "../../components/HeaderItem2";
import Button2 from "../../components/Button2";

export default function LabCart({ navigation }) {

    const [select, setSelect] = useState(1);
    const [option, setOption] = useState(1);

    const handleSelect = (no) => {
        setSelect(no);
    }

    return (
        <View style={styles.container}>
            <HeaderItem2 onBack={() => navigation.goBack()} text="Checkout" right={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Image source={require('../../assets/images/cart3.png')} style={{ height: 24, width: 24, marginRight: 10, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.green, alignSelf: 'flex-start', paddingLeft: '0%',}}>Share</Text>
                    </TouchableOpacity>
                </View>
            } />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            <View horizontal={true} style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '100%', justifyContent: 'space-between', borderBottomWidth: 2, borderColor: colors.lightgrey }}>
                    <TouchableOpacity onPress={() => setOption(1)} style={[styles.tabContainer1, { backgroundColor: colors.white, borderBottomWidth: option === 1 ? 2 : 0, marginLeft: '5%' }]}>
                        <Text style={{
                            fontFamily: 'Gilroy-SemiBold', fontSize: 14, color: colors.black, textAlign: 'center'}}>Medicine/Healthcare</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOption(2)} style={[styles.tabContainer1, { backgroundColor: colors.white, borderBottomWidth: option === 2 ? 2 : 0 }]}>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 14, color: colors.black, textAlign: 'center' }}>Lab Tests</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '5%' }}>Most Common Medical Tests</Text>
                <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '5%', marginTop: '5%', marginBottom: '5%' }} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { backgroundColor: select === 1 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 1 ? colors.white : colors.green }}>Online Consultation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { backgroundColor: select === 2 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 2 ? colors.white : colors.green }}>Find Doctor near You</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={[styles.tabContainer, { backgroundColor: select === 3 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 3 ? colors.white : colors.green }}>Medicine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(4)} style={[styles.tabContainer, { backgroundColor: select === 4 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 4 ? colors.white : colors.green, }}>Analysis of Body Fluids</Text>
                    </TouchableOpacity>
                </ScrollView>
                <SearchItem />
                <Image source={require('../../assets/images/labCart.png')} style={{ width: '90%', height: 148, marginTop: '5%', borderRadius: 3 }} />
                <View style={{ width: '90%', padding: 5, borderRadius: 8, elevation: 5, backgroundColor: colors.white, marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '2%' }}>
                        <View style={{ width: '65%' }}>
                            <View style={{ flexDirection: 'row', width: '70%', marginTop: '5%' }}>
                                <Image source={require('../../assets/images/flask.png')} style={{ height: 15, width: 15 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Cardiac enzyme test</Text>
                            </View>
                            <View style={{ backgroundColor: colors.lightGreen2, flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, marginTop: '5%' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.green, padding: '2%' }}>Includes 90 tests</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.green, padding: '2%' }}>Show all</Text>
                            </View>
                        </View>
                        <View style={{ width: '35%', marginLeft: '5%', alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/bin.png')} style={{ height: 16, width: 16, marginRight: '15%', marginBottom: '5%' }} />
                            </TouchableOpacity>
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
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/fasting.png')} style={{ height: 18, width: 18 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey }}>Fasting : <Text style={{ color: colors.darkGrey }}>not required</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '3%' }}>
                            <Image source={require('../../assets/images/clock1.png')} style={{ height: 18, width: 18 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Reports in 24 hours</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingBottom: '5%' }}>Cart Value</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, paddingBottom: '5%' }}><Text style={{ fontSize: 12, textDecorationLine: 'line-through', color: colors.grey }}>$700/-</Text> $499/-</Text>
                </View>
                <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingBottom: '5%' }}>Sample Collection Charges</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.green, paddingBottom: '5%' }}><Text style={{ fontSize: 12, textDecorationLine: 'line-through', color: colors.grey }}>$700/-</Text> Free</Text>
                </View>
                <View style={{  width: '90%',  marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.green, paddingBottom: '5%' }}>Order Total</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.green, paddingBottom: '5%' }}>$499/-</Text>
                </View>
                <View style={{ width: '90%', marginTop: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, paddingBottom: '5%' }}>Amount Payable</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, paddingBottom: '5%' }}>$499/-</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '90%', height: 48, borderRadius: 8, borderWidth: 1, borderColor: colors.green, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.green }}>Patient Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '90%', height: 48, borderRadius: 8, borderWidth: 1, borderColor: colors.red, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                            <Image source={require('../../assets/images/coupon.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red, paddingLeft: '2%' }}>Apply Coupon</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: '5%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.red, paddingRight: '2%' }}>Veiw Offers</Text>
                            <Image source={require('../../assets/images/redRight.png')} style={{ height: 16, width: 16 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '90%', zIndex: 2, position: 'absolute', alignItems: 'flex-start', marginTop: hp(-1.5), marginLeft: '30%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.green, backgroundColor: colors.white, padding: 2 }}>Best coupen for you</Text>
                    </View>
                    <View style={{ width: '90%', borderWidth: 1, borderRadius: 8, borderColor: colors.grey, flexDirection: 'row', alignItems: 'center', padding: '2%', zIndex: 1 }}>
                        <View style={{ width: '70%', paddingLeft: '5%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, paddingTop: '5%' }}>CBCK60</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Regular', color: colors.grey, paddingTop: '5%' }}>Get Flat Rs.50 avijo Credit on order above Rs.300.</Text>
                        </View>
                        <View style={{ width: '30%' }}>
                            <TouchableOpacity style={{ backgroundColor: colors.green, alignItems: 'center', justifyContent: 'space-between', padding: '10%', borderRadius: 8, marginTop: '30%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.white }} >Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Button2 Text="Proceed" onPress={() => navigation.navigate('Slot')} backgroundColor={colors.green} />
                </View>
            </ScrollView>
        </View>
    )
}