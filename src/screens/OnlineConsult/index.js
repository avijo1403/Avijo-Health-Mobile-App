import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import SearchItem from "../../components/SearchItem";
import { colors } from "../../Theme/GlobalTheme";
import ConsultCard from "../../components/ConsultCard";
import { common, consult, symptomData } from "../../assets/Data";
import SymptomCard from "../../components/SymptomCard";
import CategoryCard from "../../components/CategoryCard";

export default function OnlineConsult({ navigation }) {
    
    const [columns, setColumns] = useState(4);

    return (
        <View style={styles.container}>
            <HeaderItem text="Online Consultation" showSearch={true} onBack={() => navigation.goBack()} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 30, width: 30 }} />} />
            <ScrollView style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.lightgrey, paddingBottom: '5%' }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', alignSelf: 'flex-start', padding: '5%', paddingBottom: '2%', color: colors.black }}>Find Doctors by Health concern</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', alignSelf: 'flex-start', paddingLeft: '5%', color: colors.darkGrey }}>Exclusive Online Consultations with Verified Specialists</Text>
                    <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                        <FlatList
                            style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                            contentContainerStyle={{ justifyContent: 'space-between' }}
                            data={consult}
                            numColumns={columns}
                            key={columns}
                            renderItem={({ item }) => (
                                <ConsultCard image={item.image} text={item.text} onPress={() => navigation.navigate('UHIID')} />
                            )}
                        />
                    </View>
                </View>
                <View style={styles.viewAllContainer}>
                    <Text style={styles.viewText}>Most Common Symptoms</Text>
                </View>
                <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                    <FlatList
                        style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                        data={symptomData}
                        numColumns={columns}
                        key={columns}
                        renderItem={({ item }) => (
                            <CategoryCard image={item.image} text={item.text} />
                        )} />
                </View>
                <View style={styles.viewAllContainer}>
                    <Text style={styles.viewText}>Common Health Issues</Text>
                </View>
                <View style={{ width: '100%', paddingRight: '5%', marginTop: '5%' }}>
                    <FlatList
                        style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                        data={common}
                        numColumns={columns}
                        key={columns}
                        renderItem={({ item }) => (
                            <CategoryCard image={item.image} text={item.text} circle={true} />
                        )} />
                </View>
                <View style={{ width: '100%', padding: 20, backgroundColor: colors.lightgrey, marginTop: '5%' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.grey }}>India's Best Health Guardian</Text>
                    <Image source={require('../../assets/images/avijo.png')} style={{ height: 35, width: 54, marginTop: 5 }} />
                </View>
                {/* <View style={{ flexDirection: 'row', width: '100%', padding: 15, alignItems: 'center', borderTopWidth: 1, borderColor: colors.lightgrey, paddingTop: '5%' }}>
                    <Image source={require('../../assets/images/delivery.png')} style={{ width: 74, height: 72 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Get Free Delivery</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Offer valid for a limited time only!</Text>
                    </View>
                </View> */}
            </ScrollView>
        </View>
    )
}