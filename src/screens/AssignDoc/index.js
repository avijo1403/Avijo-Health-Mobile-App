import React, { useEffect, useState } from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, hp, wp } from "../../Theme/GlobalTheme";
import SelectItem from "../../components/SelectItem";
import Collapsible3 from "../../components/Collapsible3";
import HeaderItem from "../../components/HeaderItem";

export default function AssignDoc({ navigation }) {


    return (
        <View style={styles.container}>
            <HeaderItem onBack={() => navigation.goBack()} text="Assign Documents" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Prescription</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: '90%', marginTop: '5%' }}>Order Date: <Text style={{color:colors.black}}>12 Jan 2024</Text></Text>
                <TouchableOpacity style={{ height: 42, width: 43, zIndex: 2, marginTop: hp(14.5), position: 'absolute', alignSelf: 'flex-end', marginRight: '5.5%' }}>
                    <Image source={require('../../assets/images/cross.png')} style={{ height: 42, width: 42 }} />
                </TouchableOpacity>
                <Image source={require('../../assets/images/doc.png')} style={{ height: 270, width: '90%', marginTop:'5%' }}/>
                <Collapsible3 heading="Select User" text="Select User"/>
            </ScrollView>
        </View>
    )
}