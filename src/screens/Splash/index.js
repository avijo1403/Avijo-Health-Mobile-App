import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';

export default function Splash({navigation}) {

    const handleNavigation = async () => {
        const userId = await AsyncStorage.getItem("id");
        if (userId) {
            navigation.replace('BottomNav');
        }else{
            navigation.replace('Login');
        }
    }

    const fetchFcmToken = async () => {
        try {
          const token = await messaging().getToken(); // Fetches the FCM token
          console.log('Firebase Cloud Messaging Token:', token);
          return token;
        } catch (error) {
          console.error('Error fetching FCM Token:', error);
        }
      };
    

    useEffect(() => {
        handleNavigation();
        // fetchFcmToken();
    }, []);

    return (
        <View style={styles.container}>
        </View>
    )
}