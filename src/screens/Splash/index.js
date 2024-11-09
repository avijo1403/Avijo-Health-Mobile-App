import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash({navigation}) {

    const handleNavigation = async () => {
        const userId = await AsyncStorage.getItem("id");
        if (userId) {
            navigation.replace('BottomNav');
        }else{
            navigation.replace('Login');
        }
    }


    useEffect(() => {
        handleNavigation();
    }, []);

    return (
        <View style={styles.container}>
        </View>
    )
}