import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Alert, Image, PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import Profile from "../screens/Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';
import OnlineConsult from "../screens/OnlineConsult";
import FindDoctor from "../screens/FindDoctor";
import DoCare from "../screens/DoCare";
import UserProfile from "../screens/UserProfile";
import OnlineMedicine from "../screens/OnlineMedicine";
import Diary from "../screens/Diary";
import Geolocation from 'react-native-geolocation-service';
import UnServer from "../components/UnServe";
import RNCallKeep from "react-native-callkeep";
import setupCallKeep from "../components/callkeepSetup";
import messaging from '@react-native-firebase/messaging';
import { loadRingtone, playRingtone } from "../components/soundUtils";

const Tab = createBottomTabNavigator();

const BottomNav = ({ navigation }) => {

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [pincode, setPincode] = useState('');
  const [location, setLocation] = useState(null);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to show your position on the map.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {

        console.log('Location permission denied');
        return;
      }
    }


  };

  useEffect(() => {
    requestPermission();
  }, [])

  // useEffect(() => {
  //   setupCallKeep();

  //   const onAnswerCall = ({ callUUID }) => {
  //     Alert.alert('Incoming Call', 'You answered the call!');
  //     RNCallKeep.endCall(callUUID);
  //   };
  //   RNCallKeep.addEventListener('answerCall', onAnswerCall);
  //   return () => {
  //     RNCallKeep.removeEventListener('answerCall', onAnswerCall);
  //   };

  // }, []);

  const getLocationDetails = async (lat, lng) => {
    const apiKey = 'AIzaSyBR4iLjpG8FEw-gOBmL0MmX701c6E8iT2g'; // Your API Key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&language=en&region=pk`;

    try {
      const response = await fetch(url); // Using fetch instead of axios

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parsing the response to JSON

      if (data.status === 'OK') {
        const results = data.results;
        const addressComponents = results[0].address_components;

        let areaName = '';
        let route = '';
        let province = '';
        let country = '';

        console.log('address:', addressComponents);

        for (let component of addressComponents) {
          if (component.types.includes('locality')) {
            areaName = component.long_name;
            await AsyncStorage.setItem('selectedLocation', areaName);
            setLocation(areaName);
          }
          if (component.types.includes('route')) {
            route = component.long_name;
            console.log('pincode:', route);
            // await AsyncStorage.setItem('area', areaName);
          }
          if (component.types.includes('administrative_area_level_1')) {
            province = component.long_name;
            console.log('pincode:', province);
            // await AsyncStorage.setItem('area', areaName);
          }
          if (component.types.includes('country')) {
            country = component.long_name;
            console.log('pincode:', country);
            // await AsyncStorage.setItem('area', areaName);
          }
        }

      } else {
        console.log('No valid result found');
      }
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  }


  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCoordinates(position.coords);
      },
      (error) => {
        console.error(error);
        alert('Failed to get location');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };


  const reverseGeocode = async (latitude, longitude) => {
    try {
      setLoading(true);
      getLocationDetails(latitude, longitude);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      const data = await response.json();
      const code = await AsyncStorage.getItem('pincode');
      if (code) {
        setPincode(code);
      } else {
        setPincode(data.address.postcode);
        await AsyncStorage.setItem('pincode', data.address.postcode);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error with reverse geocoding:', error);
      return null;
    }
  };

  const fetchLocation = async () => {
    try {
      setLoading(true);
      const code = await AsyncStorage.getItem('pincode');
      if (code) {
        setPincode(code);
      }
      const loc = await AsyncStorage.getItem("selectedLocation");
      console.log('loc:', loc);
      setLocation(loc);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('error fetching location', e);
    }
  }

  const fetchUserId = async () => {
    const id = await AsyncStorage.getItem("id");
    setUserId(id);
  };

  // useEffect(() => {
  //   fetchLocation();
  //   console.log('loc1:', location);
  //   if (!location) {
  //     getLocation();
  //     reverseGeocode(coordinates?.latitude, coordinates?.longitude);
  //   }

  // }, []);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const code = await AsyncStorage.getItem('pincode');
        const loc = await AsyncStorage.getItem('selectedLocation');

        if (code) setPincode(code);
        if (loc) setLocation(loc);

        if (!loc || !code) {
          getLocation();
        }

        if (coordinates) {
          reverseGeocode(coordinates.latitude, coordinates.longitude);
        }
      } catch (e) {
        console.error("Error during initialization:", e);
      }
    };

    initializeData();
  }, [coordinates]);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Screen is focused', location);
      const initializeData = async () => {
        try {
          const code = await AsyncStorage.getItem('pincode');
          const loc = await AsyncStorage.getItem('selectedLocation');

          if (code) setPincode(code);
          if (loc) setLocation(loc);

          if (!loc || !code) {

            getLocation();

          }

          if (coordinates) {
            reverseGeocode(coordinates.latitude, coordinates.longitude);
          }
        } catch (e) {
          console.error("Error during initialization:", e);
        }
      };
      initializeData();
    });
    return unsubscribe;
  }, [navigation]);



  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadRingtone();
    fetchUserId();
  }, []);


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('New FCM message!', JSON.stringify(remoteMessage.notification));
      console.log('Foreground message:', remoteMessage);
      // playRingtone();
      // RNCallKeep.displayIncomingCall('unique-call-id', 'Caller Name', 'Caller Number');
      // navigation.navigate('IncomingCall');
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background:', remoteMessage);
      //  playRingtone();
      // RNCallKeep.backToForeground();
      // RNCallKeep.displayIncomingCall('unique-call-id', 'Caller Name', 'Caller Number');
      // navigation.navigate('IncomingCall');
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {pincode === '452010' ? <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
            alignItems: 'center',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              height: "40%",
              fontSize: 12,
              fontFamily: "OpenSans-Regular",
            },
            tabBarActiveBackgroundColor: colors.white,
            tabBarActiveTintColor: colors.darkBlue,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.home}
                  source={require("../assets/images/homeSmile.png")}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gilroy-SemiBold",
                    marginTop: "2%",
                    width: 50,
                    textAlign: 'center',
                    color: focused ? colors.blue : colors.grey,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              height: "40%",
              fontSize: 12,
              fontFamily: "OpenSans-Regular",
            },
            tabBarActiveBackgroundColor: colors.white,
            tabBarActiveTintColor: colors.darkBlue,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.home}
                  source={require("../assets/images/diary2.png")}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gilroy-SemiBold",
                    marginTop: "2%",
                    width: 50,
                    textAlign: 'center',
                    color: focused ? colors.blue : colors.grey,
                  }}
                >
                  Diary
                </Text>
              </View>
            ),
          }}
          name="Diary"
          component={Diary}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              height: "40%",
              fontSize: 12,
              fontFamily: "OpenSans-Regular",
            },
            tabBarActiveBackgroundColor: colors.white,
            tabBarActiveTintColor: colors.darkBlue,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.home}
                  source={focused ? require("../assets/images/product7.png") : require("../assets/images/product.png")}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gilroy-SemiBold",
                    marginTop: "2%",
                    width: 60,
                    textAlign: 'center',
                    color: focused ? colors.green : colors.grey,
                  }}
                >
                  Product
                </Text>
              </View>
            ),
          }}
          name="Plans"
          component={OnlineMedicine}
        // initialParams={{ id: userId }}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              height: "40%",
              fontSize: 12,
              fontFamily: "OpenSans-Regular",
            },
            tabBarActiveBackgroundColor: colors.white,
            tabBarActiveTintColor: colors.darkBlue,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                {/* <Image
                style={styles.home}
                source={focused ? require("../assets/images/doCareBlue.png") : require("../assets/images/doCareGrey.png")}
              /> */}
                <Text style={{ fontSize: 24, width: 23, fontFamily: 'akuina-bold-slanted', color: focused ? '#3CA2A5' : colors.grey, }}>D</Text>
                <Text style={{ fontSize: 12, fontFamily: 'akuina-bold-slanted', color: focused ? '#3CA2A5' : colors.grey, width: 60, textAlign: 'center' }}>D<Text style={{ fontSize: 10 }}>OCARE</Text></Text>
              </View>
            ),
          }}
          name="DoCare"
          component={DoCare}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              height: "40%",
              fontSize: 12,
              fontFamily: "OpenSans-Regular",
            },
            tabBarActiveBackgroundColor: colors.white,
            tabBarActiveTintColor: colors.darkBlue,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    borderWidth: 2,
                    height: 28,
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Image
                    style={{ height: 24, width: 24, marginBottom: "2%" }}
                    source={require("../assets/images/profile.png")}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gilroy-SemiBold",
                    marginTop: "2%",
                    width: 50,
                    textAlign: 'center',

                    color: focused ? colors.blue : colors.grey,
                  }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
          name="UserProfile"
          component={UserProfile}
        />
      </Tab.Navigator> : <UnServer loading={loading} area={location} />}
    </>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  home: {
    height: 24,
    width: 24,
    marginTop: "2%",
  },
  profile: {
    height: 21,
    width: 16,
  },
  activity: {
    height: 22,
    width: 16,
  },
});
