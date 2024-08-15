import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, offerData } from "../../assets/Data";

export default function HealthRecords({ navigation }) {

    const [userRecord, setUserRecord] = useState([]);

    const fetchUserRecord= async()=>{
        const response = await fetch(`${BaseUrl2}/user/ElectronicHealth/all`);
        const json = await response.json();
        setUserRecord(json.data);
        console.log('json:', json.data);
    }

    useEffect(()=>{
        fetchUserRecord();
    },[]);

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Health Records" showSearch={true} image={<Image source={require('../../assets/images/addUser.png')} style={{height:24, width:24}}/>} />
            <ScrollView style={{width:'100%'}} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingBottom: '5%', marginTop: '5%', width: '90%', alignItems: 'center', }}
                        data={userRecord}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>navigation.navigate('SaveUser',{id:item._id})} style={{ borderWidth: 1, width: '100%', flexDirection: 'row', padding: '5%', borderColor: colors.lightgrey }}>
                                <Image source={require('../../assets/images/healthrecord.png')} style={{ height: 72, width: 72 }} />
                                <View style={{ paddingLeft: '5%', width: '70%' }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>{item.name}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '3%' }}>{item.relation}</Text>
                                </View>
                                <Image source={require('../../assets/images/right2.png')} style={{height:32, width:32, alignSelf:'center'}}/>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AddNewUser')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/add3.png')} style={{ height: 14, width: 14 }} />
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.lightGreen, paddingLeft: '2%' }}>Add New Users</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}