import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, View, Alert } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible2 from "../../components/Collapsible2";
import Button2 from "../../components/Button2";
import { BaseUrl2 } from "../../assets/Data";
import HeaderItem from "../../components/HeaderItem";

export default function AddNewUser({ navigation}) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [temperature, setTemperature] = useState('');
    const [relation, setRelation] = useState('');
    const [id, setId] = useState(0);


    const handleSaveUser = async () => {

        // if(!name || !email || !mobileNo ){
        //     return;
        // }
        const data = {
            name,
            email,
            mobileNo,
            gender,
            relation,
            weight,
            bloodPressure,
            temperature,
        };
    
        try {
            console.log('Sending data:', data);  // Log the data being sent
            const response = await fetch(`${BaseUrl2}/user/ElectronicHealth/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                console.log('Error response:', errorResponse); // Log the error response
                throw new Error(errorResponse.message || 'Failed to save user');
            }
    
            const jsonResponse = await response.json();
            console.log('Response data:', jsonResponse); // Log the response data
    
            // Check if the response contains the expected data and an _id field
            if(email && name && mobileNo && gender && weight && relation && bloodPressure && temperature ){
            if (jsonResponse && jsonResponse.data && jsonResponse.data._id) {
                Alert.alert('Success', 'User saved successfully');
                navigation.navigate('SaveUser',{id:jsonResponse.data._id});
            } else {
                Alert.alert('Error', jsonResponse.message || 'Unexpected response structure');
            }
        }else{
            navigation.navigate('SaveUser',{id:'669500cdc84a50ef685495c9'});
        }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', error.message || 'An error occurred while saving the user');
        }
    };
    
    
    

    return (
        <View style={styles.container}>
            <HeaderItem onBack={() => navigation.goBack()} text="Add New User" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '90%', flexDirection: 'row', paddingTop: '5%', borderColor: colors.lightgrey, alignItems: 'center' }}>
                    <Image source={require('../../assets/images/healthrecord.png')} style={{ height: 100, width: 100 }} />
                    <View style={{ paddingLeft: '5%', width: '80%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>Alicia Johns</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '1%' }}>24 Years Old</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, marginTop: '1%' }}>Relation: <Text style={{ color: colors.darkGrey }}>Daughter</Text></Text>
                    </View>
                </View>
                <Text style={{ fontSize: 21, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>User Detail</Text>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>NAME</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name "
                    placeholderTextColor={colors.darkGrey}
                    value={name}
                    onChangeText={setName}
                />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>EMAIL</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Email "
                    placeholderTextColor={colors.darkGrey}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Mobile number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Mobile number"
                    placeholderTextColor={colors.darkGrey}
                    value={mobileNo}
                    onChangeText={setMobileNo}
                />
                <Collapsible2 heading="Gender" content={["Male", "Female"]} text="Select your Gender" />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Weight</Text>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', marginTop: '3%', alignItems: 'center', borderWidth: 1, height: 48, borderRadius: 5, borderColor: colors.grey }}>
                    <TextInput
                        style={{ width: '70%', fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black }}
                        placeholder="Enter your Weight"
                        placeholderTextColor={colors.darkGrey}
                        value={weight}
                        onChangeText={setWeight}
                    />
                    <Text style={{ width: '20%', fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, textAlign: 'right' }}>KG</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Height</Text>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', marginTop: '3%', alignItems: 'center', borderWidth: 1, height: 48, borderRadius: 5, borderColor: colors.grey }}>
                    <TextInput
                        style={{ width: '70%', fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black }}
                        placeholder="Enter your Height"
                        placeholderTextColor={colors.darkGrey}
                        value={height}
                        onChangeText={setHeight}
                    />
                    <Text style={{ width: '20%', fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, textAlign: 'right' }}>CM</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Blood Pressure</Text>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', marginTop: '3%', alignItems: 'center', borderWidth: 1, height: 48, borderRadius: 5, borderColor: colors.grey }}>
                    <TextInput
                        style={{ width: '60%', fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black }}
                        placeholder="Enter your BP"
                        placeholderTextColor={colors.darkGrey}
                        value={bloodPressure}
                        onChangeText={setBloodPressure}
                    />
                    <Text style={{ width: '32%', fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, textAlign: 'right' }}>70/120mmHg</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Temperature</Text>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', marginTop: '3%', alignItems: 'center', borderWidth: 1, height: 48, borderRadius: 5, borderColor: colors.grey }}>
                    <TextInput
                        style={{ width: '70%', fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black }}
                        placeholder="Enter temperature"
                        placeholderTextColor={colors.darkGrey}
                        value={temperature}
                        onChangeText={setTemperature}
                    />
                    <Text style={{ width: '20%', fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, textAlign: 'right' }}>*F</Text>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-Medium', color: colors.black, width: '90%', marginTop: '5%' }}>Relation</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Relation"
                    placeholderTextColor={colors.darkGrey}
                    value={relation}
                    onChangeText={setRelation}
                />
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button2 Text="Save Users" backgroundColor={colors.blue} onPress={handleSaveUser} />
                </View>
            </ScrollView>
        </View>
    )
}
