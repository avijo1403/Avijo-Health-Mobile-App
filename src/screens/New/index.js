import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";


export default function New(){
    const [userData, setUserData] = useState([]);

    const handleApi= async()=>{

        const response = await fetch('https://dummyjson.com/products/2');
        const json = await response.json();
        setUserData(json.reviews);
        console.log('json1:', json.reviews);
    
    }

    const ItemData = ({item})=>(
        <View style={{margin:5}}>
            <Text>{item.date}</Text>
            <Text>{item.comment}</Text>
            <Text>{item.rating}</Text>
            <Text>{item.reviewerName}</Text>
            <Text>{item.reviewerEmail}</Text>
        </View>
    )

    useEffect(()=>{
        handleApi();
    })

    return(
        <View>
            <FlatList
            data={userData}
            renderItem={ItemData}
            />
        </View>
    )
}