import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HomeHeader from "../../components/HomeHeader";
import SymptomCard from "../../components/SymptomCard";
import CategoryCard from "../../components/CategoryCard";
import { BaseUrl2, common, data, data2, getData, offerData, symptomData } from "../../assets/Data";
import { colors, wp } from "../../Theme/GlobalTheme";
import ImageSlider from "react-native-image-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SymptomCard2 from "../../components/SymptomCard2";
import SearchItem from "../../components/SearchItem";
import SearchItem2 from "../../components/SearchItem2";

export default function Home({ navigation }) {
    const [position, setPosition] = useState(0);
    const [columns, setColumns] = useState(4);
    const commonLimit = common.slice(0, 8);
    const [doctorData, setDoctorData] = useState([]);
    const [id, setId] = useState();



    const fetchDoctorData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/user/getDoctorConsultations`);
            const json = await response.json();
            setDoctorData(json.consultations);
            console.log('data:', json);
        } catch (e) {
            console.log('error:', e);
        }
    };

    const move = (index) => {
        const newPosition = index >= offerData.length ? 0 : index;
        setPosition(newPosition);
    };

    useEffect(() => {
        fetchDoctorData();
        getData('token').then(token => console.log('token:', token));
        getData('id').then(id => setId(id));
    }, []);

    return (
        <View style={styles.container}>
            <HomeHeader profile={true} heading="avijo" headingColor={colors.blue} onPress={() => navigation.navigate('Profile', { id: id })} createPress={() => navigation.navigate('AbhaLogin')} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}>
                <View style={{ width: '100%', backgroundColor: colors.white, paddingBottom: '10%' }}>
                    {/* <Text style={styles.heading}>Your Medication Services Partner</Text> */}
                    <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%'}}>
                        <SearchItem2 right={require('../../assets/images/micGrey2.png')} rightHeight={32} rightWidth={32}/>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginRight: '2%' }}>
                        <SymptomCard2 image={require('../../assets/images/bookClinic.png')} image2={require('../../assets/images/rightCircle.png')} text="Book In-Clinic Appointment" bottomText="UP TO 10 % OFF" bottomBackground={colors.skyblue} bottomColor={colors.blue} onPress={() => navigation.navigate('FindDoctor')} />
                        <SymptomCard2 image={require('../../assets/images/videoCall.png')} image2={require('../../assets/images/rightCircle.png')} text="Instant Video Consultation" bottomText="UP TO 10 % OFF" bottomBackground={colors.skyblue} bottomColor={colors.blue} onPress={() => navigation.navigate('OnlineConsult')} />
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginRight: '2%', marginTop: '5%' }}>
                        <SymptomCard2 image={require('../../assets/images/orderMed.png')} image2={require('../../assets/images/rightCircle.png')} text="Book In-Clinic Appointment" bottomText="UP TO 10 % OFF" bottomBackground={colors.lightGreen2} bottomColor={colors.green} onPress={() => navigation.navigate('FindDoctor')} />
                        <SymptomCard2 image={require('../../assets/images/bookTest.png')} image2={require('../../assets/images/rightCircle.png')} text="Instant Video Consultation" bottomText="UP TO 10 % OFF" bottomBackground={colors.lightGreen2} bottomColor={colors.green} onPress={() => navigation.navigate('OnlineConsult')} />
                    </View>
                    {/* <View style={{
                        width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginRight: '2%', marginTop: '5%'
                    }}>
                        {data.map((item) => (
                            <SymptomCard key={item.text} image={item.image} text={item.text} onPress={() => navigation.navigate(item.navigate)} />
                        ))}
                    </View> */}
                    {/* <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginRight: '2%', marginTop: '3%' }}>
                        {data2.map((item) => (
                            <SymptomCard key={item.text} image={item.image} text={item.text} onPress={() => navigation.navigate(item.navigate)} />
                        ))}
                    </View> */}
                </View>
                <View style={styles.viewAllContainer}>
                    <Text style={styles.viewText}>Offers</Text>
                    <TouchableOpacity>
                        <Text style={styles.view}>Show All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', paddingRight: '5%' }}>
                    <ImageSlider
                        loopBothSides
                        images={offerData}
                        position={position}
                        onPositionChanged={setPosition}
                        customSlide={({ index, item }) => (
                            <View key={index} style={styles.slide}>
                                <Image source={item} style={styles.image} />
                            </View>
                        )}
                        customButtons={(position) => (
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between' }}>
                                {offerData.map((image, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        underlayColor="#ccc"
                                        onPress={() => move(index)}
                                        style={[
                                            {
                                                backgroundColor: position === index ? colors.blue : colors.grey,
                                                marginTop: '2%',
                                                height: position === index ? 8 : 6,
                                                width: position === index ? 8 : 6,
                                                borderRadius: 5,
                                                margin: 5,
                                            },
                                        ]}
                                    />
                                ))}
                            </View>
                        )}
                    />
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', alignSelf: 'center', marginTop: '5%' }}>Best Specialists for Your Health Concerns</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '90%', alignSelf: 'center', marginTop: '2%' }}>Book Your Appointment for Personalized Medical Solutions</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                        data={doctorData}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={{ padding: 20, borderWidth: 1, borderRadius: 20, borderColor: colors.lightgrey, width: 260, marginRight: 10, marginTop: 20, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../assets/images/doctor1.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                                    <View style={{ paddingLeft: '5%' }}>
                                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>{item.speciality}</Text>
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.yellow, paddingLeft: 5 }}>4.0</Text>
                                            <Image source={require('../../assets/images/star.png')} style={{ height: 12, width: 12, marginLeft: 2 }} />
                                        </View>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, padding: 5, width: '90%' }}>Date & Time</Text>
                                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5 }}>
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: colors.lightgrey, alignItems: 'center', borderRadius: 6 }}>
                                        <Image source={require('../../assets/images/Calendar.png')} style={{ width: 12, height: 14 }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.blueText }}>20 Jan 2021</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', padding: 10, backgroundColor: colors.lightgrey, alignItems: 'center', borderRadius: 6 }}>
                                        <Image source={require('../../assets/images/Time.png')} style={{ width: 14, height: 14 }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.blueText }}>12pm-5pm</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.viewAllContainer}>
                    <Text style={styles.viewText}>Most Common Symptoms</Text>
                </View>
                <View style={{ width: '100%', paddingRight: '5%' }}>
                    <FlatList
                        style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                        data={symptomData}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <CategoryCard key={item.text} onPress={() => navigation.navigate('Articles')} image={item.image} text={item.text} />
                        )}
                    />
                </View>
                <View style={styles.viewAllContainer}>
                    <Text style={styles.viewText}>Common Health Issues</Text>
                </View>
                <View style={{ width: '100%', paddingRight: '5%' }}>
                    <FlatList
                        style={{ marginRight: 5, marginLeft: '5%', width: '100%' }}
                        contentContainerStyle={{ justifyContent: 'space-between' }}
                        data={commonLimit}
                        numColumns={columns}
                        key={columns}
                        renderItem={({ item, index }) => (
                            index < 7 || index < columns.length ? (
                                <CategoryCard key={item.text} onPress={() => navigation.navigate('OnlineConsult')} image={item.image} text={item.text} circle={true} />
                            ) : (
                                <TouchableOpacity key="viewAll" style={{ borderWidth: 1, borderRadius: 58, height: 72, width: 72, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderColor: colors.grey }}>
                                    <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', textDecorationLine: 'underline', color: colors.blue }}>View All</Text>
                                </TouchableOpacity>
                            )
                        )}
                    />
                </View>
                <View style={{ width: '100%', padding: 20, backgroundColor: colors.lightgrey, marginTop: '5%' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.grey, width: wp(80) }}>India's Best Health Guardian</Text>
                    <Image source={require('../../assets/images/avijo.png')} style={{ height: 35, width: 54, marginTop: 5 }} />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', padding: 15, alignItems: 'center', borderTopWidth: 1, borderColor: colors.lightgrey, paddingTop: '5%' }}>
                    <Image source={require('../../assets/images/delivery.png')} style={{ width: 74, height: 72 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Get Free Delivery</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Offer valid for a limited time only!</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
