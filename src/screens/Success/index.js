import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { colors } from "../../Theme/GlobalTheme";
import Button1 from "../../components/Button1";
import { Rating } from "react-native-ratings";
import { BaseUrl2 } from "../../assets/Data";

export default function Success({ navigation }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    if (review.length < 12) {
      alert("Please enter at least 12 characters for the review.");
      return; // Ensure the review is at least 12 characters
    }

    try {
      const response = await fetch(`${BaseUrl2}/user/createReview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other necessary headers here
        },
        body: JSON.stringify({
          rating: rating,
          comment: review,
          // Include any additional data you want to send with the POST request
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        console.log('Review submitted successfully:', data);
        alert('Thank you for your feedback!');
        setReview('');
      } else {
        // Handle error
        console.error('Failed to submit review:', data);
        alert('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/success.png')} style={{ height: 40, width: 40 }} />
      <Text style={styles.heading}>Consultation Successful</Text>
      <View style={styles.docContainer}>
        <Text style={styles.docHeading}>Doctor Details</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/dr5.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Dr. Wilson</Text>
            <Text style={styles.detail}>General Pulmonologist</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '80%', marginTop: '5%' }}>
        <View style={{ height: 1, width: '100%', marginTop: '5%', backgroundColor: colors.lightgrey, marginBottom: '5%' }} />
        <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, width: '90%' }}>Consultation / Doctor Review</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={16}
          style={{ height: 16, width: 93, marginTop: '2%', marginBottom: '2%' }}
          ratingBackgroundColor={colors.white}
          startingValue={rating}
          onFinishRating={handleRating}
        />
        <TextInput
          style={{ height: 85, borderWidth: 1, borderRadius: 12, borderColor: '#E1BCB7', fontSize: 14, fontFamily: 'Gilroy-Medium', paddingLeft: 15, marginTop:'5%' }}
          placeholder="Your type reviews and suggestions here,"
          textAlignVertical="top"
          placeholderTextColor={colors.grey}
          multiline={true}
          value={review}
          onChangeText={setReview}
        />
        <Text style={{ fontSize: 12, fontFamily: "Gilroy-Medium", color: colors.grey, marginTop: '3%' }}>Min 12 Characters</Text>
        <TouchableOpacity 
          style={{ borderWidth: 1, width: 90, padding: 10, borderRadius: 5, borderColor: colors.blue, alignItems: 'center', alignSelf: 'flex-end' }}
          onPress={handleSubmit} // Call handleSubmit on press
        >
          <Text style={{ fontSize: 12, fontFamily: 'Gilroy-Medium', color: colors.blue }}>Submit Now</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ width: '90%', fontFamily: 'Gilroy-Medium', fontSize: 12, color: colors.darkGrey, paddingLeft: '3%', paddingTop: '8%' }}>
        You can follow up or check your Consultations Details by clicking my consultations button.
      </Text>
      <View style={{ width: '100%', alignItems: 'center', marginTop: '5%' }}>
        <Button1 Text="My Consultation" onPress={() => navigation.navigate('Consultation')} />
      </View>
    </View>
  )
}
