import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native";
import { colors } from "../../Theme/GlobalTheme";
import ImageSlider from "react-native-image-slider";
import { offerData } from "../../assets/Data";
import * as Progress from 'react-native-progress';
import CircularProgress from "../../components/CircularProgress";

export default function Diary() {
    const [position, setPosition] = useState(0);

    const move = (index) => {
        const newPosition = index >= offerData.length ? 0 : index;
        setPosition(newPosition);
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', padding: '5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Health Diary</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/dots2.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{alignItems:'center', paddingBottom:'5%'}}>
                <View style={{ width: '100%', paddingRight: '5%', height: 200, marginTop: '5%' }}>
                    <ImageSlider
                        loopBothSides
                        images={offerData}
                        position={position}
                        onPositionChanged={setPosition}
                        customSlide={({ index, item }) => (
                            <View key={index} style={styles.slide}>
                                <View style={styles.image}>
                                    {/* <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingBottom: 8, textAlign: 'left', width: '90%', paddingTop: 5 }}>Macrose</Text> */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', paddingTop:10 }}>
                                        <View style={{ alignItems: 'center', width: "30%" }}>
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, paddingBottom: 8, textAlign: 'center' }}>Carbohydrates</Text>
                                            <CircularProgress size={60} progress={50} color={colors.torquish} backgroundColor="#d3d3d3" strokeWidth={6} />
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: 5 }}>115g Left</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', width: "30%" }}>
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, paddingBottom: 8 }}>Fat</Text>
                                            <CircularProgress size={60} progress={50} color={colors.purple} backgroundColor="#d3d3d3" strokeWidth={6} />
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: 5 }}>30g Left</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', width: "30%" }}>
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, paddingBottom: 8 }}>Protein</Text>
                                            <CircularProgress size={60} progress={50} color={colors.yellow} backgroundColor="#d3d3d3" strokeWidth={6} />
                                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: 5 }}>20g Left</Text>
                                        </View>
                                    </View>
                                </View>
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
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                    <View style={{ width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, padding: 10 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Steps</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', width: '90%', marginTop: 10 }}>
                            <Image source={require('../../assets/images/diary1.png')} style={{ height: 32, width: 32 }} />
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: 8 }}>3530</Text>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, paddingTop: 10, paddingBottom: 10 }}>Goal: 15,000 steps</Text>
                        <Progress.Bar progress={0.3} width={100} color="#DE3963" unfilledColor={colors.grey} borderWidth={0} />
                    </View>
                    <View style={{ width: '48%', backgroundColor: colors.white, elevation: 5, borderRadius: 8, padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Exercise</Text>
                            <Text style={{ fontSize: 25, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>+</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', width: '90%', marginTop: 10 }}>
                            <Image source={require('../../assets/images/diary4.png')} style={{ height: 32, width: 32 }} />
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: 8 }}>100 cal</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', width: '90%', marginTop: 10 }}>
                            <Image source={require('../../assets/images/diary3.png')} style={{ height: 32, width: 32 }} />
                            <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: 8 }}>0:30 hr</Text>
                        </View>
                        {/* <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey, paddingTop: 10, paddingBottom: 10 }}>Goal: 15,000 steps</Text>
                    <Progress.Bar progress={0.3} width={100} color="#DE3963" unfilledColor={colors.grey} borderWidth={0} /> */}
                    </View>
                </View>
                <View style={styles.image2}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingBottom: 8, textAlign: 'left', width: '90%', paddingTop: 5 }}>Progress</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                        <View style={{ alignItems: 'center', width: "30%" }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, paddingBottom: 8, textAlign: 'center' }}>Carbohydrates</Text>
                            <CircularProgress size={60} progress={50} color={colors.torquish} backgroundColor="#d3d3d3" strokeWidth={6} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: 5 }}>115g Left</Text>
                        </View>
                        <View style={{ alignItems: 'center', width: "30%" }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, paddingBottom: 8 }}>Fat</Text>
                            <CircularProgress size={60} progress={50} color={colors.purple} backgroundColor="#d3d3d3" strokeWidth={6} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: 5 }}>30g Left</Text>
                        </View>
                        <View style={{ alignItems: 'center', width: "30%" }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.torquish, paddingBottom: 8 }}>Protein</Text>
                            <CircularProgress size={60} progress={50} color={colors.yellow} backgroundColor="#d3d3d3" strokeWidth={6} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingTop: 5 }}>20g Left</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}