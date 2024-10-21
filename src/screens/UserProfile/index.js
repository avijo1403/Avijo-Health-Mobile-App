import React, { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import { Image } from "react-native";
import { BaseUrl2, profileOption } from "../../assets/Data";
import HeaderItem2 from "../../components/HeaderItem2";
import HeaderItem from "../../components/HeaderItem";
import Button2 from "../../components/Button2";
import Button3 from "../../components/Button3";

export default function UserProfile({ navigation }) {

    const [select, setSelect] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const Profile = () => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Profile</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                        <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/profileName.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>Dr. Sunil Puraswani</Text>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%" }}>Just now</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>Hlo</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 7, borderWidth: 1, borderColor: colors.grey }}>
                                <Image source={require('../../assets/images/blueUp.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Upvote</Text>
                                <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: "5%" }}>
                                <Image source={require('../../assets/images/chat1.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '5%', padding: '3%', elevation: 5, backgroundColor: colors.white, marginBottom: '5%' }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>How do I care for my health without doing anything?</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '2%', borderRadius: 100, borderWidth: 1, borderColor: colors.blue }}>
                            <Image source={require('../../assets/images/blueShare3.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Answers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const Questions = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>16 Questions</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                        <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, elevation: 5, borderColor: colors.lightgrey, padding: '5%', marginTop: '5%', padding: '3%', backgroundColor: colors.white, marginBottom: '5%' }}>
                    <View style={{ width: '95%', alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "99%" }}>Do real fighter pilots really fly around with their masks hanging loose half the time like they do in the movies?</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, width: "95%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '30%', backgroundColor: colors.lightgrey, borderRadius: 50, padding: '2%' }}>
                                <Image source={require('../../assets/images/ans.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Answer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '15%', justifyContent: 'space-between', marginTop: '4%' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, elevation: 5, borderColor: colors.lightgrey, padding: '5%', marginTop: '5%', padding: '3%', backgroundColor: colors.white, marginBottom: '5%' }}>
                    <View style={{ width: '95%', alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "99%" }}>Do real fighter pilots really fly around with their masks hanging loose half the time like they do in the movies?</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, width: "95%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', width: '30%', backgroundColor: colors.lightgrey, borderRadius: 50, padding: '2%' }}>
                                <Image source={require('../../assets/images/ans.png')} style={{ height: 12, width: 12, marginLeft: '5%' }} />
                                <Text style={{ marginLeft: '5%', fontSize: 12, fontWeight: '500', color: colors.darkGrey }}>Answer</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '15%', justifyContent: 'space-between', marginTop: '4%' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }


    const Answers = () => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Profile</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                        <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '3%', padding: '3%', elevation: 5, backgroundColor: colors.white }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/profileName.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ width: '80%', alignItems: 'center', paddingLeft: '5%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>Stuff man have to deal with</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue, width: "100%" }}>Answered by Anthony 7h</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.black, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>How do I care for my health without doing anything?</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '3%', paddingLeft: '2%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '2%' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '3%', borderRadius: 7, borderWidth: 1, borderColor: colors.grey }}>
                                <Image source={require('../../assets/images/blueUp.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Upvote</Text>
                                <Image source={require('../../assets/images/greyDown.png')} style={{ height: 16, width: 16, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: "5%" }}>
                                <Image source={require('../../assets/images/chat.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/again.png')} style={{ height: 20, width: 20, marginLeft: '5%' }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, borderRadius: 5, marginTop: '5%', padding: '3%', elevation: 5, backgroundColor: colors.white, marginBottom: '5%' }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%" }}>How do I care for my health without doing anything?</Text>
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: "100%", marginTop: '5%' }}>No answer yet . Last followed 14m</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: '2%', borderRadius: 100, borderWidth: 1, borderColor: colors.blue }}>
                            <Image source={require('../../assets/images/blueShare3.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Answers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/horizontalDots.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }


    const Followers = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>16 Following</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Most Recent</Text>
                        <Image source={require('../../assets/images/downGrey.png')} style={{ height: 16, width: 16 }} />
                    </View>
                </View>
                {profileOption && profileOption.length > 0 && profileOption.map((item) => (<View style={[styles.container, { marginTop: '5%' }]}>
                    <View style={{ width: '90%', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey, borderRadius: 5, marginTop: '3%', padding: '3%', backgroundColor: colors.white }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/available3.png')} style={{ height: 32, width: 32, borderRadius: 5 }} />
                            <View style={{ width: '90%', alignItems: 'center', paddingLeft: '5%' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "100%", marginTop: '2%' }}>Assignment Forum</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue, width: "100%", marginTop: '2%' }}>32K followers</Text>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.grey, width: "100%", marginTop: '2%' }}>Questions and discussions regarding academia, assignments, homework, school, etc.</Text>
                            </View>
                        </View>
                    </View>
                </View>))}
            </>
        )
    }

    function HealthRecords() {

        const [userRecord, setUserRecord] = useState([]);

        const fetchUserRecord = async () => {
            const response = await fetch(`${BaseUrl2}/user/ElectronicHealth/all`);
            const json = await response.json();
            setUserRecord(json.data);
            console.log('json:', json.data);
        }

        useEffect(() => {
            fetchUserRecord();
        }, []);

        return (
            <View style={{ flex: 1, width: "100%", alignItems: 'center' }}>
                {/* <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}> */}
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '8%' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Members</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AddNewUser')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 7, paddingLeft: 12, paddingRight: 12, backgroundColor: colors.blue, borderRadius: 6 }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Add</Text>
                        </TouchableOpacity>
                    </View> */}
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingBottom: '5%', marginTop: '5%', width: '90%', alignItems: 'center', }}
                        data={userRecord}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('MedicalRecord')} style={{ width: '100%', flexDirection: 'row', padding: '5%', alignItems: 'flex-start' }}>
                                <Image source={require('../../assets/images/healthrecord.png')} style={{ height: 50, width: 50 }} />
                                <View style={{ paddingLeft: '5%', width: '80%' }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>{item.name}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginTop: '3%' }}>{item.relation}</Text>
                                </View>
                                {index === 0 ? <Image source={require('../../assets/images/redTick.png')} style={{ height: 20, width: 20, alignSelf: 'center' }} /> : <View style={{ height: 20, width: 20, alignSelf: 'center' }} />}
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: '5%' }}>
                    <Image source={require('../../assets/images/add5.png')} style={{ height: 40, width: 40 }} />
                    <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft:'2%' }}>Add Health Account</Text>
                </TouchableOpacity>
                {/* </ScrollView> */}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '5%', backgroundColor: colors.white, paddingTop: '10%' }}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Alicia</Text>
                    <Image source={require('../../assets/images/down.png')} style={{ height: 10, width: 10, marginLeft: 5, marginTop: '3%' }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/blackAdd.png')} style={{ height: 26, width: 26, }} />
                    <Image source={require('../../assets/images/blackLines.png')} style={{ height: 26, width: 26, marginLeft: 10 }} />
                </View>
            </View>
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%", padding: '3%', borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, elevation: 5, backgroundColor: colors.white }}>
                    <Image source={require('../../assets/images/healthrecord.png')} style={{ height: 72, width: 72 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Alicia Johns</Text>
                        {/* <Text style={{ fontSize: 10, fontFamily: "Gilroy-Medium", color: colors.darkGrey, marginTop: '3%' }}>-070676-35032</Text> */}
                        <Text style={{ fontSize: 14, fontFamily: "Gilroy-Medium", color: colors.darkGrey, marginTop: '3%' }}>24 Years Old</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ width: "90%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginLeft: "2%", marginTop: '5%' }}>
                    <View style={{ width: "52%" }}>
                        <Button3 onPress={() => navigation.navigate('Profile')} left={<Image source={require('../../assets/images/edit2.png')} style={{ height: 16, width: 16, marginRight: '5%' }} />} Text="Edit Profile" />
                    </View>
                    <View style={{ width: "52%" }}>
                        <Button3 left={<Image source={require('../../assets/images/blueShare2.png')} style={{ height: 20, width: 20, marginRight: '5%' }} />} Text="Share" />
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        data={profileOption}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ marginLeft: '5%', paddingRight: '5%', marginTop: "7%" }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelect(item.id)} style={{ width: 110, alignItems: 'center', borderBottomWidth: 2, borderColor: colors.grey }}>
                                <Text style={{ width: 110, textAlign: 'center', paddingBottom: '5%', fontSize: 14, fontFamily: 'Gilory-Medium', borderBottomWidth: 2, borderColor: select === item.id ? colors.blue : colors.white, color: select === item.id ? colors.blue : colors.black }}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                {select === 0 && <Questions />}
                {select === 1 && <Answers />}
                {select === 2 && <Followers />}
                {select === 3 && <HealthRecords />}
            </ScrollView>

            <Modal
                // animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: colors.blackTrasparent }}>
                    <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.white, backgroundColor: colors.white, maxHeight: '70%' }}>
                        <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                            <HealthRecords />
                        </ScrollView>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}