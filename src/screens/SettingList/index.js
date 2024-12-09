import React, { useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import HeaderItem from "../../components/HeaderItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

export default function SettingList({ navigation }) {

    const [loading, setLoading] = useState(false);

    const data = [
        {
            id: 0,
            text: 'Account',
        },
        {
            id: 1,
            text: 'Privacy',
        },
        {
            id: 2,
            text: 'Display',
        },
        {
            id: 3,
            text: 'Email & Notifications',
        },
        {
            id: 4,
            text: 'Languages',
        }
    ]

    const handleLogout = async () => {
        setLoading(true);
        try {
            await AsyncStorage.clear();
            await navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log('error while logout', e);
        }
    }

    return (
        <>
            {loading ?
                <View style={{ width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} color={colors.blue} />
                </View> : <View style={{ flex: 1, width: '100%' }}>
                    <HeaderItem onPress={() => navigation.goBack()} text="Setting" />
                    <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting')} style={{ width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Profile Setting</Text>
                        </TouchableOpacity>
                        {data.map((item) => (<TouchableOpacity onPress={() => item.to && navigation.navigate(item.to)} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>{item.text}</Text>
                            <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>))}
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', paddingBottom: '5%', borderBottomWidth: 1, borderColor: colors.grey, marginTop: '10%' }}>Docare+ & Space Subcriptions</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Add Account</Text>
                            <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Logout</Text>
                            <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', borderBottomWidth: 1, borderColor: colors.grey, paddingBottom: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.red }}>Logout All Accounts</Text>
                            <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>}
        </>
    )
}