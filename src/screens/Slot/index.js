import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors, hp } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";

export default function Slot({ navigation }) {

    const [select, setSelect] = useState(1);
    const [select2, setSelect2] = useState(1);
    const [available, setAvailable] = useState(1);

    const handleSelect = (no) => {
        setSelect(no);
    }
    const handleSelect2 = (no) => {
        setSelect2(no);
    }
    const handleAvailable=(no)=>{
        setAvailable(no);
    }

    return (
        <View style={styles.container}>
            <HeaderItem text="My Booking Slot" onBack={() => navigation.goBack()} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Choose a Slot</Text>
                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: '90%', marginTop: '3%' }}>Select Date</Text>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%' }}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { backgroundColor: colors.white, borderColor: select === 1 ? colors.blue : colors.grey }]}>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 1 ? colors.blue : colors.grey }}>6 July</Text>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 1 ? colors.blue : colors.grey, marginTop: hp(1) }}>Tomorrow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { backgroundColor: colors.white, borderColor: select === 2 ? colors.blue : colors.grey }]}>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 2 ? colors.blue : colors.grey }}>7 July</Text>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 2 ? colors.blue : colors.grey, marginTop: hp(1) }}>Tuesday</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={[styles.tabContainer, { backgroundColor: colors.white, borderColor: select === 3 ? colors.blue : colors.grey }]}>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 3 ? colors.blue : colors.grey }}>8 July</Text>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 3 ? colors.blue : colors.grey, marginTop: hp(1) }}>Wednesday</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(4)} style={[styles.tabContainer, { backgroundColor: select === 4 ? colors.blue : colors.white, borderColor: select === 4 ? colors.blue : colors.grey }]}>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 4 ? colors.blue : colors.grey }}>9 July</Text>
                        <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 8, color: select === 4 ? colors.blue : colors.grey, marginTop: hp(1) }}>Thursday</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '7%', borderBottomWidth:1, borderColor:colors.lightgrey }}>
                    <TouchableOpacity onPress={()=>handleSelect2(1)} style={{borderBottomWidth:select2 === 1?2:0, borderColor:colors.blue, width:'29%', alignItems:'center'}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:select2 === 1?colors.blue:colors.black, paddingBottom:'10%'}}>Morning</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={()=>handleSelect2(2)} style={{borderBottomWidth:select2 === 2?2:0, borderColor:colors.blue, width:'29%', alignItems:'center'}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:select2 === 2?colors.blue:colors.black, paddingBottom:'10%'}}>Afternoon</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={()=>handleSelect2(3)} style={{borderBottomWidth:select2 === 3?2:0, borderColor:colors.blue, width:'29%', alignItems:'center'}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:select2 === 3?colors.blue:colors.black, paddingBottom:'10%'}}>Evening</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'90%', justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:'5%'}}>
                <TouchableOpacity onPress={()=>setAvailable(1)} style={{borderWidth:1, borderRadius:16, width:'48%', alignItems:'center', borderColor: available === 1?colors.blue:colors.lightgrey, height:87}}>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium',color:available === 1?colors.white:colors.black, textAlign:'center', height:30, backgroundColor: available === 1?colors.blue:colors.lightgrey, width:'100%', paddingTop:'3%', borderTopRightRadius:16, borderTopLeftRadius:16}}>{available === 1?'Selected':'Available'}</Text>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.black, paddingTop:'10%'}}>6:00 AM - 8:00 PM</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAvailable(2)} style={{borderWidth:1, borderRadius:16, width:'48%', alignItems:'center', borderColor: available === 2?colors.blue:colors.lightgrey, height:87}}>
                <Text style={{fontSize:14, fontFamily:'Gilroy-Medium',color:available === 2?colors.white:colors.black, textAlign:'center', height:30, backgroundColor: available === 2?colors.blue:colors.lightgrey, width:'100%', paddingTop:'3%', borderTopRightRadius:16, borderTopLeftRadius:16}}>{available === 2?'Selected':'Available'}</Text>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.black, paddingTop:'10%'}}>6:00 AM - 8:00 PM</Text>
                </TouchableOpacity>
                </View>
                <View style={{width:'90%', justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:'5%'}}>
                <TouchableOpacity onPress={()=>setAvailable(3)} style={{borderWidth:1, borderRadius:16, width:'48%', alignItems:'center', borderColor: available === 3?colors.blue:colors.lightgrey, height:87}}>
                <Text style={{fontSize:14, fontFamily:'Gilroy-Medium',color:available === 3?colors.white:colors.black, textAlign:'center', height:30, backgroundColor: available === 3?colors.blue:colors.lightgrey, width:'100%', paddingTop:'3%', borderTopRightRadius:16, borderTopLeftRadius:16}}>{available === 3?'Selected':'Available'}</Text>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.black, paddingTop:'10%'}}>6:00 AM - 8:00 PM</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setAvailable(4)} style={{borderWidth:1, borderRadius:16, width:'48%', alignItems:'center', borderColor: available === 4?colors.blue:colors.lightgrey, height:87}}>
                <Text style={{fontSize:14, fontFamily:'Gilroy-Medium',color:available === 4?colors.white:colors.black, textAlign:'center', height:30, backgroundColor: available === 4?colors.blue:colors.lightgrey, width:'100%', paddingTop:'3%', borderTopRightRadius:16, borderTopLeftRadius:16}}>{available === 4?'Selected':'Available'}</Text>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.black, paddingTop:'10%'}}>6:00 AM - 8:00 PM</Text>
                </TouchableOpacity>
                </View>
                <View style={{width:'90%', justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginTop:'5%'}}>
                <TouchableOpacity style={{borderWidth:1, borderRadius:16, width:'48%', alignItems:'center', borderColor:colors.grey, height:87}}>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium',color:colors.black, textAlign:'center', height:30, backgroundColor:colors.grey, width:'100%', paddingTop:'3%', borderTopRightRadius:16, borderTopLeftRadius:16}}>Not Available</Text>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.black, paddingTop:'10%'}}>6:00 AM - 8:00 PM</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>setAvailable(6)} style={{borderWidth:1, borderRadius:16, width:'48%', alignItems:'center', borderColor: available === 6?colors.blue:colors.lightgrey, height:87}}>
                <Text style={{fontSize:14, fontFamily:'Gilroy-Medium',color:available === 6?colors.white:colors.black, textAlign:'center', height:30, backgroundColor: available === 6?colors.blue:colors.lightgrey, width:'100%', paddingTop:'3%', borderTopRightRadius:16, borderTopLeftRadius:16}}>{available === 6?'Selected':'Available'}</Text>
                    <Text style={{fontSize:14, fontFamily:'Gilroy-Medium', color:colors.black, paddingTop:'10%'}}>6:00 AM - 8:00 PM</Text>
                </TouchableOpacity>
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%'}}>
                    <Button1 Text="Continue"/>
                </View>
            </ScrollView>
        </View>
    )
}