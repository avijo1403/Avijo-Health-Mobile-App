import React, { useContext, useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { setAreaName } from '../components/locationAction';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../screens/OnlineMedicine';



const GetLocation = () => {
  const [location, setLocation] = useContext(Context);
  const [coordinates, setCoordinates] = useState(null);
  const [postCode, setPostCode] = useState(null);

  const dispatch = useDispatch(); // To dispatch actions
  const areaName = useSelector((state) => state.areaName);
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
        // console.log('Location permission denied');
        return;
      }
    }

    getLocation();
  };

  const getLocationDetails = async (lat, lng) => {
    const apiKey = 'AIzaSyBR4iLjpG8FEw-gOBmL0MmX701c6E8iT2g'; // Your API Key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&language=en&region=pk`;

    try {
      const response = await fetch(url); // Using fetch instead of axios

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parsing the response to JSON

      if (data.status === 'OK') {
        const results = data.results;
        const addressComponents = results[0].address_components;

        let areaName = '';
        let pincode = '';

        // Loop through address components to find area and pincode
        for (let component of addressComponents) {
          if (component.types.includes('locality')) {
            areaName = component.long_name; // Get the area (city/town)
            if (postCode) {
              setLocation({ area: areaName, pincode: postCode });
            }
          }
          // if (component.types.includes('postal_code')) {
          //   pincode = component.long_name; // Get the pincode
          // }
          // console.log(`comp: ${component.long_name}`);
        }

        // console.log(`Area Name: ${areaName}`);
        dispatch(setAreaName(areaName));
        // console.log(`Pincode: ${pincode}`);

      } else {
        console.log('No valid result found');
      }
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  }


  // Function to get the current location
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCoordinates(position.coords);
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
      getLocationDetails(latitude, longitude);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      const data = await response.json();
      // console.log('Address:', data.address);
      // console.log('pincode:', data.address.postcode);
      setPostCode(data.address.postcode);
      // return data.address;
    } catch (error) {
      console.error('Error with reverse geocoding:', error);
      return null;
    }
  };



  useEffect(() => {

    getLocation();
    // console.log('postcode:', pincode);
    reverseGeocode(coordinates?.latitude, coordinates?.longitude).then(address => {
      // console.log('Address:', address, location);
    });
    requestPermission();

  }, [coordinates]);

  return (
    <View style={{ height: 0, width: 0 }}>
    </View>
  );
};

export default GetLocation;
