import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { playRingtone, stopRingtone } from "../components/soundUtils";
import { handleVibrate, stopVibration } from "../assets/Data";

export default function IncomingCall() {

    useEffect(() => {
        handleVibrate();
    }, []);

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={stopVibration}>
                <Text style={{ color: 'red', }}>Cancel Call</Text>
            </TouchableOpacity>
        </View>

    )
}