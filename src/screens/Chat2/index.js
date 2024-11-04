import React, { useState, useRef, useCallback } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image, KeyboardAvoidingView, AppState } from 'react-native';
import styles from './style';
import HeaderItem2 from '../../components/HeaderItem2';
import { colors } from '../../Theme/GlobalTheme';
import { actions, defaultActions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { debounce } from "lodash";
import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Chat2 = ({ navigation }) => {
    const [messages, setMessages] = useState([
        // { id: 1, sender: 'You', text: 'Hi, Dr.Jii', time: '12:00 pm' },
        // { id: 2, sender: 'Jane', text: 'Hi, Dr.Jii, your AI health expert. Youre in a safe space to ask anything or express any concerns you might have.', time: '12:00 pm' },
        // { id: 2, sender: 'Jane', text: 'Im ready to assist you on your health journey in a deeper way. Heres what I can do for you:🤔 Health Q&A: Feel free to ask anything. I can even understand voice notes and multiple languages. 🔍 Visual Symptom Checker: Snap a photo or describe your symptoms, and Ill help identify potential causes.🔬 Lab Report & Prescription Analysis: Send me a picture or pdf of your report for clear explanations of your medications and lab results.🧘 Mental Health Support: Lets talk about your mental well-being.🍏 Meal & Fitness Plans: Customized meal and workout programs designed just for you.🌿 Calories & Nutritional Insights - Learn the nutritional content of your meals just by sending a photo.👩‍⚕👨‍⚕ Your health is my priority.', time: '12:00 pm' },
        // { id: 1, sender: 'Jane', text: 'By messaging further, you agree to t&c: bit.ly/august-privacy.I only provide health information, consult a health care professional before applying any info.', time: '12:00 pm' },
        // { id: 1, sender: 'Jane', text: 'Whats on your mind?', time: '12:00 pm' },
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
            <HeaderItem2
                center={true}
                name="Dr. Wilson"
                backgroundColor={colors.blue}
                onPress={() => navigation.navigate('BottomNav')}
                right={<Image source={require('../../assets/images/whiteDot.png')} style={{ height: 24, width: 24 }} />}
            />
            <ScrollView
                contentContainerStyle={styles.messageContainer}
                showsVerticalScrollIndicator={false}
                ref={scrollView => scrollView?.scrollToEnd({ animated: true })}>
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
                        ]}>
                        <Text style={[styles.messageText, { color: message.sender === 'You' ? colors.black : colors.black }]}>{message.text}</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={[styles.messageSender, { color: colors.black, alignSelf: 'flex-end' }]}>{message.time}</Text>
                            <Image source={require('../../assets/images/doubleTick.png')} style={{ height: 15, width: 15 }} />
                        </View>
                    </View>
                ))}
                <View
                    style={[
                        styles.message,
                        styles.receivedMessage,
                    ]}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5, paddingBottom: 0 }}>
                        <Image source={require('../../assets/images/video3.png')} style={{ height: 40, width: 40 }} />
                        <View style={{ flexDirection: 'column', paddingLeft: '3%', width: '80%' }}>
                            <Text style={{ color: colors.black, fontSize: 20, fontFamily: 'Gilroy-SemiBold' }}>Video consult</Text>
                            <Text style={{ color: colors.black, fontSize: 14, fontFamily: 'Gilroy-Medium' }}>30 mins</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[styles.messageSender, { color: colors.black, alignSelf: 'flex-end' }]}>2:00 pm</Text>
                        <Image source={require('../../assets/images/doubleTick.png')} style={{ height: 15, width: 15 }} />
                    </View>
                </View>
                <View
                    style={[
                        styles.message,
                        styles.receivedMessage,
                    ]}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', padding: 5, paddingBottom: 0 }}>
                        <Image source={require('../../assets/images/success.png')} style={{ height: 24, width: 24 }} />
                        <View style={{ flexDirection: 'column', paddingLeft: '5%', width: '90%' }}>
                            <Text style={{ color: colors.black, fontSize: 16, fontFamily: 'Gilroy-SemiBold' }}>Consultation Successfull</Text>
                        </View>
                    </View>
                    <Text style={{ color: colors.darkGrey, fontSize: 12, fontFamily: 'Gilroy-SemiBold', paddingLeft: '3%', paddingTop: '3%' }}>Consultation / Doctor Reveiw</Text>
                    <Image source={require('../../assets/images/stars.png')} style={{ height: 11, width: 68, marginLeft: '3%', marginTop: '2%' }} />
                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#E1BCB7', borderRadius: 6, height: 60, margin: '3%', fontSize: 10, fontFamily: 'Gilroy-Medium', backgroundColor: colors.white, color: colors.black }}
                        placeholder='Your type reveiws and suggestions here,'
                        textAlignVertical='top'
                        placeholderTextColor={colors.grey} />
                    <Text style={{ color: colors.darkGrey, fontSize: 8, fontFamily: 'Gilroy-Medium', paddingLeft: '3%', }}>Min 12 Characters</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ padding: 5, backgroundColor: colors.blue, borderRadius: 4, margin: 10 }}>
                            <Text style={{ color: colors.white, alignSelf: 'flex-end', fontSize: 10 }}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ backgroundColor: colors.white, width: '70%', borderRadius: 22, borderTopLeftRadius: 0, padding: '1%', paddingTop: '3%', alignItems: 'center', marginTop: '5%', alignSelf: 'flex-start' }}>
                    <Image source={require('../../assets/images/checkup.png')} style={{ height: 150, width: '95%', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', borderRadius: 14, backgroundColor: colors.white, padding: '5%', paddingBottom: '2%', justifyContent: 'space-between', paddingLeft: '2%' }}>
                        <View style={{ width: 100, marginLeft: '3%', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/flask2.png')} style={{ height: 15, width: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%' }}>Prescription</Text>
                        </View>
                        <Image source={require('../../assets/images/dots2.png')} style={{ height: 15, width: 15 }} />
                    </View>
                    <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', paddingBottom: '3%', marginLeft: '2%' }}>Upload on 15Oct 2024</Text>
                </View>
                <View style={{ backgroundColor: "#D3F1FF", width: '70%', borderRadius: 22, borderTopRightRadius: 0, padding: '3%', alignItems: 'center', marginTop: '5%', alignSelf: 'flex-end' }}>
                    <View style={{
                        flexDirection
                            : 'row', alignItems: 'center', width: '100%', borderRadius: 14, backgroundColor: colors.white, padding: '2%'
                    }}>
                        <Image source={require('../../assets/images/clipcall1.png')} style={{ height: 76, width: 76 }} />
                        <View style={{ width: 100, marginLeft: '3%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Clipcal 500 Tablet 15</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>30mg </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: colors.white, padding: '2%', borderRadius: 14, marginTop: '2%' }}>
                        <Image source={require('../../assets/images/clipcall2.png')} style={{ height: 76, width: 76 }} />
                        <View style={{ width: 100, marginLeft: '3%' }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>Clipcal 500 Tablet 15</Text>
                            <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>30mg </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ padding: '2%' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'Gilroy-SemiBold', color: colors.blue }}>See more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={{ height: 35, width: '90%', backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Gilroy-SemiBold', color: colors.white }}>Order now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {uploads && <View style={{ width: '100%', borderTopRightRadius: 16, borderTopLeftRadius: 16, borderWidth: 1, borderColor: colors.white, backgroundColor: colors.white }}>
                <Text style={{ padding: '5%', fontSize: 22, color: colors.darkGrey, fontFamily: 'Gilroy-SemiBold' }}>Uploads</Text>
                <View style={{ height: 1, width: '90%', backgroundColor: colors.lightgrey, alignSelf: 'center' }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '5%', alignSelf: 'center', marginBottom: '2%' }}>
                    <TouchableOpacity style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/rx.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Prescription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/rx.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '70%', textAlign: 'center' }}>Past Prescription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/report.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, }}>Reports</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginTop: '1%', alignSelf: 'center', marginBottom: '5%' }}>
                    <TouchableOpacity style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/gallery.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey }}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '70%', textAlign: 'center' }}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '32%', borderWidth: 1, borderColor: colors.lightgrey, height: 100, borderRadius: 8, backgroundColor: colors.lightgrey, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/camera.png')} style={{ height: 36, width: 36 }} />
                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, }}>Documents</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            {!showEditor && <View style={styles.inputContainer}>
                <TouchableOpacity style={{ margin: 5 }} onPress={() => setUploads(!uploads)}>
                    {uploads ? <Image source={require('../../assets/images/cross.png')} style={{ height: 36, width: 36 }} /> :
                        <Image source={require('../../assets/images/add5.png')} style={{ height: 42, width: 42 }} />}
                </TouchableOpacity>
                <View style={{ width: '65%', backgroundColor: colors.grey, borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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

export default Chat2;