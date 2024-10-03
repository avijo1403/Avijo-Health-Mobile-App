import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible3 from "../../components/Collapsible3";
import { product } from "../../assets/Data";

export default function ProductDetail({ navigation }) {

    const [columns, setColumns] = useState(3);

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Medicine Detail" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', width: "90%", alignItems: 'flex-start', marginTop: '5%', marginBottom: "5%" }}>
                    <Image source={require('../../assets/images/skinCare4.png')} style={{ height: 190, width: '100%', borderRadius: 5 }} />
                    <View style={{ paddingLeft: '5%', width: "90%", marginTop: '5%' }}>
                        <Text style={{ fontSize: 20, color: colors.black, fontFamily: "Gilroy-SemiBold" }}>Crocin Advance Tablet 20 mg</Text>
                        <Text style={{ fontSize: 14, color: colors.darkGrey, fontFamily: "Gilroy-SemiBold", marginTop: '2%' }}>Glaxosmithcline Pharmaceuticals Ltd.</Text>
                        <Text style={{ fontSize: 16, color: colors.darkGrey, fontFamily: "Gilroy-SemiBold", marginTop: '5%', padding: 5, backgroundColor: colors.lightgrey, textAlign: 'center', width: '50%', borderRadius: 12 }}>Strip of 20 Units</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%', }}>
                        <View style={{ width: '60%' }}>
                            <Text style={{ fontSize: 14, color: colors.black, fontFamily: "Gilroy-SemiBold", marginTop: '3%' }}> MRP<Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, textDecorationLine: 'line-through' }}> $197.80 </Text><Text style={{ color: colors.green, textDecorationLine: 'line-through' }}> 12.0% OFF</Text></Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.black, textDecorationLine: 'line-through', marginTop: '3%' }}> $197.80 </Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginTop: '3%' }}> $1.02/Units </Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', borderWidth: 1, borderColor: colors.green, padding: '2%', paddingLeft: '5%', paddingRight: '5%', borderRadius: 5, backgroundColor: '#2C851121' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.green }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, padding: '3%', borderWidth: 1, borderColor: colors.grey }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', }}>
                        <Image source={require('../../assets/images/composition.png')} style={{ height: 24, width: 19 }} />
                        <View style={{ height: '100%', width: '90%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>View Transactions</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginLeft: '5%' }}>Paracetamol/acetaminophen(500mg)</Text>
                            <TouchableOpacity style={{ marginTop: '3%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.green, marginLeft: '5%' }}>See more</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, padding: '3%', borderWidth: 1, borderColor: colors.grey, marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ padding: 5, backgroundColor: colors.green, height: 32, width: 32, textAlign: 'center', fontSize: 16, color: colors.white, borderRadius: 100 }}>M</Text>
                        <View style={{ height: '100%', width: '80%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Mankind</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, marginLeft: '5%' }}>Explore All Feature</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 20, width: 20 }} />
                    </View>
                </View>
                <Collapsible3 text="Introduction" content={['Crocin Advance Tablet contains paracetamol (500 mg), which works within your body as follows:•Prostaglandin Inhibition: Paracetamol works by suppressing the production of prostaglandins, chemicals in your body that cause pain and inflammation. By doing so, it effectively reduces discomfort.•Fever Reduction: This medicine acts on the heat-regulating centre of the brain. It promotes heat loss through widening of blood vessels (vasodilation) and sweating, thereby reducing fever.•Pain Threshold Increase: Paracetamol increases the threshold at which you feel pain. This means that after taking this medicine, a higher level of pain stimulus is needed for you to actually feel the pain. This makes existing pain more tolerable.']} />
                <Collapsible3 text="Medicine activity" content={['Crocin Advance Tablet contains paracetamol (500 mg), which works within your body as follows:•Prostaglandin Inhibition: Paracetamol works by suppressing the production of prostaglandins, chemicals in your body that cause pain and inflammation. By doing so, it effectively reduces discomfort.•Fever Reduction: This medicine acts on the heat-regulating centre of the brain. It promotes heat loss through widening of blood vessels (vasodilation) and sweating, thereby reducing fever.•Pain Threshold Increase: Paracetamol increases the threshold at which you feel pain. This means that after taking this medicine, a higher level of pain stimulus is needed for you to actually feel the pain. This makes existing pain more tolerable.']} />
                <Collapsible3 text="Uses" content={['Crocin Advance Tablet contains paracetamol (500 mg), which works within your body as follows:•Prostaglandin Inhibition: Paracetamol works by suppressing the production of prostaglandins, chemicals in your body that cause pain and inflammation. By doing so, it effectively reduces discomfort.•Fever Reduction: This medicine acts on the heat-regulating centre of the brain. It promotes heat loss through widening of blood vessels (vasodilation) and sweating, thereby reducing fever.•Pain Threshold Increase: Paracetamol increases the threshold at which you feel pain. This means that after taking this medicine, a higher level of pain stimulus is needed for you to actually feel the pain. This makes existing pain more tolerable.']} />
                <Collapsible3 text="Direction for use" content={['Crocin Advance Tablet contains paracetamol (500 mg), which works within your body as follows:•Prostaglandin Inhibition: Paracetamol works by suppressing the production of prostaglandins, chemicals in your body that cause pain and inflammation. By doing so, it effectively reduces discomfort.•Fever Reduction: This medicine acts on the heat-regulating centre of the brain. It promotes heat loss through widening of blood vessels (vasodilation) and sweating, thereby reducing fever.•Pain Threshold Increase: Paracetamol increases the threshold at which you feel pain. This means that after taking this medicine, a higher level of pain stimulus is needed for you to actually feel the pain. This makes existing pain more tolerable.']} />
                <Collapsible3 text="Side effects" content={['Crocin Advance Tablet contains paracetamol (500 mg), which works within your body as follows:•Prostaglandin Inhibition: Paracetamol works by suppressing the production of prostaglandins, chemicals in your body that cause pain and inflammation. By doing so, it effectively reduces discomfort.•Fever Reduction: This medicine acts on the heat-regulating centre of the brain. It promotes heat loss through widening of blood vessels (vasodilation) and sweating, thereby reducing fever.•Pain Threshold Increase: Paracetamol increases the threshold at which you feel pain. This means that after taking this medicine, a higher level of pain stimulus is needed for you to actually feel the pain. This makes existing pain more tolerable.']} />
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Certified Content</Text>
                <View style={{ flexDirection: 'row', width: "90%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey }}>
                    <Image source={require('../../assets/images/man2.png')} style={{ height: 56, width: 56, borderRadius: 100 }} />
                    <View style={{ marginLeft: '3%', width: '70%', alignSelf: 'flex-start' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', padding: 10 }}>Dr. Sachin Singh </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '0%' }}>
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '0%' }}>Medical Team Lead / 4 years MBBS</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%', marginTop: '5%' }}>Consumers also bought</Text>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={product}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', width: "32%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey }}>
                                <Image source={item} style={{ height: 75, width: '100%', borderRadius: 4 }} />
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Dry Apricot </Text>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "3%" }}>$40.56 </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '5%' }}>
                                    <Text style={{ fontSize: 6, fontFamily: 'Gilroy-Medium', color: colors.green, backgroundColor: colors.lightgrey, padding: 5, textAlign: 'center', borderRadius: 30 }}>200 ml</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "50%", marginTop: '5%' }}>
                                        <Image source={require('../../assets/images/clock.png')} style={{ height: 16, width: 16 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>15 mins</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} style={[styles.buttonSubContainer, { backgroundColor: '#2C851121' }]}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>)} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Regular', color: colors.darkGrey }}>See all products</Text>
                    <Image source={require('../../assets/images/right3.png')} style={{ height: 16, width: 16, marginLeft: '1%' }} />
                </View>
            </ScrollView >
        </View >
    )
}