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
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.lightGreen }}>Veiw All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "90%", alignItems: 'center', marginTop: "5%" }}>
                    <FlatList
                    data={product}
                    numColumns={columns}
                    renderItem={({item})=>(
                    <View style={{ width: "31%", alignItems: 'center', borderRadius: 12, marginTop: '3%', marginRight: '2.5%', paddingBottom: '5%' }}>
                        <Image source={item} style={{ height: 100, width: '100%', borderRadius: 4 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '100%', paddingTop: "5%" }}>Dry Apricot </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.green, width: '100%', paddingTop: "3%" }}>Rs 121 </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                            <Text style={{ fontSize: 8, fontFamily: 'Gilroy-Medium', color: colors.black, marginLeft: '2%', marginTop: '2%' }}>3.0</Text>
                            <Rating
                                type="star"
                                ratingCount={5}
                                imageSize={11}
                                startingValue={3.0}
                                readonly={true}
                                style={{ height: 8, width: 70 }}
                                ratingBackgroundColor={colors.white}
                            />
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail')} style={[styles.buttonSubContainer, { backgroundColor: colors.lightGreen }]}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>)}/>
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