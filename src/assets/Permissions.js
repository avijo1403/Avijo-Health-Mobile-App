import { PermissionsAndroid, Platform } from 'react-native';
import { checkMultiple, request, PERMISSIONS } from 'react-native-permissions';

async function requestPermissions() {
    if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
    } else {
        await checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE])
            .then((statuses) => {
                if (
                    statuses[PERMISSIONS.IOS.CAMERA] !== 'granted' ||
                    statuses[PERMISSIONS.IOS.MICROPHONE] !== 'granted'
                ) {
                    request(PERMISSIONS.IOS.CAMERA);
                    request(PERMISSIONS.IOS.MICROPHONE);
                }
            });
    }
}

export default requestPermissions;
