import React, { useState } from "react";
import { FlatList, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import { Image } from "react-native";
import { profileOption } from "../../assets/Data";
import HeaderItem2 from "../../components/HeaderItem2";
import HeaderItem from "../../components/HeaderItem";

export default function UserProfile({ navigation }) {

    const [select, setSelect] = useState(0);

    const Profile = () => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Profile</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                        <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/profileName.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>Dr. Sunil Puraswani</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%" }}>Just now</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>Hlo</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 7, borderWidth: 1, borderColor: colors.grey }}>
                                <Image source={require('../../assets/images/blueUp.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Upvote</Text>
                                <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: "5%" }}>
                                <Image source={require('../../assets/images/chat1.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '5%', padding: '3%', elevation: 5, backgroundColor: colors.white, marginBottom: '5%' }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>How do I care for my health without doing anything?</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '2%', borderRadius: 100, borderWidth: 1, borderColor: colors.blue }}>
                            <Image source={require('../../assets/images/blueShare3.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Answers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderItem text="Dr. Sunil Puraswani" onBack={() => navigation.goBack()} />
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%", padding: '3%', borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, elevation: 5, backgroundColor: colors.white }}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{ height: 84, width: 64 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Dr. Sunil Puraswani</Text>
                        <Text style={{ fontSize: 10, fontFamily: "Gilroy-Medium", color: colors.darkGrey, marginTop: '3%' }}>-070676-35032</Text>
                        <Text style={{ fontSize: 10, fontFamily: "Gilroy-Medium", color: colors.darkGrey, marginTop: '3%' }}>Pediatrician</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        data={profileOption}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ marginLeft: '5%', paddingRight: '5%', marginTop: "7%" }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelect(item.id)} style={{ width: 110, alignItems: 'center', borderBottomWidth: 2, borderColor: colors.grey }}>
                                <Text style={{ width: 110, textAlign: 'center', paddingBottom: '5%', fontSize: 14, fontFamily: 'Gilory-Medium', borderBottomWidth: 2, borderColor: select === item.id ? colors.blue : colors.white, color: select === item.id ? colors.blue : colors.black }}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Profile />
            </ScrollView>
        </View>
    )
}