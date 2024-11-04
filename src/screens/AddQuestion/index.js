import React, { useCallback, useRef, useState } from "react";
import { AppState, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import Collapsible2 from "../../components/Collapsible2";
import Collapsible7 from "../../components/Collapsible7";
import { launchImageLibrary } from "react-native-image-picker";
import { actions, defaultActions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import { debounce } from "lodash";

export default function AddQuestion({ navigation }) {
    const [select, setSelect] = useState(1);
    const RichText = useRef();
    const [article, setArticle] = useState("");
    const [appState, setAppState] = useState(AppState.currentState);
    const [showEditor, setShowEditor] = useState(false);


    const handleSelect = (no) => {
        setSelect(no);
    }

    const debouncedSetArticle = useCallback(
        debounce((text) => {
            setArticle(text);
        }, 500),
        []
    );

    const onChangeContent = (text) => {
        debouncedSetArticle(text);
    };



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


    const QuestionData = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%" }}>
                    <Image source={require('../../assets/images/profile.png')} style={{ height: 70, width: 71, borderRadius: 100 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Alicia Johns</Text>
                        <Collapsible7 text="Everyone" />
                    </View>
                </View>
                <TextInput
                    style={{ fontSize: 18, fontFamily: "Gilroy-Regular", color: colors.black, width: '90%', marginTop: '5%', width: 330 }}
                    placeholder="Ask anything health related..."
                    verticalAlign="top"
                    placeholderTextColor={colors.grey}
                    multiline={true}
                />
            </View>
        )
    }

    const Post = () => {
        return (
            <View style={styles.container}>
                <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', marginTop: "10%" }}>
                    <Image source={require('../../assets/images/profile.png')} style={{ height: 70, width: 71, borderRadius: 100 }} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={{ fontSize: 18, fontFamily: "Gilroy-SemiBold", color: colors.black }}>Alicia Johns</Text>
                        <Collapsible7 text="Everyone" />
                    </View>
                </View>
                {!showEditor && <TextInput
                    style={{ fontSize: 18, fontFamily: "Gilroy-Regular", color: colors.black, width: '90%', marginTop: '5%', width: 330 }}
                    placeholder="Share anything health related"
                    verticalAlign="top"
                    placeholderTextColor={colors.grey}
                    multiline={true}
                />}
                {showEditor && <KeyboardAvoidingView style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center', flex: 1, marginTop: '5%' }}>
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
                {!showEditor && <TouchableOpacity onPress={() => setShowEditor(!showEditor)} style={{ marginTop: '100%', width: '90%', }}>
                    <Image source={require('../../assets/images/text.png')} style={{ height: 24, width: 80 }} />
                </TouchableOpacity>}
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', backgroundColor: colors.blue, paddingBottom: '1%' }}>
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/images/cross1.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        {/* <Text style={styles.headerText}>Add Question</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', width: "17%", justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/add1.png')} style={{ height: 26, width: 60 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View horizontal={true} style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', borderBottomWidth: 0, backgroundColor: colors.blue }}>
                <TouchableOpacity onPress={() => handleSelect(1)} style={[styles.tabContainer, { borderBottomWidth: select === 1 ? 3 : 0, marginLeft: '5%' }]}>
                    <Text style={{
                        fontFamily: 'Gilroy-SemiBold', fontSize: 18, color: colors.white, textAlign: 'center'
                    }}>Ask</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect(2)} style={[styles.tabContainer, { borderBottomWidth: select === 2 ? 3 : 0 }]}>
                    <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 18, color: colors.white, textAlign: 'center' }}>Share</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                {select === 1 && <QuestionData />}
                {select === 2 && <Post />}
            </ScrollView>
        </View>
    )
}