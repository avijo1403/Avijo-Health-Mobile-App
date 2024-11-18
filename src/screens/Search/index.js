import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import { newSearch, product } from "../../assets/Data";

export default function Search({ navigation }) {

    const [direction, setDirection] = useState(true);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', borderWidth: 1, borderColor: colors.lightgrey, padding: '5%', borderRadius: 12, backgroundColor: colors.white, elevation: 5, marginTop: '10%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/blackLeft.png')} style={{ height: 16, width: 16 }} />
                </TouchableOpacity>
                <Text style={{ marginLeft: '5%', fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>Search for Medicine/Health products</Text>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', padding: '5%', backgroundColor: colors.lightgrey, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Quickly Order Via Prescription</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.grey, marginTop: '2%' }}>Upload the photo we will do rest</Text>
                    </View>
                    <Image source={require('../../assets/images/pin.png')} style={{ height: 32, width: 32 }} />
                </View>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Recent Searched</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green }}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                    <TouchableOpacity style={{ width: '28%', backgroundColor: colors.white, padding: 5, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Image source={require('../../assets/images/pharmacy.png')} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', paddingLeft: '5%' }}>Pharmacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '28%', backgroundColor: colors.white, padding: 5, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Image source={require('../../assets/images/accessory.png')} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', paddingLeft: '5%' }}>Accessories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '28%', backgroundColor: colors.white, padding: 5, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Image source={require('../../assets/images/wearable.png')} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', paddingLeft: '5%' }}>Wearables</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '10%' }}>Discover New Finds</Text>
                <View style={{ marginLeft: '3%', marginRight: '3%', flex: 1 }}>
                    <FlatList
                        data={newSearch}
                        horizontal={direction}
                        // numColumns={columns}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', width: 116, alignItems: 'center', borderRadius: 3, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: 8 }}>
                                <Image source={item.image} style={{ height: 96, width: 115, borderRadius: 3 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: 115, paddingTop: "5%", textAlign: 'center' }}>Dry Apricot </Text>
                            </View>)} />
                </View>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Recent Searched</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green }}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '5%', marginLeft: '10%', marginRight: '5%' }}>
                    <FlatList
                        data={product}
                        horizontal={direction}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', width: 116, alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, paddingBottom: 10, marginLeft: 8 }}>
                                <Image source={item} style={{ height: 95, width: '100%', borderRadius: 4 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Dry Apricot </Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "3%" }}>$40.56 </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '5%' }}>
                                    <Text style={{ fontSize: 6, fontFamily: 'Gilroy-Medium', color: colors.green, backgroundColor: colors.lightgrey, padding: 5, textAlign: 'center', borderRadius: 30 }}>200 ml</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "50%", marginTop: '5%' }}>
                                        <Image source={require('../../assets/images/clock.png')} style={{ height: 16, width: 16 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>15 mins</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} style={[styles.buttonSubContainer, { backgroundColor: colors.green }]}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>)} />
                </View>
            </ScrollView>
            <View style={{ padding: '2%', position: 'absolute', zIndex: 2, backgroundColor: colors.green, top: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                <View style={{borderWidth:2, borderColor:colors.white, alignItems:'center', justifyContent:'center', borderRadius:50, marginRight:'5%'}}>
                <Image source={require('../../assets/images/category12.png')} style={{height:46, width:46, borderRadius:50}}/>
                </View>
                <View style={{ marginRight: '5%' }}>
                    <Text style={{ fontSize: 16, color: colors.white, fontFamily: 'Gilroy-SemiBold' }}>View Cart</Text>
                    <Text style={{ fontSize: 14, color: colors.white, fontFamily: 'Gilroy-Medium' }}>1Item</Text>
                </View>
                <Image source={require('../../assets/images/greenRight3.png')} style={{ height: 44, width: 44, zIndex: 2 }} />
            </View>
        </View>
    )
}