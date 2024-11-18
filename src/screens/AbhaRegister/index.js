import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import LoginInput from "../../components/LoginInput";
import Input1 from "../../components/Input1";
import Collapsible6 from "../../components/Collapsible6";
import SquareRadio from "../../components/SquareRadio";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function AbhaRegister({navigation}) {

    return (
        <View style={styles.container}>
            <HeaderItem text="Register With Mobile Number" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }}>
                <Input1 text="Full Name" placeholder="Enter full name "/>
                <Input1 text="EMAIL " placeholder="Enter your Email "/>
                <Input1 text="Mobile number" placeholder="Enter your Mobile number"/>
                <Collapsible6 heading="Date of Birth" text="Select "/>
                <Collapsible6 heading="Gender" text="Select your Gender"/>
                <Input1 text="Address" placeholder="Enter address"/>
                <Input1 text="State" placeholder="Enter State"/>
                <Input1 text="District" placeholder="Enter District"/>
                <Input1 text="Pin Code" placeholder="Enter Pin Code"/>
                <View style={{width:"95%", marginTop:'5%'}}>
                <SquareRadio text="I agree to voluntarily share my identity information with National Health Authority (NHA) to create my ABHA address."/>
                <Text style={{fontSize:12, fontFamily:"Gilrosy-Medium", color:colors.blue, marginLeft:'12%', textDecorationLine:'underline'}}>User information agreement</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: "5%" }}>
                    <Button1 Text="Countinue" onPress={() => navigation.navigate('AbhaPassword')} />
                </View>
            </ScrollView>
        </View>
    )
}