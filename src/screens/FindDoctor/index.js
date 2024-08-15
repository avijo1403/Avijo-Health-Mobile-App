import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem from "../../components/HeaderItem";
import { colors, hp, wp } from "../../Theme/GlobalTheme";
import Carousel from "react-native-snap-carousel";
import { BaseUrl2 } from "../../assets/Data";

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

export default function FindDoctor({ navigation }) {


    const [select, setSelect] = useState(1);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const carouselRef = useRef(null);
    const [initialIndex, setInitialIndex] = useState(0);
    const [time1, setTime1] = useState(true);
    const [time2, setTime2] = useState(false);
    const [doctorData, setDoctorData] = useState([]);

    const fetchDoctorData = async () => {
        try {
            const response = await fetch(`${BaseUrl2}/user/getDoctorConsultations`);
            const json = await response.json();
            setDoctorData(json.consultations);
            console.log('data:', json);
        } catch (e) {
            console.log('error:', e);
        }
    }

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


    useEffect(() => {
        fetchDoctorData();
    }, [])

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
            <HeaderItem text="Find Doctor" onBack={() => navigation.goBack()} showSearch={true} image={<Image source={require('../../assets/images/whiteSearch.png')} style={{ height: 32, width: 32 }} />} />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%', marginLeft: '5%' }}
                    horizontal={true}>
                    <View style={{ flexDirection: 'row', marginRight: 15 }}>
                        <TouchableOpacity onPress={() => handleSelect(1)} style={select === 1 ? styles.optionContainer2 : styles.optionContainer}>
                            <Image source={require('../../assets/images/clinic1.png')} style={{ height: 12, width: 12 }} />
                            <Text style={select === 1 ? styles.optionText2 : styles.optionText}>Doctor Clinics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSelect(2)} style={select === 2 ? styles.optionContainer2 : styles.optionContainer}>
                            <Image source={require('../../assets/images/clinic2.png')} style={{ height: 12, width: 12 }} />
                            <Text style={select === 2 ? styles.optionText2 : styles.optionText}>Medical Store</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSelect(3)} style={select === 3 ? styles.optionContainer2 : styles.optionContainer}>
                            <Image source={require('../../assets/images/clinic3.png')} style={{ height: 12, width: 12 }} />
                            <Text style={select === 3 ? styles.optionText2 : styles.optionText}>Hospitals</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSelect(4)} style={select === 4 ? styles.optionContainer2 : styles.optionContainer}>
                            <Image source={require('../../assets/images/clinic4.png')} style={{ height: 12, width: 12 }} />
                            <Text style={select === 4 ? styles.optionText2 : styles.optionText}>labs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSelect(5)} style={select === 5 ? styles.optionContainer2 : styles.optionContainer}>
                            <Text style={select === 5 ? styles.optionText2 : styles.optionText}>Others</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Text style={styles.mapHeading}>Search By Map</Text>
                <TouchableOpacity onPress={() => navigation.navigate('DoctorDetail')} style={{ width: '100%', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/map.png')} style={styles.map} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: colors.lightgrey, width: '90%', marginTop: '5%', backgroundColor: colors.white }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/images/dr5.png')} style={{ height: 72, width: 72, borderRadius: 10 }} />
                        <View style={{ paddingLeft: '2%', width: '90%' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '5%' }}>Dr. Wilson</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '2%', paddingLeft: '4%' }}>General Pulmonologist</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginTop: '0%', width: '90%', paddingBottom: '5%' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 6 }}>
                                        <Image source={require('../../assets/images/time2.png')} style={{ width: 24, height: 24 }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold' }}>01:00 - 08:00 PM</Text>
                                    </View>
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '6%' }}>Distance. <Text style={{ color: colors.black, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>30 Km away</Text></Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text style={styles.bText1}>Book Now</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', padding: 0, paddingBottom: 0, alignItems: 'center', borderRadius: 6, marginTop: '15%', marginRight: '7%', }}>
                                        <Image source={require('../../assets/images/calendar2.png')} style={{ width: 14, height: 14 }} />
                                        <Text style={{ paddingLeft: 5, fontSize: 12, color: colors.green }}>Available Today</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.calendarContainer}>
                    <TouchableOpacity onPress={goToPrevious} style={styles.arrowButton}>
                        <Image source={require('../../assets/images/left.png')} style={{ height: 24, width: 24 }} />
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
                        <Image source={require('../../assets/images/rightBlack.png')} style={{ height: 24, width: 24 }} />
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
                <FlatList
                    data={doctorData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ConfirmBooking', { id: item._id })} style={{ padding: 10, borderBottomWidth: 1, borderColor: colors.lightgrey, width: '100%', marginTop: '5%', backgroundColor: colors.white }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/dr5.png')} style={{ height: 72, width: 72, borderRadius: 10 }} />
                                <View style={{ paddingLeft: '2%', width: '90%' }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: colors.black, paddingLeft: '5%' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'Gilroy-SemiBold', color: colors.darkGrey, paddingTop: '2%', paddingLeft: '4%' }}>{item.speciality}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginTop: '0%', width: '80%', }}>
                                        <View style={{ flexDirection: 'column', }}>
                                            <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 6 }}>
                                                <Image source={require('../../assets/images/time2.png')} style={{ width: 24, height: 24 }} />
                                                <Text style={{ paddingLeft: 5, fontSize: 10, color: colors.black, fontFamily: 'Gilroy-SemiBold' }}>01:00 - 08:00 PM</Text>
                                            </View>
                                            <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, paddingLeft: '6%' }}>Distance. <Text style={{ color: colors.black, fontSize: 10, fontFamily: 'Gilroy-Medium' }}>30 Km away</Text></Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <TouchableOpacity style={styles.buttonContainer}>
                                                <Text style={styles.bText1}>Book Now</Text>
                                            </TouchableOpacity>
                                            <View style={{ flexDirection: 'row', padding: 0, paddingBottom: 0, alignItems: 'center', borderRadius: 6, marginTop: '15%', marginRight: '7%', }}>
                                                <Image source={require('../../assets/images/calendar2.png')} style={{ width: 14, height: 14 }} />
                                                <Text style={{ paddingLeft: 5, fontSize: 12, color: colors.green }}>Available Today</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
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