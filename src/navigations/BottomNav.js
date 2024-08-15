import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../Theme/GlobalTheme";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        }, tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: '40%',
            fontSize: 12,
            fontFamily: 'OpenSans-Regular',
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.home} source={focused ? require('../assets/images/home1.png') : require('../assets/images/home2.png')} />
              <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', marginTop: '2%', color: focused ? colors.blue : colors.grey }}>Home</Text>
            </View>
          ),
        }} name="Home" component={Home} />
      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: '40%',
            fontSize: 12,
            fontFamily: 'OpenSans-Regular',
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.home} source={focused ? require('../assets/images/map.png') : require('../assets/images/map1.png')} />
              <Text style={{ fontSize: 10, fontFamily: 'Poppins-Bold', marginTop: '2%', color: focused ? colors.yellow : colors.grey }}>Maps</Text>
            </View>
          ),
        }} name="Maps" component={Maps} /> */}
      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: '40%',
            fontSize: 12,
            fontFamily: 'OpenSans-Regular',
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', borderWidth: 2, backgroundColor: colors.yellow, height: 61, width: 61, justifyContent: 'center', borderRadius: 30, marginBottom: '80%', borderColor: colors.white }}>
              <Image style={styles.home} source={require('../assets/images/qrscan.png')} />
              {/* <Text style={{fontSize:10, fontFamily:'Poppins-Bold', marginTop:'2%',color:focused?colors.yellow:colors.grey}}>Booking</Text> */}
            {/* </View>
          ),
        }} name="QRScan" component={QRScan} /> */} 
      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: '40%',
            fontSize: 12,
            fontFamily: 'OpenSans-Regular',
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.home} source={focused ? require('../assets/images/booking.png') : require('../assets/images/booking1.png')} />
              <Text style={{ fontSize: 10, fontFamily: 'Poppins-Bold', marginTop: '2%', color: focused ? colors.yellow : colors.grey }}>Booking</Text>
            </View>
          ),
        }} name="Booking" component={Booking} /> */}
      {/* <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            height: '40%',
            fontSize: 12,
            fontFamily: 'OpenSans-Regular',
          },
          tabBarActiveBackgroundColor: colors.white,
          tabBarActiveTintColor: colors.darkBlue,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.home} source={focused ? require('../assets/images/profile.png') : require('../assets/images/profile1.png')} />
              <Text style={{ fontSize: 10, fontFamily: 'Poppins-Bold', marginTop: '2%', color: focused ? colors.yellow : colors.grey }}>Profile</Text>
            </View>
          ),
        }} name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  )
}
export default BottomNav;

const styles = StyleSheet.create({
  home: {
    height: 24,
    width: 24,
    marginTop: '2%',
  },
  profile: {
    height: 21,
    width: 16
  },
  activity: {
    height: 22,
    width: 16
  }
})