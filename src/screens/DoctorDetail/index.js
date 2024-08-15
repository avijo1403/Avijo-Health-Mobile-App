import React, { useRef, useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import Carousel from "react-native-snap-carousel";
import Button1 from "../../components/Button1";


const generateDates = () => {
    const dates = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // Current month (0-indexed)
    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get number of days in the current month

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        dates.push({
            dateString: `${date.toLocaleString('default', { month: 'short' })} ${day}`,
            isCurrentDate: day === currentDay,
            day: day,
        });
    }

    return dates;
};

export default function DoctorDetail({ navigation }) {


    const [select, setSelect] = useState(1);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const carouselRef = useRef(null);
    const [initialIndex, setInitialIndex] = useState(0);
    const [time1, setTime1] = useState(true);
    const [time2, setTime2] = useState(false);

    const handleTime1 = () => {
        setTime1(true);
        setTime2(false);
    }

    const handleTime2 = () => {
        setTime1(false);
        setTime2(true);
    }

    useEffect(() => {
        const generatedDates = generateDates();
        setDates(generatedDates);

        const currentIndex = generatedDates.findIndex(date => date.isCurrentDate);
        setInitialIndex(currentIndex);
        setSelectedDate(generatedDates[currentIndex].day); // Set the initial selected date to the current date
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedDate(item.day)}>
            <View style={[
                styles.itemContainer,
                item.day === selectedDate && styles.selectedDateContainer
            ]}>
                <Text style={[
                    styles.dateText,
                    item.day === selectedDate && styles.selectedDateText
                ]}>
                    {item.dateString}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const goToNext = () => {
        carouselRef.current.snapToNext();
    };

    const goToPrevious = () => {
        carouselRef.current.snapToPrev();
    };


    const handleSelect = (number) => {
        setSelect(number);
    }


    return (
        <View style={styles.container}>
            <HeaderItem2 text="Reshedule Appointment" onPress={() => navigation.goBack()} />
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.topContainer}>
                    <View style={styles.timeContainer}>
                        <Image source={require('../../assets/images/calender3.png')} style={{ height: 24, width: 24 }} />
                        <Text style={styles.date}>On {new Date().toLocaleString('default', { month: 'short' })} 20, {new Date().getFullYear()}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Image source={require('../../assets/images/clock.png')} style={{ height: 24, width: 24 }} />
                        <Text style={styles.date}>At 3:30 PM</Text>
                    </View>
                </View>
                <Text style={styles.changeText}>Change date & time</Text>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', alignSelf:'center', justifyContent:'center', marginRight:'20%' }}>
                    <View style={{ width: '70%', marginTop: '5%', flexDirection: 'row', }}>
                        <Image source={require('../../assets/images/dr6.png')} style={{ width: 56, height: 58, borderRadius: 5, alignSelf: 'center' }} />
                        <View style={{ marginLeft: '5%', width: '70%' }}>
                            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.blue }}>Dr. Jane Cooper</Text>
                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: colors.darkGrey, paddingTop: '3%' }}>Psychologist at Apple Hospital</Text>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Exp. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>22 years</Text></Text>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>fees. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>$30</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '80%', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Distance.</Text>
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>30 Km away</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/stars.png')} style={{ height: 12, width: 73, marginTop: '2%' }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>(152)</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%', justifyContent: 'space-between', alignSelf: 'flex-start', marginTop: '5%' }}>
                            <View style={styles.availableContainer}>
                                <Image source={require('../../assets/images/calendar2.png')} style={{ height: 12, width: 12 }} />
                                <Text style={styles.available}>Available Today</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={styles.bText1}>Book clinic Visit</Text>
                                <Text style={styles.bText2}>No Booking Fee</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.calendarContainer}>
                    <TouchableOpacity onPress={goToPrevious} style={styles.arrowButton}>
                        <Image source={require('../../assets/images/left.png')} style={{ height: 10, width: 10 }} />
                    </TouchableOpacity>
                    <Carousel
                        ref={carouselRef}
                        data={dates}
                        renderItem={renderItem}
                        sliderWidth={250}
                        itemWidth={70}
                        firstItem={initialIndex} // Start from the current date
                    />
                    <TouchableOpacity onPress={goToNext} style={styles.arrowButton}>
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 10, width: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.moonContainer}>
                    <Image source={require('../../assets/images/moon.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.moonText}>Evening Slope</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '5%' }}>
                    <TouchableOpacity onPress={handleTime1} style={{ borderWidth: time1 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time1 ? colors.orange : colors.darkGrey }}>07.00 PM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTime2} style={{ borderWidth: time2 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time2 ? colors.orange : colors.darkGrey }}>08.00 PM</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.about}>About</Text>
                <Text style={styles.aboutText}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <Text style={[styles.aboutText, { marginTop: '3%' }]}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <TouchableOpacity style={{ width: '90%' }}><Text style={[styles.aboutText, { color: colors.blue, textDecorationLine: 'underline' }]}>Know more</Text></TouchableOpacity>
                <Text style={styles.specialization}>Specialization</Text>
                <Text style={styles.generalMedicine}>MD (General Medicine)</Text>
                <Text style={styles.specialization}>Experience</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Consultation</Text>
                <Text style={styles.generalMedicine}>Currently Practicing- From June 2022</Text>
                <Text style={styles.specialization}>Education</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Medical University of Health Science</Text>
                <Text style={styles.generalMedicine}>Currently Practicing- From June 2022</Text>
                <View style={{ borderRadius: 50, backgroundColor: colors.lightgrey, alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%' }}>
                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, padding: 10, paddingLeft: 20, paddingRight: 20 }}>2022-2024</Text>
                </View>
                <Text style={styles.specialization}>Clinic Details</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, width: '90%', marginTop: '5%' }}>Elite Clinic</Text>
                <Text style={styles.generalMedicine}>3rd Floor,Headquarter Building,Satya Sai Square,Indore</Text>
                <View style={{width:'100%', alignItems:'center', marginTop:'5%', marginBottom:'5%'}}>
                    <Button1 Text="Consult Online" onPress={()=>navigation.navigate('ConfirmBooking')}/>
                </View>
            </ScrollView>
        </View>
    )
}


// Additional styles for the selected date
const selectedDateStyle = {
    selectedDateContainer: {
        backgroundColor: colors.white, // or any other color you prefer
        borderBottomWidth: 4,
        borderColor: colors.orange,
    },
    selectedDateText: {
        color: colors.orange, // or any other color you prefer
    },
};

Object.assign(styles, selectedDateStyle);