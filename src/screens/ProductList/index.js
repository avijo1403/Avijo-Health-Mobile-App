import React, { useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { Rating } from "react-native-ratings";
import { personalCare, product, productCategory } from "../../assets/Data";
import HeaderItem2 from "../../components/HeaderItem2";

export default function ProductList({ navigation }) {

    const [select, setSelect] = useState(2);
    const [columns, setColumns] = useState(3);
    const [category, setCategory] = useState(0);
    const screenWidth = Dimensions.get('window').width;


    const handleSelect = (number) => {
        setSelect(number);
    }

    const Categories = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%' }}>
                    <FlatList
                        contentContainerStyle={{ alignItems: 'flex-start', marginLeft: '5%', marginTop: '2%', paddingRight: '5%' }}
                        horizontal={true}
                        data={personalCare}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={()=>setCategory(item.id)} style={{ alignItems: 'center', padding: 5, paddingRight:10, borderBottomWidth:2, borderColor:item.id === category ?colors.blue : colors.lightgrey }}>
                                <Image source={item.image} style={{ height: 68, width: 68, borderRadius: 100 }} />
                                <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-SemiBold', marginTop: 5 }}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop:'5%' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'flex-start' }}
                        data={productCategory}
                        numColumns={columns}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'column', width: screenWidth / 3.2, borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey, marginLeft: '1%' }}>
                                <Image source={item.image} style={{ height: 75, width: '100%', borderRadius: 4 }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '5%' }}>
                                    <Image source={require('../../assets/images/clock.png')} style={{ height: 16, width: 16 }} />
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>15 mins</Text>
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Dry Apricot </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '5%' }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.black, textAlign: 'center', borderRadius: 30 }}>200 ml</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '50%', paddingTop: "3%" }}>$40.56 </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} style={[styles.buttonSubContainer, { backgroundColor: '#2C851121' }]}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>)} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderItem2 text="Personal Care"  onPress={() => navigation.goBack()} right={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Image source={require('../../assets/images/blackSearch.png')} style={{ height: 24, width: 24, marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/cart1.png')} style={{ height: 28, width: 28 }} />
                    </TouchableOpacity>
                </View>
            } />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                {/* <View style={{ flexDirection: 'row', marginRight: 15, marginTop: '7%', marginLeft: '7%', justifyContent: 'space-evenly', width: '95%', alignSelf: 'flex-end' }}>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={select === 2 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 2 ? styles.optionText2 : styles.optionText}>Filters</Text>
                        <Image source={require('../../assets/images/down.png')} style={{ height: 12, width: 12 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={select === 3 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 3 ? styles.optionText2 : styles.optionText}>Price</Text>
                        <Image source={require('../../assets/images/down.png')} style={{ height: 12, width: 12 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(4)} style={select === 4 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 4 ? styles.optionText2 : styles.optionText}>Antiseptic</Text>
                        <Image source={require('../../assets/images/down.png')} style={{ height: 12, width: 12 }} />
                    </TouchableOpacity>
                </View> */}
                <Categories />
            </ScrollView>
        </View>
    )
}