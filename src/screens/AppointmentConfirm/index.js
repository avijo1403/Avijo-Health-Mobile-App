import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";
import { BaseUrl2 } from "../../assets/Data";

export default function AppointmentConfirm({navigation, route}) {
    
    const id = route.params.id;

    const [singleData, setSingleData] = useState({});
    

    const fetchData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/doctor/getDoctorProfile/${id}`);
            const json = await response.json();
            setSingleData(json.data);
            console.log('json:', json.data);
        } catch (e) {
            console.log('fetch error:', e);
        }
    }

    useEffect(()=>{
        fetchData();
        // console.log('id:', id);
    },[]);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: '20%' }}>
                <Image source={require('../../assets/images/tick2.png')} style={{ height: 24, width: 24 }} />
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '4%' }}>Appointment Confirmed</Text>
            </View>
            <View style={styles.topContainer}>
                <View style={styles.timeContainer}>
                    <Image source={require('../../assets/images/calender3.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.date}>On {new Date().toLocaleString('default', { month: 'short' })} 20, {new Date().getFullYear()}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Image source={require('../../assets/images/clock.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.date}>At 3:30 PM</Text>
                </View>
            </View>
            <Text style={styles.changeText}>Change date & time</Text>
            <View style={{ flexDirection: 'row', width: '90%', marginTop:'5%' }}>
                <Image source={require('../../assets/images/appDoc.png')} style={{ width: 77, height: 98 }} />
                <View style={{ paddingLeft: '5%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{singleData?.fullName}</Text>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '5%' }}>{singleData?.specialization}</Text>
                    {/* <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '5%' }}>Pediatrician</Text> */}
                </View>
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingLeft: '5%', marginTop: '5%' }}>{singleData?.registrationCouncil}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '100%', paddingLeft: '5%', marginTop: '5%' }}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: '100%', paddingLeft: '5%', marginTop: '5%' }}>Get Directions</Text>
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('AppointmentCancel')} style={[styles.buttonSubContainer, { backgroundColor: colors.grey }]}>
                    <Text style={styles.buttonText}>Cancel Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Reschedule')} style={[styles.buttonSubContainer, { backgroundColor: colors.blue }]}>
                    <Text style={styles.buttonText}>Reshedule</Text>
                </TouchableOpacity>
            </View> */}
            <Text style={{fontSize:13, fontFamily:'Gilroy-Medium', color:colors.grey, width:'90%', marginTop:'10%'}}>You can follow up or check your Consultations Details by clicking my consultations button.</Text>
            <View style={{width:'100%', alignItems:'center', marginTop:'10%'}}>
                <Button1 Text="Chat" left={<Image source={require('../../assets/images/chat6.png')} style={{height:20, width:20, marginRight:10}}/>} onPress={()=>navigation.navigate('Chat2')}/>
            </View>
        </View>
    )
}