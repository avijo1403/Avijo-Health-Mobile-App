import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { colors } from '../../Theme/GlobalTheme';
import AgoraUIKit from 'agora-rn-uikit';
import { BaseUrl2 } from '../../assets/Data';


const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const VideoChat = ({ navigation }) => {

    const [videoCall, setVideoCall] = useState(true);
    const [token, setToken] = useState('');

    const fetchToken = async () => {
       const data = {
            "channelName": "test",
            "uid": "123"
        }
        try {
            const response = await fetch(`${BaseUrl2}/user/agoraToken`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
           const json  = await response.json();
            console.log('response', json.token);
            setToken(json.token);
        } catch (e) {
            console.log('error fetch token...', e);
        }
    }

    useEffect(() => {
        fetchToken();
    }, []);

    const connectionData = {
        appId: 'd19a9bdbb20e41dc8fad2ff7fe7f3d34',
        channel: 'test',
        // token: token
        token: '007eJxTYLD47yd1YNLztuvR9xmef9fMz75mZlX+jmO9Y+kWO9+3F6wUGFIMLRMtk1KSkowMUk0MU5It0hJTjNLSzNNSzdOMU4xNCh/vSmsIZGT4bRXGyMgAgSA+C0NJanEJAwMA70QiLg=='
    };

    const callbacks = {
        EndCall: () => navigation.goBack(),
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {videoCall ? (
                <AgoraUIKit
                    connectionData={connectionData}
                    rtcCallbacks={callbacks}
                    onError={(error) => console.error('Agora Error:', error)}
                    onStatusChange={(status) => console.log('Agora Status:', status)}
                    styleProps={{
                        minViewStyles: {
                            width: 120,
                            height: 180
                        },
                        maxViewStyles: {
                            height: dimensions.height - 20,
                        },
                        localBtnContainer: {
                            borderWidth: 1,
                            backgroundColor: colors.black,
                            paddingTop: '5%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                        },
                        BtnTemplateStyles: {
                            height: 40,
                            width: 40
                        }
                    }}
                />

            ) : (
                <></>
            )}
        </SafeAreaView>
    );
};

export default VideoChat;
