import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { ScrollView } from "react-native";
import Button2 from "../../components/Button2";

export default function ManageAddress({ navigation }) {

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Manage Address" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.lightGreen, width: '90%', marginTop: '8%', lineHeight: 30 }}>Pysical examinations and vaccinations</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '3%' }}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen, width: '90%', marginTop: '3%' }}>Get Directions</Text>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '8%' }}>
                    <Button2 Text="Change Address" backgroundColor={colors.grey} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%' }}>
                    <Button2 Text="Confirm Address" backgroundColor={colors.lightGreen} onPress={() => navigation.navigate('Home')} />
                </View>
            </ScrollView>
        </View>
    )
}