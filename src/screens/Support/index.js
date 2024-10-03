import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import SupportInput from "../../components/SupportInput";
import Button2 from "../../components/Button2";

export default function Support({navigation}){

    return(
        <View style={styles.container}>
            <ArticleHeader onBack={()=>navigation.goBack()} text="Support"/>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:"center"}}>
                <Text style={{fontSize:24, fontFamily:'Gilroy-SemiBold', color:colors.green, width:'90%', marginTop:'8%'}}>How may help you?</Text>
                <Text style={{fontSize:18, fontFamily:'Gilroy-Medium', color:colors.black, width:'90%', marginTop:'3%'}}>Let us know your queries and feedback.</Text>
                <SupportInput text="EMAIL ADDRESS" placeholder="Enter Email Address"/>
                <SupportInput text="MOBILE NUMBER" placeholder="Enter Mobile Number"/>
                <Text style={{fontSize:18, fontFamily:'Gilroy-Medium', color:colors.black, width:'90%', marginTop:'8%', paddingLeft:'2%'}}>Enter your message</Text>
                <TextInput
                style={{height:100, borderWidth:1, width:'80%', alignSelf:'flex-start', marginLeft:'5%', marginTop:'5%', borderRadius:8, borderColor:'#E1BCB7', paddingLeft:15, fontSize:24, fontFamily:'Gilroy-Medium'}}
                placeholder="Eg: ......"
                placeholderTextColor={colors.grey}
                textAlignVertical="top"
                />
                <View style={{width:'100%', alignItems:'center', marginTop:'10%'}}>
                    <Button2 Text="Submit" backgroundColor={colors.green} onPress={()=>navigation.navigate('Address')}/>
                </View>
            </ScrollView>
        </View>
    )
}