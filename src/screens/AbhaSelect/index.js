import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible3 from "../../components/Collapsible3";

export default function AbhaSelect({navigation}) {

    const content = [
        '21338864137517@abdm'
    ]

    return (
        <View style={styles.container}>
            <HeaderItem text="Login with ABHA address" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '10%',}}>Select an ABHA TO login</Text>
            <Collapsible3 showRight={true} text="21338864137517@abdm" content={content} navigation={navigation} path={'AbhaSuccess'}/>
            </ScrollView>
        </View>
    )
}