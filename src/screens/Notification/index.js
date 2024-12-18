import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import { BaseUrl2, chatData, getFormattedTime, notiData, timeAgo, wp } from "../../assets/Data";
import { TouchableOpacity } from "react-native";
import SearchItem from "../../components/SearchItem";
import HeaderItem from "../../components/HeaderItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Username from "agora-rn-uikit/src/Views/Usernames";

export default function Notification({ navigation }) {

  const [select, setSelect] = useState(1);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState([]);
  const [fcmTkn, setFcmTkn] = useState([]);
  const [chats, setChats] = useState([]);


  const fetchChats = async () => {
    const getId = await AsyncStorage.getItem("id");
    try {
      const response = await fetch(`${BaseUrl2}/user/chatlist/${getId}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Messages fetched successfully:", data.messages);

        const userIds = new Set();
        data.messages.forEach((item) => {
          if (item.senderId !== getId) {
            userIds.add(item.senderId);
          } else {
            userIds.add(item.receiverId);
          }
        });

        setUsers(Array.from(userIds));
        await fetchUserData(Array.from(userIds));
        setChats(data.messages);
      } else {
        console.error("Failed to fetch messages:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async (userIds) => {
    try {
      const userNames = await Promise.all(
        userIds.map(async (id) => {
          const response = await fetch(`${BaseUrl2}/user/profile/${id}`);
          const json = await response.json();
          return (json.fullName || "Unknown");
        })
      );
      const tokens = await Promise.all(
        userIds.map(async (id) => {
          const response = await fetch(`${BaseUrl2}/user/profile/${id}`);
          const json = await response.json();
          return (json.firebaseToken || "Unknown");
        })
      );
      console.log('usernames:', tokens);
      setUserName(userNames);
      setFcmTkn(tokens);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  const fetchNotifications = async () => {
    const getId = await AsyncStorage.getItem("id");
    console.log('ids:', getId);
    try {
      setLoading(true);
      const response = await fetch(`${BaseUrl2}/user/notifications/receiver/${getId}`);
      if (response.ok) {
        const data = await response.json();
        console.log("notification fetch successfully:", data.data);
        setNotifications(data.data);
      } else {
        console.error("Failed to fetch notification:", response.status, response.statusText);
      }

      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.error("Error fetch notification:", error);
    }
  };

  const updateMsg = async (id) => {
    try {
      const response = await fetch(`${BaseUrl2}/user/message/seen/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (response.ok) {
        console.log('msg updated...');
      }
    } catch (e) {
      console.log('error msg notification', e);
    }
  }

  const updateNoti = async (id) => {
    try {
      const response = await fetch(`${BaseUrl2}/user/notifications/${id}/seen`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (response.ok) {
        console.log('notification updated...');
        // fetchNotifications();
      }
    } catch (e) {
      console.log('error updating notification', e);
    }
  }

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchChats();
    fetchNotifications();
  }, []);

  useEffect(() => {
    startLoading();
  }, []);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchChats();
      fetchNotifications();
    });
    return unsubscribe;
  }, [navigation]);


  const HighlightedText = ({ text, highlight, itemName }) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

    return (
      <Text>
        {parts.map((part, index) => (
          <Text
            key={index}
            style={part?.toLowerCase() === highlight?.toLowerCase() ?
              (part?.toLowerCase() === itemName?.toLowerCase() ? styles.itemName : styles.highlight) :
              styles.normal}
          >
            {part}
          </Text>
        ))}
      </Text>
    );
  };


  const Chats = () => {
    return (
      <>
        {loading ? <ActivityIndicator size={'large'} color={colors.blue} style={{ flex: 1, width: '100%', alignSelf: 'center' }} /> :
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: 'Dr. Jii (Ai health assistance)' })} style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding: '5%', backgroundColor: '#FBFBFB', borderBottomWidth: 1, borderColor: colors.lightgrey }}>
              <Image source={require('../../assets/images/dr-ji.png')} style={{ height: 46, width: 46, borderRadius: 100 }} />
              <View style={{ width: '85%', paddingLeft: '3%', flexDirection: 'column' }}>
                <View style={{ width: '100%', paddingLeft: '3%', flexDirection: 'column' }}>
                  <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "70%" }}>Dr. Jii (Ai health assistance)</Text>
                    <Image source={require('../../assets/images/blackPin.png')} style={{ height: 20, width: 20 }} />
                    {/* <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingRight: '2%' }}>Sat</Text> */}
                    {/* <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 16, width: 16 }} /> */}
                  </View>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Regular', color: colors.darkGrey, paddingRight: '2%', marginTop: '2%' }}>Emilli, Congratulations on creating your new Space! Your Space is the place for you to share answers,...</Text>
              </View>
            </TouchableOpacity>
            <FlatList
              style={{ width: '100%' }}
              contentContainerStyle={{ alignItems: 'center', marginTop: '0%' }}
              data={chats}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Chat', { name: userName && userName[index], id: users[index], fcmToken: fcmTkn[index] });
                  // console.log('id:', item._id);
                  updateMsg(item._id);
                }} style={{ width: '100%', alignItems: 'center', flexDirection: 'row', padding: '5%', backgroundColor: '#FBFBFB', borderBottomWidth: 1, borderColor: colors.lightgrey }}>
                  <Image source={require('../../assets/images/dummyProfile.png')} style={{ height: 46, width: 46, borderRadius: 100 }} />
                  <View style={{ width: '85%', paddingLeft: '3%' }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: "70%" }}>{userName[index] ? userName[index] : 'Unknowns'}</Text>
                      {item?.pin ? <Image source={require('../../assets/images/blackPin.png')} style={{ height: 20, width: 20 }} />
                        : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.grey, paddingRight: '2%', width: '50%', textAlign: 'center' }}>{timeAgo(item.createdAt)}</Text>
                          <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 16, width: 16 }} />
                        </View>}
                    </View>
                    <Text style={{ fontSize: 14, fontFamily: item.seen ? 'Gilroy-Regular' : 'Gilroy-SemiBold', color: item.seen ? colors.darkGrey : colors.black, paddingRight: '2%', marginTop: '2%' }} numberOfLines={2} ellipsizeMode="2">{item.message}</Text>
                  </View>
                </TouchableOpacity>
              )} />
          </>}
      </>
    )
  }

  const NotiView = () => {
    return (
      <View style={{ width: '100%' }}>
        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: colors.blue, width: '90%', textAlign: 'right', marginTop: '5%' }}>Mark all read</Text>
        {loading ? <ActivityIndicator size={'large'} color={colors.blue} style={{ flex: 1, width: '100%', alignSelf: 'center' }} /> : <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: 'center' }}
          data={notifications}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => updateNoti(item._id)} style={{ width: '90%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.lightgrey, backgroundColor: item.seen ? colors.lightgrey : colors.white, elevation: item.seen ? 0 : 5, padding: "5%", borderRadius: 8, marginTop: '5%' }}>
              <Image source={require('../../assets/images/calendar6.png')} style={{ height: 48, width: 48, borderRadius: 80 }} />
              <View style={{ marginLeft: '5%', width: "80%" }}>
                <HighlightedText text={item.text} />
                <View style={{ marginLeft: '0%', width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                  <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, padding: '2%', paddingLeft: '5%', paddingRight: '5%', borderRadius: 50, backgroundColor: colors.lightgrey }}>{timeAgo(item.timestamp)}</Text>
                  <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>{getFormattedTime(item.timestamp)}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )} />}
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <HeaderItem onBack={() => navigation.goBack()} text="Message" right={<Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Gilroy-SemiBold', width: '20%', paddingRight: wp(5) }}>New Chat</Text>} />
      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: '5%' }}>
        {/* {<View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
          <SearchItem />
        </View>} */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', justifyContent: 'space-between', marginTop: '5%' }}>
          <TouchableOpacity onPress={() => setSelect(1)} style={{ borderBottomWidth: select === 1 ? 3 : 0, borderColor: colors.black, width: '49%', alignItems: 'center' }}>
            <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', padding: 5, paddingTop: 0, }}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect(2)} style={{ borderBottomWidth: select === 2 ? 3 : 0, borderColor: colors.black, width: '49%', alignItems: 'center' }}>
            <Text style={{ color: colors.black, fontSize: 18, fontFamily: 'Gilroy-SemiBold', padding: 5, paddingTop: 0 }}>Notifications</Text>
          </TouchableOpacity>
        </View>
        {<View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
          <SearchItem />
        </View>}
        {select === 1 && <Chats />}
        {select === 2 && <NotiView />}
      </ScrollView>
    </View>
  )
}