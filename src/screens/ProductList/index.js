import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { Rating } from "react-native-ratings";
import { product } from "../../assets/Data";

export default function ProductList({ navigation }) {

    const [select, setSelect] = useState(2);
    const [columns, setColumns] = useState(3);


    const handleSelect = (number) => {
        setSelect(number);
    }

    const Categories = () => {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: "5%" }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Skin Care</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.green }}>Veiw All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        style={{ width: '100%' }}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={product}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', width: "90%", alignItems: 'center', borderRadius: 12, marginTop: '3%', paddingBottom: '2%', borderWidth: 1, padding: 5, borderColor: colors.lightgrey }}>
                                <Image source={item} style={{ height: 100, width: '30%', borderRadius: 4 }} />
                                <View style={{ marginLeft: '3%', width: '45%', alignSelf: 'flex-start' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Dry Apricot </Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "3%" }}>$40.56 </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: '5%' }}>
                                        <Image source={require('../../assets/images/clock.png')} style={{ height: 16, width: 16 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>15 mins</Text>
                                        {/* <Rating
                                            type="star"
                                            ratingCount={5}
                                            imageSize={11}
                                            startingValue={3.0}
                                            readonly={true}
                                            style={{ height: 8, width: 70 }}
                                            ratingBackgroundColor={colors.white}
                                        /> */}
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'space-between', height: 70, width: '20%' }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.green, backgroundColor: colors.lightgrey, padding: 5, textAlign: 'center', borderRadius: 50 }}>200 ml</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')} style={[styles.buttonSubContainer, { backgroundColor: colors.green }]}>
                                        <Text style={styles.buttonText}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>)} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ArticleHeader onBack={() => navigation.goBack()} text="Products List" showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 24, width: 24 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginRight: 15, marginTop: '7%', marginLeft: '7%', justifyContent: 'space-between', width: '90%' }}>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={select === 2 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 2 ? styles.optionText2 : styles.optionText}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={select === 3 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 3 ? styles.optionText2 : styles.optionText}>Sub categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(4)} style={select === 4 ? styles.optionContainer2 : styles.optionContainer}>
                        <Text style={select === 4 ? styles.optionText2 : styles.optionText}>Brand</Text>
                    </TouchableOpacity>
                </View>
                <Categories />
            </ScrollView>
        </View>
    )
}