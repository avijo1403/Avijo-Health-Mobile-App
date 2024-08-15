import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { colors } from '../../Theme/GlobalTheme';

const ScanScreen = ({navigation}) => {
    const onSuccess = (e) => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occurred', err)
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: '10%', backgroundColor: colors.white }}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{ marginLeft: '5%' }}>
                    <Image source={require('../../assets/images/blueLeft.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: 'Gilroy-SemiBold', paddingLeft: '5%', color: colors.blue }}>ABHA Scan</Text>
            </View>
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
                cameraStyle={styles.camera}
            />
            <View style={styles.overlay} >
                <Text style={{fontSize:24, fontFamily:'Gilroy-SemiBold', color:colors.white, marginTop:'10%'}}>Scan QR Code</Text>
            <Image source={require('../../assets/images/qrFrame.png')} style={{height:366, width:366, marginTop:'15%'}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: '10%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems:'center',

    },
});

export default ScanScreen;
