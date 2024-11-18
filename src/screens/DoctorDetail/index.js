import React, { useRef, useState, useEffect } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HeaderItem2 from "../../components/HeaderItem2";
import { colors } from "../../Theme/GlobalTheme";
import Carousel from "react-native-snap-carousel";
import { detailOption, profileOption } from "../../assets/Data";
import Button3 from "../../components/Button3";
import Button2 from "../../components/Button2";


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
            <HeaderItem2 onPress={() => navigation.goBack()} />
            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center', marginTop: '5%', paddingBottom: '5%' }}>
                {/* <View style={styles.topContainer}>
                    <View style={styles.timeContainer}>
                        <Image source={require('../../assets/images/calender3.png')} style={{ height: 24, width: 24 }} />
                        <Text style={styles.date}>On {new Date().toLocaleString('default', { month: 'short' })} 20, {new Date().getFullYear()}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Image source={require('../../assets/images/clock.png')} style={{ height: 24, width: 24 }} />
                        <Text style={styles.date}>At 3:30 PM</Text>
                    </View>
                </View> */}
                {/* <Text style={styles.changeText}>Change date & time</Text> */}
                {/* <View style={{ width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image source={require('../../assets/images/building.png')} style={{ height: 112, width: '45%' }} />
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Bold', color: colors.black, width: '50%', textAlign: 'center' }}>Pysical examinations and vaccinations</Text>
                </View> */}
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', alignSelf: 'center', justifyContent: 'center', marginTop: '0%' }}>
                    <View style={{ width: '90%', marginTop: '0%', flexDirection: 'row', alignItems:'flex-start' }}>
                        <Image source={require('../../assets/images/dr6.png')} style={{ width: 56, height: 58, borderRadius: 5 }} />
                        <View style={{ marginLeft: '5%', width: '80%' }}>
                            <Text style={{ fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: colors.blue }}>Dr. Jane Cooper</Text>
                            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 12, color: colors.darkGrey, paddingTop: '3%' }}>Psychologist at Apple Hospital</Text>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '60%', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Exp. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>22 years</Text></Text>
                                <Text style={{ fontSize: 9, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>fees. <Text style={{ fontSize: 9, fontFamily: 'Gilroy-SemiBold', color: colors.black }}>$30</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: '1%', width: '90%', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%', marginBottom: '5%' }}>
                                <TouchableOpacity style={{ backgroundColor: colors.blue, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/follow.png')} style={{ height: 8, width: 8, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.white }}>Follow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.white, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/notify.png')} style={{ height: 10, width: 10, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Notify me</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: colors.white, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 25, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.grey }}>
                                    <Image source={require('../../assets/images/ask2.png')} style={{ height: 8, width: 8, marginRight: 5 }} />
                                    <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey }}>Ask</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/dot1.png')} style={{ height: 25, width: 25 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/stars.png')} style={{ height: 12, width: 73, marginTop: '2%' }} />
                                <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Medium', color: colors.darkGrey, marginLeft: '2%', marginTop: '2%' }}>(152)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.calendarContainer}>
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
                </View> */}
                {/* <View style={styles.moonContainer}>
                    <Image source={require('../../assets/images/moon.png')} style={{ height: 24, width: 24 }} />
                    <Text style={styles.moonText}>Evening Slope</Text>
                </View> */}
                {/* <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '5%' }}>
                    <TouchableOpacity onPress={handleTime1} style={{ borderWidth: time1 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time1 ? colors.orange : colors.darkGrey }}>07.00 PM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleTime2} style={{ borderWidth: time2 ? 2 : 0, padding: '2%', width: '30%', alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderColor: colors.orange }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Gilroy-Regular', color: time2 ? colors.orange : colors.darkGrey }}>08.00 PM</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <FlatList
                        data={detailOption}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ marginLeft: '5%', paddingRight: '5%', marginTop: "7%" }}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelect(item.id)} style={{ width: 100, alignItems: 'center', borderBottomWidth: 2, borderColor: colors.grey }}>
                                <Text style={{ width: 110, textAlign: 'center', paddingBottom: '5%', fontSize: 14, fontFamily: 'Gilroy-SemiBold', borderBottomWidth: 2, borderColor: select === item.id ? colors.blue : colors.white, color: select === item.id ? colors.blue : colors.black }}>{item.text}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <>
                    <Text style={styles.about}>About</Text>
                    <Text style={styles.aboutText}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                    <Text style={[styles.aboutText, { marginTop: '3%' }]}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    {/* <TouchableOpacity style={{ width: '90%' }}><Text style={[styles.aboutText, { color: colors.blue, textDecorationLine: 'underline' }]}>Know more</Text></TouchableOpacity> */}
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                        <View style={{ width: '50%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                            <Button3 Text="Book Visit" bottomText="No Booking Fee" left={<Image source={require('../../assets/images/inClinic.png')} style={{ height: 22, width: 22, marginRight: 5 }} />} onPress={() => navigation.navigate('ConfirmBooking')} />
                        </View>
                        <View style={{ width: '50%', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                            <Button2 backgroundColor={colors.blue} Text="Consult Online" image={<Image source={require('../../assets/images/video2.png')} style={{ height: 22, width: 22, marginRight: 5 }} />} onPress={() => navigation.navigate('ConfirmBooking')} />
                        </View>
                    </View>
                </>
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