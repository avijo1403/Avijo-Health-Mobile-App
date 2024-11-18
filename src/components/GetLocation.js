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

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      const data = await response.json();
      console.log('Address:', data.address);
      return data.address;
    } catch (error) {
      console.error('Error with reverse geocoding:', error);
      return null;
    }
  };



  useEffect(() => {

    reverseGeocode(location?.latitude, location?.longitude).then(address => {
      console.log('Address:', address);
    });
    requestPermission();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Current Location:</Text>
      {location ? (
        <Text>
          Latitude: {location?.latitude} Longitude: {location?.longitude}
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default GetLocation;
