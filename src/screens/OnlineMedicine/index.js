import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Modal, Pressable, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, wp } from "../../Theme/GlobalTheme";
import { conditions, data2, hilight, product, productCategory, shopCategory } from "../../assets/Data";
import SearchItem2 from "../../components/SearchItem2";
import ArticleHeader2 from "../../components/ArticleHeader2";

export default function OnlineMedicine({ navigation }) {

    const [columns, setColumns] = useState(4);
    const [columns2, setColumns2] = useState(2);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Simulate a 2-second loading period
      };

      useEffect(()=>{
        startLoading();
      },[]);

    return (
        <View style={styles.container}>
            <ArticleHeader2 text="Medicines & Products" showSearch={true} showBottomText={true} image={<Image source={require('../../assets/images/cart1.png')} style={{ height: 24, width: 24 }} />} />
            {loading ? <ActivityIndicator size={'large'} color={colors.blue} style={{flex:1, width:'100%', alignSelf:'center'}}/>:<ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: "5%", borderColor: colors.grey }}>Order Medicines Via</Text>
                <View style={{ width: '90%', backgroundColor: colors.white, marginTop: '0%', padding: '2%' }}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('NewAddress')} style={{ flexDirection: 'row', width: '100%', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.lightgrey, paddingBottom: "10%" }}>
                        <Image source={require('../../assets/images/med1.png')} style={{ height: 100, width: 100 }} />
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Upload prescription</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '100%', marginTop: '3%' }}>Just upload the photo of your prescriptions and get medicines delivered to you.</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.buttonSubContainer, { backgroundColor: colors.green }]}>
                                <Text style={styles.buttonText}>Upload now</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity> */}
                    {/* <View style={{ width: '100%', backgroundColor: colors.aqua, marginTop: "2%", flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/med2.png')} style={{ height: 44, width: 44 }} />
                            <View style={{ width: '70%', paddingLeft: '2%' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>No Prescription? No Problem</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '100%', marginTop: '3%' }}>Get a free doctor consultation.</Text>
                                <TouchableOpacity style={[styles.buttonSubContainer2, { backgroundColor: colors.green, marginTop: '5%' }]}>
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Consult Doctor</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/med3.png')} style={{ height: 44, width: 44 }} />
                            <View style={{ width: '70%', paddingLeft: '2%' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%' }}>Call to Order</Text>
                                <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.grey, width: '100%', marginTop: '3%' }}>Just a call away to order medicine at your doorstep.</Text>
                                <TouchableOpacity style={[styles.buttonSubContainer2, { backgroundColor: colors.green, marginTop: '5%' }]}>
                                    <Image source={require('../../assets/images/phone3.png')} style={{ height: 12, width: 12 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}> Call to Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}
                </View>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                    <View style={{ width: '30%', height: 1, backgroundColor: colors.grey }} />
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '40%', textAlign: 'center' }}>Or you can order via</Text>
                    <View style={{ width: '30%', height: 1, backgroundColor: colors.grey }} />
                </View> */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '0%' }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                        <Image source={require('../../assets/images/rx2.png')} style={{ height: 34, width: 34 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%', paddingTop: '5%' }}>Upload Prescription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                        <Image source={require('../../assets/images/chat5.png')} style={{ height: 34, width: 34 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%' }}>Call us to order medicine</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '32%', height: 76, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderRadius: 8, borderColor: colors.lightgrey, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                        <Image source={require('../../assets/images/call.png')} style={{ height: 34, width: 34 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', paddingLeft: '5%' }}>Book via Chat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', }}>Personal Care</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('AllCategories') }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-start' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={productCategory}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ProductList')} style={{ flexDirection: 'column', width: "23%", alignItems: 'center', borderRadius: 3, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '2%' }}>
                                <View style={{ backgroundColor: colors.lightgrey, width: '100%', height: 60 }}>
                                    <Image source={item.image} style={{ height: 59, width: 67, borderRadius: 3 }} />
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%", textAlign: 'center' }}>{item.text}</Text>
                            </TouchableOpacity>)} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', }}>Health Essentials</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('AllCategories') }}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={productCategory}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={{ flexDirection: 'column', width: "23%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '2%' }}>
                                <View style={{ backgroundColor: colors.lightgrey, width: '100%', height: 60 }}>
                                    <Image source={item.image} style={{ height: 59, width: 67, borderRadius: 3 }} />
                                </View>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Bold', color: colors.green, width: '100%', paddingTop: "5%", textAlign: 'center', fontStyle: 'italic' }}>UP TO 20 % OFF </Text>
                            </TouchableOpacity>)} />
                </View>
                {/* <View style={{ width: "90%", alignItems: 'center', marginTop: "2%" }}>
                    <FlatList
                        style={{ width: "100%" }}
                        contentContainerStyle={{ alignItems: 'center', }}
                        numColumns={columns2}
                        data={data2}
                        renderItem={({ item }) => (
                            <View style={{ width: "48%", alignItems: 'center', padding: '3%', borderRadius: 12, borderColor: colors.grey, borderWidth: 1, marginTop: '3%', marginRight: '2%', paddingBottom: '5%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Alp tablet 0.5mg</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, width: '100%', paddingTop: "3%" }}>Known as Blood CP test</Text>
                                <View style={{ flexDirection: 'row', marginTop: '5%', alignItems: 'center', width: '100%' }}>
                                    <Image source={require('../../assets/images/home5.png')} style={{ height: 16, width: 16 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.green }}> Free Home Delivery</Text>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black, marginTop: '5%', width: "100%" }}>800 - 1,050</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={[styles.buttonSubContainer3, { backgroundColor: colors.white, marginTop: '5%', borderWidth: 1, borderColor: colors.green }]}>
                                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.green }}>View Detail</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={[styles.buttonSubContainer3, { backgroundColor: colors.green, marginTop: '5%' }]}>
                                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )} />
                </View> */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, textAlign: 'center', }}>Shop by Health Conditions</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.green, textAlign: 'center', }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={productCategory}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', width: "23%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '1%' }}>
                                <View style={{ backgroundColor: colors.lightgrey, width: '100%', height: 60 }}>
                                    <Image source={item.image} style={{ height: 59, width: 67, borderRadius: 3 }} />
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%", textAlign: 'center' }}>{item.text}</Text>
                            </View>)} />
                </View>
                {/* <View style={{ width: '100%', padding: 20, backgroundColor: colors.lightgrey, marginTop: '5%' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.grey, width: wp(80) }}>India's Best Health Guardian</Text>
                    <Image source={require('../../assets/images/avijo.png')} style={{ height: 35, width: 54, marginTop: 5 }} />
                </View> */}
                {/* <View style={{ flexDirection: 'row', width: '100%', padding: 15, alignItems: 'center', borderTopWidth: 1, borderColor: colors.lightgrey, paddingTop: '5%' }}>
                    <Image source={require('../../assets/images/delivery.png')} style={{ width: 74, height: 72 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Get Free Delivery</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.black }}>Offer valid for a limited time only!</Text>
                    </View>
                </View> */}
            </ScrollView>}
            <Modal
                // animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: colors.blackTrasparent }}>
                    <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.white, backgroundColor: colors.white }}>
                        <Text style={{ padding: '5%', fontSize: 22, color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>Uploads</Text>
                        <View style={{ height: 1, width: '90%', backgroundColor: colors.lightgrey, alignSelf: 'center' }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%', alignSelf: 'center', marginBottom: '2%' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Chat') }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/rx.png')} style={{ height: 36, width: 36 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Prescription</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Chat') }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/rx.png')} style={{ height: 36, width: 36 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '70%', textAlign: 'center' }}>Past Prescription</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Chat') }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/report.png')} style={{ height: 36, width: 36 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, }}>Reports</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '1%', alignSelf: 'center', marginBottom: '5%' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('Chat') }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/gallery.png')} style={{ height: 36, width: 36 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Chat') }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '70%', textAlign: 'center' }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Chat') }} style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, }}>Documents</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}