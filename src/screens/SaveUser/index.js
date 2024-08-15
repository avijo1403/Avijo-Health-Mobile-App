import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, hp, wp } from "../../Theme/GlobalTheme";
import { LineChart } from "react-native-chart-kit";
import Button2 from "../../components/Button2";
import { BaseUrl2 } from "../../assets/Data";

export default function SaveUser({navigation, route}) {

    const id = route.params.id;

    const data1 = [{ value: 0 }, { value: 80 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }];
    const data2 = [{ value: 30 }, { value: 40 }, { value: 80 }, { value: 50 }, { value: 90 }, { value: 20 }];

    const [userRecord, setUserRecord] = useState({});

    const fetchUserRecord= async()=>{
        const response = await fetch(`${BaseUrl2}/user/ElectronicHealth/${id}`);
        const json = await response.json();
        setUserRecord(json.data);
        console.log('json:', json.data);
    }

    useEffect(()=>{
        fetchUserRecord();
    },[]);

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
        datasets: [
            {
                data: [0, 7, 0, 0, 0],
                color: (opacity = 1) => colors.lightGreen, // red color
                strokeWidth: 1,
            },
            {
                data: [0, 9, 0, 0, 0],
                color: (opacity = 1) => colors.lightGreen, // blue color
                strokeWidth: 1,
            }
        ],
    };


    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <ArticleHeader text={userRecord.name} showSearch={true} image={<Text style={{ color: colors.white, fontSize: 12, fontFamily: 'Gilroy-SemiBold' }}>Age,49 years</Text>} onBack={()=>navigation.goBack()} />
                <View style={{ marginLeft: wp(5), marginTop: hp(5), alignItems: 'center' }}>
                    <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>BODY MASS INDEX</Text>
                    <Text style={{ fontSize: 7, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>17.30</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <View>
                        <View style={{ marginLeft: wp(10), alignItems: 'center' }}>
                            <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>HEIGHT</Text>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>170.00CMS</Text>
                        </View>
                        <View style={{ marginRight: wp(5), marginTop: hp(2), alignItems: 'center' }}>
                            <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>TEMPERATURE</Text>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{userRecord.temperature} F</Text>
                        </View>
                    </View>
                    <View style={{ width: '30%', borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>
                        <Image source={require('../../assets/images/chart.png')} style={{ height: 54, width: '100%', marginTop: '5%', resizeMode: 'contain' }} />
                    </View>
                    <View>
                        <View style={{ marginRight: wp(10), alignItems: 'center' }}>
                            <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>WEIGHT</Text>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{userRecord.weight} KG</Text>
                        </View>
                        <View style={{ marginLeft: wp(5), marginTop: hp(2), alignItems: 'center' }}>
                            <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>PULSE RATE</Text>
                            <Text style={{ fontSize: 7, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>150.00bpm</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginLeft: wp(5), marginTop: hp(1), alignItems: 'center' }}>
                    <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}>BODY PRESSURE</Text>
                    <Text style={{ fontSize: 7, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{userRecord.bloodPressure} mmHg</Text>
                </View>
                <View style={{ height: 1, width: '60%', backgroundColor: colors.grey, marginTop: '3%' }} />
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Last update 02 june 2024</Text>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen }}> update vital</Text>
                </View>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 5, width: 5, borderRadius: 10, backgroundColor: colors.red }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen, paddingLeft: '2%' }}>HEIGHT</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>170.00CMS</Text>
                </View>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 5, width: 5, borderRadius: 10, backgroundColor: colors.blue }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen, paddingLeft: '2%' }}>PULSE RATE</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>150.00bpm</Text>
                </View>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 5, width: 5, borderRadius: 10, backgroundColor: colors.green }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.lightGreen, paddingLeft: '2%' }}>WEIGHT</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{userRecord.weight} KG</Text>
                </View>
                <LineChart
                    data={chartData}
                    width={Dimensions.get('window').width - 16}
                    height={200}
                    withHorizontalLabels={false} // Remove Y-axis labels
                    chartConfig={{
                        backgroundColor: colors.white,
                        backgroundGradientFrom: colors.white,
                        backgroundGradientTo: colors.white,
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForBackgroundLines: {
                            stroke: 'transparent', // Remove background lines
                        },
                        strokeWidth: 1, // Stroke width of the lines
                    }}
                    style={{
                        borderRadius: 16,
                        marginVertical: 8,
                        alignSelf: 'center',
                    }}
                />
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>TIMELINE</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '2%', paddingRight: '2%' }}>14/12</Text>
                        <Image source={require('../../assets/images/calendar5.png')} style={{ height: 9.2, width: 9.2 }} />
                        <Text style={{ fontSize: 8, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '2%', paddingRight: '2%' }}>TO   14/06</Text>
                        <Image source={require('../../assets/images/calendar5.png')} style={{ height: 9.2, width: 9.2 }} />
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: colors.lightGreen, height: hp(5), width: wp(25), alignItems: 'center', justifyContent: 'center', borderRadius: 5, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Jun`24</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginLeft: '5%', marginTop: '2%' }}>
                    <View style={{ height: 5, width: 5, borderRadius: 10, backgroundColor: colors.lightGreen }} />
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '5%' }}>Prescription</Text>
                </View>
                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.lightGreen, width: '77%', marginTop: '2%' }}>Order date: <Text style={{ color: colors.black }}>14 JUN 2024</Text></Text>
                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.lightGreen, width: '77%', marginTop: '2%' }}>COMPLETED</Text>
                <View style={{ width: '100%', alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}>
                    <Button2 Text="Save Users" backgroundColor={colors.lightGreen} onPress={() => navigation.navigate('UploadDoc')} />
                </View>
            </ScrollView>
        </View>
    );
}
