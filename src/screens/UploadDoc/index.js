import React, { useState } from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ArticleHeader from "../../components/ArticleHeader";
import { colors, hp } from "../../Theme/GlobalTheme";
import SelectItem from "../../components/SelectItem";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import HeaderItem from "../../components/HeaderItem";

export default function UploadDoc({ navigation }) {
    const [selectedImage, setSelectedImage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
        setModalVisible(!modalVisible);
    }

    const openCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorMessage) {
                console.log('Camera error');
            } else {
                let imageUri = response.assets?.[0]?.uri;
                if (imageUri) {
                    setSelectedImage(imageUri);
                } else {
                    console.log('image uri is undefined');
                }
            }
        });
    };

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('Image picker error');
            } else {
                let imageUri = response.assets?.[0]?.uri;
                if (imageUri) {
                    setSelectedImage(imageUri);
                } else {
                    console.log('image uri is undefined');
                }
            }
        });
    };

    return (
        <View style={styles.container}>
            <HeaderItem onBack={() => navigation.goBack()} text="Upload Documents" />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Gilroy-Bold', color: colors.black, width: '90%', marginTop: '5%' }}>Upload Prescription</Text>
                <TouchableOpacity onPress={handleModal} style={{ width: '90%', alignSelf: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                    <Image source={require('../../assets/images/add.png')} style={{ height: 26, width: 26 }} />
                    <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: '40%', textAlign: 'center', lineHeight: 26 }}>Add more Prescription</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 42, width: 43, zIndex: 2, marginTop: hp(22.8), position: 'absolute', alignSelf: 'flex-end', marginRight: '5.5%', backgroundColor:colors.white }}>
                    <Image source={require('../../assets/images/cross.png')} style={{ height: 42, width: 42 }} />
                </TouchableOpacity>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={{ height: 270, width: '90%' }} />
                ) : (
                    <Image source={require('../../assets/images/doc.png')} style={{ height: 270, width: '90%' }} />
                )}
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', color: colors.blue, width: '80%', lineHeight: 36, marginTop: '5%' }}>Document Name</Text>
                <View style={{ height: 1, width: '80%', backgroundColor: colors.grey, marginTop: '3%' }} />
                <Text style={{ fontSize: 22, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '80%', marginTop: '5%' }}>Is this a Doctor’s Prescription?</Text>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'flex-start' }}>
                    <SelectItem text="Yes" />
                    <View style={{ marginLeft: '10%' }}>
                        <SelectItem text="No, Other" />
                    </View>
                </View>
                {modalVisible && (
                    <Modal
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => {
                            setModalVisible(false);
                        }}
                    >
                        <View style={styles.modalContainer}>
                            <TouchableOpacity onPress={handleModal}>
                                <Image source={require('../../assets/images/redCross.png')} style={{ height: 50, width: 50, marginBottom: '5%' }} />
                            </TouchableOpacity>
                            <View style={styles.modalSubContainer}>
                                <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Upload Documents</Text>
                                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
                                    <TouchableOpacity onPress={openCamera} style={{ alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/camera2.png')} style={{ height: 42, width: 42 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: hp(1) }}>Camera</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: '100%', width: 1, backgroundColor: colors.grey }} />
                                    <TouchableOpacity onPress={openImagePicker} style={{ alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/photos.png')} style={{ height: 42, width: 42 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: hp(1) }}>Gallery</Text>
                                    </TouchableOpacity>
                                    <View style={{ height: '100%', width: 1, backgroundColor: colors.grey }} />
                                    <TouchableOpacity onPress={() => navigation.navigate('AssignDoc')} style={{ alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/files.png')} style={{ height: 42, width: 42 }} />
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginTop: hp(1) }}>Other Files</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}
            </ScrollView>
        </View>
    )
}
