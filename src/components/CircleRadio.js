import React, { useState } from "react";
import { View } from "react-native";
import { colors } from "../Theme/GlobalTheme";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function CircleRadio(props) {


    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }} onPress={props.onPress}>
            <View style={{ borderWidth: 2, height: 16, width: 16, borderRadius: 100, borderColor: props.active ? colors.blue : colors.grey }} />
            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, marginLeft: '5%', }}>{props?.text}</Text>
        </TouchableOpacity>
    )
}