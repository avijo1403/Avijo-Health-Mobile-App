import React from "react";
import { Text } from "react-native";
import { View, Image } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { ScrollView } from "react-native";
import Button2 from "../../components/Button2";
import { TouchableOpacity } from "react-native";

export default function Address({ navigation }) {

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Delivery Address" image2={<Image source={require('../../assets/images/whiteAdd.png')} style={{ height: 32, width: 32 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.navigate('NewAddress')} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ justifyContent: 'center', backgroundColor: colors.white, height: 32, width: 32, borderRadius: 100 }}>
                            <Text style={{ fontSize: 32, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, textAlign: 'center', }}>+</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Add New Address</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 24, width: 24 }} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '10%' }}>Your saved addresses</Text>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%' }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                        <Image source={require('../../assets/images/location4.png')} style={{ height: 64, width: 64 }} />
                        <View style={{ alignSelf: 'flex-start', width: '80%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%', alignSelf: 'flex-start' }}>Others <Text style={{ fontSize: 12, color: colors.green, fontFamily: 'Gilroy-Medium' }}>You are here</Text></Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.grey, marginLeft: '5%', alignSelf: 'flex-start' }}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '22%', justifyContent: 'space-between', marginLeft: '5%', marginTop: '3%' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/horizontalDots2.png')} style={{ height: 24, width: 24 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/share3.png')} style={{ height: 24, width: 24.93566 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.lightgrey, borderRadius: 8, padding: '5%', marginTop: '5%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/images/share3.png')} style={{ height: 32, width: 32.9366 }} />
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '5%', width:'70%' }}>Now share your addresses with friends and family</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', alignSelf: 'flex-start' }}>
                            <Image source={require('../../assets/images/redCross.png')} style={{ height: 24, width: 24 }} />
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, padding: '3%', marginTop: '5%'  }}>
                    <Image source={require('../../assets/images/home6.png')} style={{ height: 64, width: 64 }} />
                    <View style={{ alignSelf: 'flex-start', width: '80%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%', alignSelf: 'flex-start' }}>Home <Text style={{ fontSize: 12, color: colors.green, fontFamily: 'Gilroy-Medium' }}>Home</Text></Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.grey, marginLeft: '5%', alignSelf: 'flex-start' }}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '22%', justifyContent: 'space-between', marginLeft: '5%', marginTop: '3%' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/horizontalDots2.png')} style={{ height: 24, width: 24 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/share3.png')} style={{ height: 24, width: 24.93566 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* <View style={{ width: '100%', alignItems: 'center', marginTop: '10%' }}>
                    <Button2 Text="Add New Address" backgroundColor={colors.green} onPress={() => navigation.navigate('NewAddress')} />
                </View> */}
                {/* <View style={{ width: '100%', alignItems: 'center', marginTop: '8%' }}>
                    <Button2 Text="Modify" backgroundColor={colors.grey} />
                </View> */}
            </ScrollView>
        </View>
    )
}