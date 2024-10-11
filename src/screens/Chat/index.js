import React, { useState, useRef, useCallback } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image, KeyboardAvoidingView, AppState } from 'react-native';
import styles from './style';
import HeaderItem2 from '../../components/HeaderItem2';
import { colors } from '../../Theme/GlobalTheme';
import { actions, defaultActions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { debounce } from "lodash";
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'You', text: 'Hello Emilli I hope you remember about your appoinment today with us.', time: '12:15 pm' },
        { id: 2, sender: 'Jane', text: 'Hello Doctor, Yes i remember. I will be there right on time', time: '12:15 pm' },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const [article, setArticle] = useState("");
    const RichText = useRef();
    const [appState, setAppState] = useState(AppState.currentState);
    const [showEditor, setShowEditor] = useState(false);
    const [uploads, setUploads] = useState(false);

    const textInputRef = useRef(null);

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages(prevMessages => [
                ...prevMessages,
                { id: prevMessages.length + 1, sender: 'You', text: newMessage },
            ]);

            setNewMessage('');
        }
    };

    const debouncedSetArticle = useCallback(
        debounce((text) => {
            setArticle(text);
        }, 500),
        []
    );

    function onPressAddImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image Picker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets[0].uri;

                // Convert image to base64 format
                RNFS.readFile(imageUri, 'base64')
                    .then(base64Data => {
                        const imageBase64 = `data:image/jpeg;base64,${base64Data}`;

                        // Insert base64 image into the RichEditor
                        const imageHtml = `<img src="${imageBase64}" style="width: 90%; height: 150px;" />`;
                        RichText.current?.insertHTML(imageHtml);
                    })
                    .catch(err => {
                        console.log('Error converting image to base64:', err);
                    });
            }
        });
    }

    const onChangeContent = (text) => {
        debouncedSetArticle(text);
    };

    return (
        <View style={styles.Container}>
            <HeaderItem2 center={true} name="Dr. Wilson" onPress={() => navigation.goBack()} right={<Image source={require('../../assets/images/dotBlue.png')} style={{ height: 20, width: 4.5 }} />} />
            <ScrollView
                contentContainerStyle={styles.messageContainer}
                showsVerticalScrollIndicator={false}
                ref={scrollView => scrollView?.scrollToEnd({ animated: true })}
            >
                {/* <View style={{flexDirection:'row', width:'90%', alignItems:'center'}}>
                    <Image source={require('../../assets/images/dr5.png')} style={{width:72, height:70}}/>
                    <View style={{paddingLeft:'5%'}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.blue}}>Dr. Jane Cooper</Text>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-Medium', color:colors.darkGrey, paddingTop:'2%'}}>Psychologist at Apple Hospital</Text>
                    </View>
                </View> */}
                {messages.map(message => (
                    <View
                        key={message.id}
                        style={[
                            styles.message,
                            message.sender === 'You' ? styles.sentMessage : styles.receivedMessage,
                        ]}
                    >
                        <Text style={[styles.messageText, { color: message.sender === 'You' ? colors.black : colors.white }]}>{message.text}</Text>
                        <Text style={[styles.messageSender, { color: message.sender === 'You' ? colors.blue : colors.white }]}>{message.time}</Text>
                    </View>
                ))}
            </ScrollView>
            {uploads && <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.lightgrey }}>
                <Text style={{ padding: '5%', fontSize: 22, color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>Uploads</Text>
                <View style={{ height: 1, width: '90%', backgroundColor: colors.lightgrey }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%', alignSelf:'center', marginBottom:'5%' }}>
                    <TouchableOpacity style={{width:'24%', borderWidth:1, borderColor:colors.lightgrey, height:100, borderRadius:8, backgroundColor:colors.skyblue, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../assets/images/rx.png')} style={{height:36, width:36}}/>
                        <Text style={{fontSize:10, fontFamily:'Gilroy-Medium', color:colors.blue}}>Prescription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'24%', borderWidth:1, borderColor:colors.lightgrey, height:100, borderRadius:8, backgroundColor:colors.skyblue, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../assets/images/report.png')} style={{height:36, width:36}}/>
                        <Text style={{fontSize:10, fontFamily:'Gilroy-Medium', color:colors.blue}}>Reports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'24%', borderWidth:1, borderColor:colors.lightgrey, height:100, borderRadius:8, backgroundColor:colors.skyblue, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../assets/images/gallery.png')} style={{height:36, width:36}}/>
                        <Text style={{fontSize:10, fontFamily:'Gilroy-Medium', color:colors.blue}}>Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'24%', borderWidth:1, borderColor:colors.lightgrey, height:100, borderRadius:8, backgroundColor:colors.skyblue, alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../assets/images/camera.png')} style={{height:36, width:36}}/>
                        <Text style={{fontSize:10, fontFamily:'Gilroy-Medium', color:colors.blue}}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            {!showEditor && <View style={styles.inputContainer}>
                <TouchableOpacity style={{ margin: 5 }} onPress={()=>setUploads(!uploads)}>
                    {uploads?<Image source={require('../../assets/images/cross.png')} style={{ height: 36, width: 36 }} />:
                    <Image source={require('../../assets/images/add5.png')} style={{ height: 38, width: 38 }} />}
                </TouchableOpacity>
                <View style={{ width: '65%', backgroundColor: colors.blue, borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        ref={textInputRef}
                        placeholder="Message"
                        value={newMessage}
                        placeholderTextColor={colors.white}
                        style={{ paddingLeft: 20, fontSize: 20, }}
                        onChangeText={setNewMessage}
                    />
                    <TouchableOpacity style={{ margin: 5 }} onPress={sendMessage}>
                        <Image source={require('../../assets/images/micWhite.png')} style={{ height: 32, width: 32 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ margin: 5 }} onPress={sendMessage}>
                    <Image source={require('../../assets/images/send.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
            </View>}
            <View style={styles.inputContainer}>
                {/* <HTMLView value={article} stylesheet={styles.htmlView} />  */}
                {showEditor && <KeyboardAvoidingView style={{ justifyContent: 'space-between', width: '90%', alignItems: 'center', marginTop: '5%', }}>
                    <RichEditor
                        ref={RichText}
                        showsVerticalScrollIndicator={false}
                        style={{ width: '90%' }}
                        containerStyle={{ alignItems: 'center' }}
                        placeholder="Start Writing Here"
                        // onChange={(text) => setArticle(text)}
                        onChange={onChangeContent}
                        initialContentHTML={article}
                    />
                    <RichToolbar
                        editor={RichText}
                        actions={[
                            actions.insertImage,
                            ...defaultActions,
                        ]}
                        iconMap={{
                            [actions.insertImage]: () => (
                                <TouchableOpacity onPress={onPressAddImage}>
                                    <Image
                                        source={require("../../assets/images/image.png")}  // Add your image icon here
                                        style={{ height: 20, width: 20 }}
                                    />
                                </TouchableOpacity>
                            ),
                        }}
                        style={{ marginTop: '40%' }}
                    />
                </KeyboardAvoidingView>}
                {/* {!showEditor && <TouchableOpacity onPress={() => setShowEditor(!showEditor)} style={{ marginLeft: '5%', width: '90%', marginBottom: '5%' }}>
                    <Image source={require('../../assets/images/text.png')} style={{ height: 24, width: 80 }} />
                </TouchableOpacity>} */}
                {showEditor && <TouchableOpacity style={{ margin: 5 }} onPress={sendMessage}>
                    <Image source={require('../../assets/images/send.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>}
            </View>
        </View>
    );
};

export default Chat;
