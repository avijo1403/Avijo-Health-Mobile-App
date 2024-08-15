import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';
import styles from './style';
import HeaderItem2 from '../../components/HeaderItem2';
import { colors } from '../../Theme/GlobalTheme';

const Chat = ({navigation}) => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'You', text: 'Hello Emilli I hope you remember about your appoinment today with us.', time: '12:15 pm' },
        { id: 2, sender: 'Jane', text: 'Hello Doctor, Yes i remember. I will be there right on time', time: '12:15 pm' },
    ]);

    const [newMessage, setNewMessage] = useState('');

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

    return (
        <View style={styles.Container}>
            <HeaderItem2 text="Appointment Chat" onPress={()=>navigation.goBack()} />
            <ScrollView
                contentContainerStyle={styles.messageContainer}
                showsVerticalScrollIndicator={false}
                ref={scrollView => scrollView?.scrollToEnd({ animated: true })}
            >
                <View style={{flexDirection:'row', width:'90%', alignItems:'center'}}>
                    <Image source={require('../../assets/images/dr5.png')} style={{width:72, height:70}}/>
                    <View style={{paddingLeft:'5%'}}>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-SemiBold', color:colors.blue}}>Dr. Jane Cooper</Text>
                        <Text style={{fontSize:16, fontFamily:'Gilroy-Medium', color:colors.darkGrey, paddingTop:'2%'}}>Psychologist at Apple Hospital</Text>
                    </View>
                </View>
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
            <View style={styles.inputContainer}>
                <TextInput
                    ref={textInputRef}
                    style={styles.input}
                    placeholder="Write your message"
                    value={newMessage}
                    placeholderTextColor={'black'}
                    onChangeText={setNewMessage}
                />
                <TouchableOpacity style={{margin:5}} onPress={sendMessage}>
                    <Image source={require('../../assets/images/send.png')} style={{height:24, width:24}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Chat;
