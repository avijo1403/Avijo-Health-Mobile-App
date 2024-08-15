import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible2 from "../../components/Collapsible2";
import Collapsible7 from "../../components/Collapsible7";

export default function AddQuestion({navigation}) {



    const QuestionData=()=>{
        return(
            <View style={styles.container}>
                <View style={{width:'90%', alignItems:'center', flexDirection:'row', marginTop:"10%"}}>
                    <Image source={require('../../assets/images/appDoc.png')} style={{height:84, width:64}}/>
                    <View style={{paddingLeft:'5%'}}>
                        <Text style={{fontSize:18, fontFamily:"Gilroy-SemiBold", color:colors.black}}>Dr. Sunil Puraswani</Text>
                        <Collapsible7 text="Public"/>
                    </View>
                </View>
                <TextInput
                style={{fontSize:18, fontFamily:"Gilroy-Regular", color:colors.black, width:'90%', marginTop:'5%', width:330}}
                placeholder="Start your Question from here........"
                verticalAlign="top"
                placeholderTextColor={colors.grey}
                multiline={true}
                />
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.blue, paddingBottom: '1%' }}>
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source={require('../../assets/images/leftWhite.png')} style={{ height: 14, width: 15 }} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Add Question</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: "17%", justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/add1.png')} style={{ height: 26, width: 60 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                <QuestionData/>
            </ScrollView>
        </View>
    )
}