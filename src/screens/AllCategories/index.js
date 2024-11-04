import React from "react";
import { FlatList, Image, ScrollView, Text, Touchable } from "react-native";
import { View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import { allCategory, product } from "../../assets/Data";

export default function AllCategories({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderItem2 text="All Categories" onPress={() => navigation.goBack()} right={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Image source={require('../../assets/images/blackSearch.png')} style={{ height: 28, width: 28, marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/blackCart.png')} style={{ height: 28, width: 28 }} />
                    </TouchableOpacity>
                </View>
            } />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', alignSelf: 'center' }}>
                    <FlatList
                        style={{ width: '90%' }}
                        data={allCategory}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '1%', paddingRight: '2%', marginTop: '5%', backgroundColor: item.color }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={item?.image} style={{ height: 96, width: '40%', borderRadius: 3 }} />
                                    <View style={{ height: '100%', width: '50%', paddingLeft: '2%' }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>{item?.text}</Text>
                                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginLeft: '5%', marginTop: '5%' }}>{item?.subText}</Text>
                                    </View>
                                </View>
                                <View style={{ width: '10%', alignItems: 'flex-end', }}>
                                    <Image source={require('../../assets/images/greenRight2.png')} style={{ height: 20, width: 20 }} />
                                </View>
                            </TouchableOpacity>
                        )} />
                </View>
            </ScrollView>
        </View>
    )
}