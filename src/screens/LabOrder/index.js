import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import { test } from "../../assets/Data";
import HeaderItem2 from "../../components/HeaderItem2";

export default function LabOrder({ navigation }) {

    const [select, setSelect] = useState(1);

    const handleSelect = (no) => {
        setSelect(no);
    }

    return (
        <View style={styles.container}>
            <HeaderItem2 backgroundColor={colors.green} textColor={colors.white} onBack={() => navigation.goBack()} text="Book test" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, alignSelf: 'flex-start', paddingLeft: '5%', paddingTop: '5%' }}>Most Common Medical Tests</Text>
                <ScrollView horizontal={true} contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', paddingLeft: '5%', marginTop: '5%' }} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { backgroundColor: select === 1 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 1 ? colors.white : colors.green }}>All Body Tests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { backgroundColor: select === 2 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 2 ? colors.white : colors.green }}>Cardiac Catheterization</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={[styles.tabContainer, { backgroundColor: select === 3 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 3 ? colors.white : colors.green }}>Blood Tests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(4)} style={[styles.tabContainer, { backgroundColor: select === 4 ? colors.green : colors.white }]}>
                        <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: select === 4 ? colors.white : colors.green, }}>Analysis of Body Fluids</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ width: '100%', marginTop: '5%', paddingBottom: '5%' }}>
                    <FlatList
                        style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                        data={test}
                        renderItem={({ item }) => (
                            <View style={{ width: '90%', padding: 5, borderRadius: 8, elevation: 5, backgroundColor: colors.white, marginTop: '5%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Cardiac enzyme test</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ backgroundColor: colors.aqua, flexDirection: 'row', width: '55%', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, marginTop: '5%' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.green, padding: '2%' }}>Includes 90 tests</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.green, padding: '2%' }}>Show all</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingLeft: '3%' }}>Available at</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                            <Image source={require('../../assets/images/home4.png')} style={{ height: 14, width: 14 }} />
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '1%', marginRight: '5%' }}>Home</Text>
                                            <Image source={require('../../assets/images/flask.png')} style={{ height: 14, width: 14, marginLeft: '5%' }} />
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '1%' }}>Lab</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                                            <Image source={require('../../assets/images/clipboard.png')} style={{ height: 12, width: 12 }} />
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '1%' }}>Reports in 6-12 Hrs</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, paddingLeft: '1%', marginTop: '3%' }}>$700/-</Text>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, paddingLeft: '1%', marginTop: '3%' }}>$499/-   <Text style={{ color: colors.green, fontFamily: 'Gilroy-SemiBold' }}>37% off</Text></Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('LabReview')} style={{ backgroundColor: colors.green, borderRadius: 8 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.white, padding: '3%', paddingLeft: '7%', paddingRight: '7%' }}>Book</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <TouchableOpacity style={{padding:'1%', borderWidth:1, borderColor:colors.green, paddingLeft:'5%', paddingRight:'5%', borderRadius:5, alignSelf:'flex-end', marginRight:'5%', marginBottom:'5%'}}>
                <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.green }}>View All</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}