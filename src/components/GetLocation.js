import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const GetLocation = () => {
  const [location, setLocation] = useState(null);

  // Request location permission
  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to show your position on the map.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission denied');
        return;
      }
    }

    getLocation();
  };

  // Function to get the current location
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation(position.coords);
      },
      (error) => {
        console.error(error);
        alert('Failed to get location');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Current Location:</Text>
      {location ? (
        <Text>
          Latitude: {location.latitude} Longitude: {location.longitude}
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default GetLocation;
