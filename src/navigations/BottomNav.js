import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image, StyleSheet, Text, View } from "react-native";
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

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [userId, setUserId] = useState(null);

  // Fetch the id from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      const id = await AsyncStorage.getItem("id");
      setUserId(id);
    };
    fetchUserId();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
        tabBarShowLabel: false,
      }}
    >
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
              <Text style={{ fontSize: 24, width: 20, fontFamily: 'akuina-bold-slanted', color: focused ? '#3CA2A5' : colors.grey, }}>D</Text>
              <Text style={{ fontSize: 12, fontFamily: 'akuina-bold-slanted', color: focused ? '#3CA2A5' : colors.grey, }}>D<Text style={{ fontSize: 10 }}>OCARE</Text></Text>
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
                  color: focused ? colors.blue : colors.grey,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
        name="UserProfile"
        // Pass the id as a param to the Profile screen
        component={UserProfile}
      // initialParams={{ id: userId }}
      />
    </Tab.Navigator>
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
