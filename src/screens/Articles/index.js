import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors } from "../../Theme/GlobalTheme";
import { article, offerData } from "../../assets/Data";
import { FloatingAction } from "react-native-floating-action";

export default function Articles({ navigation }) {

    const [select, setSelect] = useState(1);
    const favoriteData = article.filter((item) => item.favorite === 'true');

    const handleSelect = (no) => {
        setSelect(no);
    }

    const ForYou = () => {
        return (
            <FlatList
                data={article}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('HealthArticles')} style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={item.image} style={{ width: '90%', height: 200, borderRadius: 24, marginTop: '5%', marginBottom: '2%' }} resizeMode="cover" />
                        <Text style={{ color: colors.darkGrey, width: '90%', fontSize: 20, fontFamily: "Gilroy-SemiBold" }}>Several essential oil besides curing ailments can aid overall vision health know about 5 essential</Text>
                        <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: '5%' }} />
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: '2%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>By <Text style={{ color: colors.green }}>Dr.Divya Mandial</Text></Text>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>04 jun, 2024</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'space-between', marginTop: '4%', paddingBottom: '5%' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/share1.png')} style={{ height: 32, width: 32 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    {item.favorite === 'true' ? <Image source={require('../../assets/images/heart1.png')} style={{ height: 32, width: 32 }} /> : <Image source={require('../../assets/images/heart2.png')} style={{ height: 32, width: 32 }} />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }

    const Categories = () => {
        return (
            <ScrollView style={{ width: '100%' }}>
                <Text style={{ fontSize: 22, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%', marginTop: '5%' }}>Latest Articles</Text>
                <FlatList
                    data={article}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }}>
                            <Image source={item.image} style={{ width: '90%', height: 200, borderRadius: 24, marginTop: '5%', marginBottom: '2%' }} resizeMode="cover" />
                            <Text style={{ color: colors.darkGrey, width: '90%', fontSize: 20, fontFamily: "Gilroy-SemiBold" }}>Several essential oil besides curing ailments can aid overall vision health know about 5 essential</Text>
                            <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: '5%' }} />
                            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: '2%' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>By <Text style={{ color: colors.green }}>Dr.Divya Mandial</Text></Text>
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>04 jun, 2024</Text>
                                </View>                     
                                <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'space-between', marginTop: '4%', paddingBottom: '5%' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/images/share1.png')} style={{ height: 32, width: 32 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        {item.favorite === 'true' ? <Image source={require('../../assets/images/heart1.png')} style={{ height: 32, width: 32 }} /> : <Image source={require('../../assets/images/heart2.png')} style={{ height: 32, width: 32 }} />}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        );
    }

    const Favourites = () => {
        return (
            <FlatList
                data={favoriteData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={item.image} style={{ width: '90%', height: 200, borderRadius: 24, marginTop: '5%', marginBottom: '2%' }} resizeMode="cover" />
                        <Text style={{ color: colors.darkGrey, width: '90%', fontSize: 20, fontFamily: "Gilroy-SemiBold" }}>Several essential oil besides curing ailments can aid overall vision health know about 5 essential</Text>
                        <View style={{ width: '90%', height: 1, backgroundColor: colors.grey, marginTop: '5%' }} />
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: '2%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.grey }}>By <Text style={{ color: colors.green }}>Dr.Divya Mandial</Text></Text>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: '5%' }}>04 jun, 2024</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'space-between', marginTop: '4%', paddingBottom: '5%' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/share1.png')} style={{ height: 32, width: 32 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    {item.favorite === 'true' ? <Image source={require('../../assets/images/heart1.png')} style={{ height: 32, width: 32 }} /> : <Image source={require('../../assets/images/heart2.png')} style={{ height: 32, width: 32 }} />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }

    return (
        <View style={styles.container}>
            <ArticleHeader 
            onBack={() => navigation.goBack()} 
            text="Articles" 
            showSearch={true} 
            image={
            <Image 
            source={require('../../assets/images/filter.png')} 
            style={{ height: 24, width: 24 }} 
            />} 
            image2={
            <Image source={require('../../assets/images/plus.png')} 
            style={{ height: 28, width: 28 }} />}
            onRightPress2={()=>navigation.navigate('AddQuestion')}
             />
            <View style={{ flexDirection: 'row', width: '100%', backgroundColor: colors.green, height: '5%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => handleSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, padding: 5, borderColor: colors.white }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>For You</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, padding: 5, borderColor: colors.white }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect(3)} style={{ borderBottomWidth: select === 3 ? 3 : 0, padding: 5, borderColor: colors.white }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Favourites</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '100%', paddingBottom: '35%' }}>
                {select === 1 && <ForYou />}
                {select === 2 && <Categories />}
                {select === 3 && <Favourites />}
            </View>
            <FloatingAction
            color={colors.green}
            onPressMain={()=>{
                navigation.navigate('AddQuestion')
            }}
            overlayColor='rgba(0,0,0,0)'
            />
        </View>
    )
}
