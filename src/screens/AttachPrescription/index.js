import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import Button2 from "../../components/Button2";

export default function AttachPrescription({navigation}) {

    const [order1, setOrder1] = useState(true);
    const [order2, setOrder2] = useState(false);

    const handleOrder1=()=>{
        setOrder1(true);
        setOrder2(false);
    }
    
    const handleOrder2=()=>{
        setOrder1(false);
        setOrder2(true);
    }


    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Attach Prescriptions" showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Valid Prescription Guide</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>Your prescription will be sent to the pharmacist for processing.</Text>
                <Image source={require('../../assets/images/presc1.png')} style={{ height: 77, width: 128, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop: '5%' }}>
                    <Image source={require('../../assets/images/fullstop.png')} style={{ height: 25, width: 25 }} />
                    <Text style={{ fontFamily: "Gilroy-Medium", fontSize: 14, width: '98%', color: colors.darkGrey }}>Do not crop any part of the prescription.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop: '2%' }}>
                    <Image source={require('../../assets/images/fullstop.png')} style={{ height: 25, width: 25 }} />
                    <Text style={{ fontFamily: "Gilroy-Medium", fontSize: 14, width: '98%', color: colors.darkGrey }}>Avoid blured images.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop: '2%' }}>
                    <Image source={require('../../assets/images/fullstop.png')} style={{ height: 25, width: 25 }} />
                    <Text style={{ fontFamily: "Gilroy-Medium", fontSize: 14, width: '98%', color: colors.darkGrey }}>Include detail of doctor and patients, date of visit.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop: '2%' }}>
                    <Image source={require('../../assets/images/fullstop.png')} style={{ height: 25, width: 25 }} />
                    <Text style={{ fontFamily: "Gilroy-Medium", fontSize: 14, width: '98%', color: colors.darkGrey }}>Supported files; PNG, JPEG, PDF</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop: '2%' }}>
                    <Image source={require('../../assets/images/fullstop.png')} style={{ height: 25, width: 25 }} />
                    <Text style={{ fontFamily: "Gilroy-Medium", fontSize: 14, width: '98%', color: colors.darkGrey }}>File size limit; 5MB</Text>
                </View>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '7%' }}>Upload Prescription</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>Please upload images of valid prescription from your doctor.</Text>
                <View style={{ flexDirection: 'row', width: "90%", alignItems: 'center', borderWidth: 1, borderColor: colors.grey, padding: "5%", marginTop: "5%" }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/file.png')} style={{ height: 44, width: 44 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: "4%", width: '65%' }}>Upload Prescription</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>Replace</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: "90%", alignItems: 'center', borderWidth: 1, borderColor: colors.grey, padding: "5%", marginTop: "5%" }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/file.png')} style={{ height: 44, width: 44 }} />
                    </TouchableOpacity>
                    <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: "4%" }}>Past Prescription</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingLeft: "4%", paddingTop: '3%' }}>Uploaded: Two Days Ago</Text>
                    </View>
                </View>
                <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: "5%" }} />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '7%' }}>Attached Prescription</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>Uploaded Prescriptions will be shown here.</Text>
                <Image source={require('../../assets/images/prescription.png')} style={{ height: 133, width: 166, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%', borderRadius: 4 }} />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '7%' }}>Order Info</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '90%', marginTop: '2%' }}>Select how do you want to proceed with order.</Text>
                <TouchableOpacity onPress={handleOrder1} style={{width:'90%', alignItems:'center', marginTop:"5%", borderBottomWidth:1.5, paddingBottom:'5%', borderColor:colors.lightgrey}}>
                <View style={{width:"100%", flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Image source={require('../../assets/images/firstAid.png')} style={{ height: 17, width: 16.5}} />
                <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black, width:'80%'}}>Search and Add medicines</Text>
                {order1 ?<Image source={require('../../assets/images/tick3.png')} style={{ height: 17, width: 16.5}} />:<Image source={require('../../assets/images/Oval.png')} style={{ height: 16, width: 16}} />}
                </View>
                <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.grey, width:'80%', marginTop:"3%"}}>Total amount to be paid will be confirmed once your order is generated.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOrder2} style={{width:'90%', alignItems:'center', marginTop:"5%", paddingBottom:'5%'}}>
                <View style={{width:"100%", flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Image source={require('../../assets/images/call2.png')} style={{ height: 17, width: 16.5}} />
                <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.black, width:'80%'}}>Search and Add medicines</Text>
                {order2 ?<Image source={require('../../assets/images/tick3.png')} style={{ height: 17, width: 16.5}} />:<Image source={require('../../assets/images/Oval.png')} style={{ height: 16, width: 16}} />}
                </View>
                <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.grey, width:'80%', marginTop:"3%"}}>Total amount to be paid will be confirmed once your order is generated.</Text>
                </TouchableOpacity>
                <Button2 onPress={()=>navigation.navigate('OrderReview')} backgroundColor={colors.lightGreen} Text="Attach now"/>
            </ScrollView>
        </View>
    )
}