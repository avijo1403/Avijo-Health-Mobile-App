import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors } from "../../Theme/GlobalTheme";
import Input1 from "../../components/Input1";
import Button1 from "../../components/Button1";

export default function AbhaPassword({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem text="Register With Mobile Number" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '10%', marginBottom: '5%' }}>Create new ABHA address</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>ABHA Address</Text>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', marginTop: '3%', alignItems: 'center', borderWidth: 1, height: 48, borderRadius: 5, borderColor: colors.grey }}>
                    <TextInput
                        style={{ width: '65%', fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black }}
                        placeholder="Enter ABHA address"
                        placeholderTextColor={colors.darkGrey}
                    />
                    <Text style={{ width: '30%', fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, textAlign: 'right', marginRight: "5%" }}>@abdm</Text>
                </View>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Suggestions:</Text>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',marginTop:'5%' }}>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.blue, lineHeight:30 }}>aditiya48643664</Text>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.blue, lineHeight:30 }}>aditiya48643664</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.blue, lineHeight:30 }}>aditiya48643664</Text>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.blue, lineHeight:30 }}>aditiya48643664</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '10%'}}>Create new password (optional)</Text>
                <Input1 text="Create Password" placeholder="Enter Password"/>
                <Input1 text="Confirm Password" placeholder="Re-type your password"/>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: "5%" }}>
                    <Button1 Text="Countinue" onPress={() => navigation.navigate('AbhaLogin')} />
                </View>
            </ScrollView>
        </View>
    )
}