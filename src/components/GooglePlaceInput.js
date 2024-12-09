import 'react-native-get-random-values';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from '../Theme/GlobalTheme';
import { View } from 'react-native';

const GooglePlacesInput = () => {
    return (
        <View style={{width:'100%', alignItems:'center', flex:1, backgroundColor:colors.white}}>
            <GooglePlacesAutocomplete
                placeholder="Search for a place"
                fetchDetails={true} // Fetch detailed place information
                onPress={(data, details = null) => {
                    console.log('Place Data:', data);
                    console.log('Place Details:', details);
                }}
                query={{
                    key: 'AIzaSyBR4iLjpG8FEw-gOBmL0MmX701c6E8iT2g',
                    language: 'en',
                }}
                
                styles={{
                    container: {
                        flex: 0, 
                        width: '90%', // Ensures it takes the full width of the screen
                        backgroundColor:colors.white
                    },
                    textInput: {
                        backgroundColor: colors.white,
                        height: 44,
                        borderRadius: 5,
                        padding: 10,
                        marginVertical: 5,
                        width: '100%',
                    },
                }}
            />
        </View>
    );
};

export default GooglePlacesInput;
