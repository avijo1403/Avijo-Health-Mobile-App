import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors } from "../Theme/GlobalTheme";

const data = [
    {
        id: 0,
        image: require('../assets/images/laptop.png'),
        text: 'Online Consultation',
        navigate: 'OnlineConsult'
    },
    {
        id: 1,
        image: require('../assets/images/doctor.png'),
        text: 'Find Doctor near You',
        navigate: 'FindDoctor'
    },
    {
        id: 2,
        image: require('../assets/images/medicine.png'),
        text: 'Medicine',
        navigate: 'OnlineMedicine'
    },
    {
        id: 3,
        image: require('../assets/images/lab.png'),
        text: 'Lab Tests',
        navigate: 'Lab'
    }
]

const data2 = [
    {
        id: 0,
        image: require('../assets/images/health.png'),
        text: 'HealthCare products',
        navigate: 'Articles'
    },
    {
        id: 1,
        image: require('../assets/images/med.png'),
        text: 'Stores',
        navigate: 'Articles'
    },
    {
        id: 2,
        image: require('../assets/images/diary.png'),
        text: 'Health Diary',
        navigate: 'Articles'
    },
    {
        id: 3,
        image: require('../assets/images/vlog.png'),
        text: 'Health Vlog',
        navigate: 'Articles'
    }
]

const offerData = [
    require('../assets/images/offer1.png'),
    require('../assets/images/offer2.png'),
    require('../assets/images/offer2.png'),
    require('../assets/images/offer1.png'),
    require('../assets/images/offer1.png'),
]

const specialist = [
    {
        id: 0,
        image: require('../assets/images/OIP1.png'),
        heading: 'Psychologist',
        text: 'Erectile Dystunction, Premoture Ejaculation, Testicular` Pain',
    },
    {
        id: 1,
        image: require('../assets/images/OIP2.png'),
        heading: 'Andrologist',
        text: 'Erectile Dystunction, Premoture Ejaculation, Testicular` Pain',
    },
    {
        id: 2,
        image: require('../assets/images/OIP3.png'),
        heading: 'Cosmetologist',
        text: 'Erectile Dystunction, Premoture Ejaculation, Testicular` Pain',
    },
    {
        id: 3,
        image: require('../assets/images/OIP4.png'),
        heading: 'Diabetologist',
        text: 'Erectile Dystunction, Premoture Ejaculation, Testicular` Pain',
    }
]

const symptomData = [
    {
        id: 0,
        image: require('../assets/images/symp1.png'),
        text: 'Chest Pain',
    },
    {
        id: 1,
        image: require('../assets/images/symp2.png'),
        text: 'Insomnia',
    },
    {
        id: 2,
        image: require('../assets/images/symp3.png'),
        text: 'Testicle Pain',
    },
    {
        id: 3,
        image: require('../assets/images/symp4.png'),
        text: 'Sweating',
    },
    {
        id: 4,
        image: require('../assets/images/symp1.png'),
        text: 'Doctor Consult',
    },
    {
        id: 5,
        image: require('../assets/images/symp3.png'),
        text: 'Testicle Pain',
    },
    {
        id: 6,
        image: require('../assets/images/symp4.png'),
        text: 'Sweating',
    },
    {
        id: 7,
        image: require('../assets/images/symp1.png'),
        text: 'Doctor Consult',
    }
]

const common = [
    {
        id: 0,
        image: require('../assets/images/diabetes.png'),
        text: 'Diabetes',
    },
    {
        id: 1,
        image: require('../assets/images/cancer.png'),
        text: 'Cancer',
    },
    {
        id: 2,
        image: require('../assets/images/mental.png'),
        text: 'Mental Health',
    },
    {
        id: 3,
        image: require('../assets/images/Heart.png'),
        text: 'Heart Disease',
    },
    {
        id: 4,
        image: require('../assets/images/diabetes.png'),
        text: 'Diabetes',
    },
    {
        id: 5,
        image: require('../assets/images/mental.png'),
        text: 'Mental Health',
    },
    {
        id: 6,
        image: require('../assets/images/Heart.png'),
        text: 'Heart Disease',
    },
    {
        id: 7,
        image: require('../assets/images/mental.png'),
        text: 'Mental Health',
    }
]

const test = [
    {
        id: 0,
        image: require('../assets/images/test1.png'),
        text: 'Diabetes',
    },
    {
        id: 1,
        image: require('../assets/images/test2.png'),
        text: 'Skin',
    },
    {
        id: 2,
        image: require('../assets/images/test3.png'),
        text: 'Kidney',
    },
    {
        id: 3,
        image: require('../assets/images/test4.png'),
        text: 'Fever',
    },
    {
        id: 4,
        image: require('../assets/images/test5.png'),
        text: 'Cancer',
    },
    {
        id: 5,
        image: require('../assets/images/test6.png'),
        text: 'Digestion',
    }
]

const test1 = [
    {
        id: 0,
        image: require('../assets/images/lungs.png'),
        text: 'Lungs',
    },
    {
        id: 1,
        image: require('../assets/images/kidney.png'),
        text: 'Kidney',
    },
    {
        id: 2,
        image: require('../assets/images/bone.png'),
        text: 'Bone',
    },
    {
        id: 3,
        image: require('../assets/images/body.png'),
        text: 'Full body checkup',
    },
    {
        id: 4,
        image: require('../assets/images/heart3.png'),
        text: 'Heart',
    },
    {
        id: 5,
        image: require('../assets/images/thyroid.png'),
        text: 'Thyroid',
    },
    {
        id: 6,
        image: require('../assets/images/joint.png'),
        text: 'Joints',
    },
    {
        id: 7,
        image: require('../assets/images/liver.png'),
        text: 'LIver',
    }
]


const consult = [
    {
        id: 0,
        image: require('../assets/images/dr1.png'),
        text: 'Dermatologists',
    },
    {
        id: 1,
        image: require('../assets/images/dr2.png'),
        text: 'Endocrinologists',
    },
    {
        id: 2,
        image: require('../assets/images/dr3.png'),
        text: 'Family Physicians',
    },
    {
        id: 3,
        image: require('../assets/images/dr4.png'),
        text: 'Cardiologist',
    },
    {
        id: 4,
        image: require('../assets/images/dr1.png'),
        text: 'Dermatologists',
    },
    {
        id: 5,
        image: require('../assets/images/dr3.png'),
        text: 'Family Physicians',
    },
    {
        id: 6,
        image: require('../assets/images/dr4.png'),
        text: 'Cardiologist',
    },
    {
        id: 7,
        image: require('../assets/images/dr1.png'),
        text: 'Dermatologists',
    }
]

const consult2 = [
    {
        id: 0,
        image: require('../assets/images/dr1.png'),
        text: 'Maria',
        check: 'true',
    },
    {
        id: 1,
        image: require('../assets/images/dr2.png'),
        text: 'Deepak',
        check: 'false',
    },
    {
        id: 2,
        image: require('../assets/images/dr3.png'),
        text: 'Ankit',
        check: 'false',
    },
    {
        id: 3,
        image: require('../assets/images/dr4.png'),
        text: 'Sharma',
        check: 'false',
    },
    {
        id: 4,
        image: require('../assets/images/dr1.png'),
        text: 'Sharma',
        check: 'false',
    },
    {
        id: 5,
        image: require('../assets/images/dr3.png'),
        text: 'Sharma',
        check: 'false',
    },
    {
        id: 6,
        image: require('../assets/images/dr4.png'),
        text: 'Sharma',
        check: 'false',
    },
    {
        id: 7,
        image: require('../assets/images/dr1.png'),
        text: 'Sharma',
        check: 'false',
    }
]

const article = [
    {
        id: 0,
        image: require('../assets/images/article1.png'),
        text: 'Several essential oil besides curirg ailments can aid overall vision health know about 5 essential',
        favorite: 'true',
        by: 'Dr.Divya Mandial'
    },
    {
        id: 1,
        image: require('../assets/images/article0.png'),
        text: 'Several essential oil besides curirg ailments can aid overall vision health know about 5 essential',
        favorite: 'false',
        by: 'Dr.Divya Mandial'
    },
    {
        id: 2,
        image: require('../assets/images/article3.png'),
        text: 'Several essential oil besides curirg ailments can aid overall vision health know about 5 essential',
        favorite: 'true',
        by: 'Dr.Divya Mandial'
    }
]

const tableOfContent = [
    {
        id: 0,
        heading: 'Introduction',
        text: 'As one of the most common medical conditions affecting people today, high blood pressure or hypertension can be a silent killer. It affects over a billion people worldwide and is a leading cause of stroke, heart attack, and kidney failure. The best part is high blood pressure is manageable and preventable with lifestyle changes and medication.',
    },
    {
        id: 1,
        heading: 'What is Blood Pressure?',
        text: 'Blood pressure is the pressure exerted by the blood against the artery’s walls. The blood pressure reading measurements are commonly taken in millimetres of mercury (mmHg) and are expressed as systolic and diastolic numbers. The systolic blood pressure is the pressure measured when the heart beats, and the diastolic pressure is the pressure measured when the heart rests between beats. When the blood pressure in the arteries is consistently high, it makes the heart work harder than it should. High blood pressure can cause blood vessel damage over time, leading to heart disease, stroke, and other complications. Blood pressure reading measurement is important in determining an individual’s cardiovascular health.',
    },
    {
        id: 2,
        heading: 'What is high Blood Pressure?',
        text: 'According to WHO, high blood pressure is when the pressure in your blood vessels is too high (140/90 mmHg or higher). It is known as hypertension.',
    },
    {
        id: 3,
        heading: 'Risk Factors for high Blood Pressure?',
        text: 'Several risk factors can contribute to high blood pressure, which include: Age: As you age, your risk of high blood pressure rises. Family history: You are more likely to develop high blood pressure if your parents or other close relatives have high blood pressure. Obesity: Having a weight problem or being obese can make you more susceptible to high blood pressure. Lack of exercise: Lack of exercise increases the risk of high blood pressure. Smoking and alcohol: Smoking and alcohol can raise your risk of high blood pressure.',
    },
    {
        id: 4,
        heading: 'Symptoms of high Blood Pressure?',
        imageText: 'The symptoms of high blood pressure include:',
        image: require('../assets/images/bp.png'),
        text: 'Severe headache: It is a common symptom of high blood pressure, especially when accompanied by dizziness and nausea. Anxiety: Getting anxious is another symptom of high blood pressure. It leads to increased heart rate and shallow breathing. Shortness of breath: When the heart has to work harder to pump blood, it can cause shortness of breath, especially during physical activity. Chest pain: High blood pressure can cause chest pain or discomfort due to the increased workload on the heart. Vision problems: Hypertension can cause vision problems such as blurry, double vision, or even vision loss in severe cases. Nosebleeds: Although rare, high blood pressure can cause nosebleeds, especially in people with severe hypertension.',
    },
    {
        id: 5,
        heading: 'What do the Blood Pressure reading indicate?',
        text: 'Severe headache: It is a common symptom of high blood pressure, especially when accompanied by dizziness and nausea. Anxiety: Getting anxious is another symptom of high blood pressure. It leads to increased heart rate and shallow breathing. Shortness of breath: When the heart has to work harder to pump blood, it can cause shortness of breath, especially during physical activity. Chest pain: High blood pressure can cause chest pain or discomfort due to the increased workload on the heart. Vision problems: Hypertension can cause vision problems such as blurry, double vision, or even vision loss in severe cases. Nosebleeds: Although rare, high blood pressure can cause nosebleeds, especially in people with severe hypertension.',
    }
]

const men = [
    {
        id: 0,
        image: require('../assets/images/man1.png'),
        age: '24 - 40'
    },
    {
        id: 1,
        image: require('../assets/images/man2.png'),
        age: '20 - 38'
    },
    {
        id: 2,
        image: require('../assets/images/man3.png'),
        age: '28 - 40'
    },
    {
        id: 3,
        image: require('../assets/images/man1.png'),
        age: '24 - 40'
    }
]

const women = [
    {
        id: 0,
        image: require('../assets/images/woman1.png'),
        age: '24 - 40'
    },
    {
        id: 1,
        image: require('../assets/images/woman2.png'),
        age: '20 - 38'
    },
    {
        id: 2,
        image: require('../assets/images/woman3.png'),
        age: '28 - 40'
    },
    {
        id: 3,
        image: require('../assets/images/woman1.png'),
        age: '24 - 40'
    }
]

bookingSlot = [
    {
        id: 0,
        heading: 'Available',
        time: '6:00 AM - 8:00 PM'
    },
    {
        id: 1,
        heading: 'Available',
        time: '8:00 AM - 10:00 PM'
    },
    {
        id: 2,
        heading: 'Available',
        time: '10:00 AM - 12:00 PM'
    },
    {
        id: 3,
        heading: 'Available',
        time: '12:00 AM - 02:00 PM'
    },
    {
        id: 4,
        heading: 'Available',
        time: '02:00 AM - 8:00 PM'
    },
    {
        id: 5,
        heading: 'Available',
        time: '02:00 AM - 4:00 PM'
    }
]

const shopCategory = [
    {
        id: 0,
        text: 'Skin Care',
        image: require('../assets/images/med4.png'),
    },
    {
        id: 1,
        text: 'Hair Care',
        image: require('../assets/images/med5.png'),
    },
    {
        id: 2,
        text: 'Mom Care',
        image: require('../assets/images/med6.png'),
    },
    {
        id: 3,
        text: 'Skin Care',
        image: require('../assets/images/med4.png'),
    },
    {
        id: 4,
        text: 'Hair Care',
        image: require('../assets/images/med5.png'),
    },
    {
        id: 5,
        text: 'Mom Care',
        image: require('../assets/images/med6.png'),
    }
]

const product = [
    require('../assets/images/product1.png'),
    require('../assets/images/product2.png'),
    require('../assets/images/product3.png'),
    require('../assets/images/product4.png'),
    require('../assets/images/product5.png'),
    require('../assets/images/product6.png'),
]




const profileOption = [
    {
        id: 0,
        text: 'Questions'

    },
    {
        id: 1,
        text: 'Answers'
    },
    {
        id: 2,
        text: 'Followings'
    },
    {
        id: 3,
        text: 'Followers'
    },
    {
        id: 4,
        text: 'Posts'
    }
]
const detailOption = [
    {
        id: 0,
        text: 'About'

    },
    {
        id: 1,
        text: 'Answers'
    },
    {
        id: 2,
        text: 'Questions'
    },
    {
        id: 3,
        text: 'Followers'
    }
]



const notiData = [
    {
        id: 0,
        image: require('../assets/images/calendar6.png'),
        name: 'Micheal Owen',
        text: 'Its Micheal Owen birthday  today',
        time: '2:00 PM',
        duration: '1 Day ago',
    },
    {
        id: 1,
        image: require('../assets/images/candle.png'),
        name: 'Mauris',
        text: 'Recent Appointments with Mauris',
        time: '2:00 PM',
        duration: '1 Day ago',
    },
    {
        id: 2,
        image: require('../assets/images/calendar6.png'),
        name: 'Micheal Owen',
        text: 'Its Micheal Owen birthday  today',
        time: '2:00 PM',
        duration: '1 Day ago',
    },
    {
        id: 3,
        image: require('../assets/images/candle.png'),
        name: 'Mauris',
        text: 'Recent Appointments with Mauris',
        time: '2:00 PM',
        duration: '1 Day ago',
    }
]


export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.error('Failed to fetch the data from storage', e);
    }
};


const productCategory = [
    {
        id: 0,
        image: require('../assets/images/personal7.png'),
        text: 'Moisturizer',
    },
    {
        id: 1,
        image: require('../assets/images/personal6.png'),
        text: 'Sunscreen',
    },
    {
        id: 2,
        image: require('../assets/images/personal6.png'),
        text: 'Deodorant',
    },
    {
        id: 3,
        image: require('../assets/images/personal5.png'),
        text: 'Lip Balm',
    },
    {
        id: 4,
        image: require('../assets/images/personal4.png'),
        text: 'Toothpaste',
    },
    {
        id: 5,
        image: require('../assets/images/personal3.png'),
        text: 'Body Wash',
    },
    {
        id: 6,
        image: require('../assets/images/personal2.png'),
        text: 'Conditioner',
    },
    {
        id: 7,
        image: require('../assets/images/personal1.png'),
        text: 'Shampoo',
    },
    // {
    //     id: 8,
    //     image: require('../assets/images/category9.png'),
    //     text: 'Accessories',
    // },
    // {
    //     id: 9,
    //     image: require('../assets/images/category10.png'),
    //     text: 'Baby Care',
    // },
    // {
    //     id: 10,
    //     image: require('../assets/images/category11.png'),
    //     text: 'Mom Care',
    // },
    // {
    //     id: 11,
    //     image: require('../assets/images/category12.png'),
    //     text: 'Wearables',
    // }
]

const personalCare = [
    {
        id: 0,
        image: require('../assets/images/personalCare1.png'),
        text: 'Moisturizer'
    },
    {
        id: 1,
        image: require('../assets/images/personalCare2.png'),
        text: 'Sunscreen'
    },
    {
        id: 2,
        image: require('../assets/images/personalCare3.png'),
        text: 'Deodorant'
    },
    {
        id: 3,
        image: require('../assets/images/personalCare4.png'),
        text: 'Lip Balm'
    }

]


const hilight = [
    {
        id: 0,
        image: require('../assets/images/hilight1.png'),
        text: 'Top product',
    },
    {
        id: 1,
        image: require('../assets/images/hilight2.png'),
        text: 'Nutrition',
    },
    {
        id: 2,
        image: require('../assets/images/hilight3.png'),
        text: 'Vitamins',
    },
    {
        id: 3,
        image: require('../assets/images/hilight4.png'),
        text: 'Respiratory',
    },
    {
        id: 4,
        image: require('../assets/images/hilight5.png'),
        text: 'Women care',
    },
    {
        id: 5,
        image: require('../assets/images/hilight6.png'),
        text: 'Ayurvedic care',
    }
]



const conditions = [
    {
        id: 0,
        image: require('../assets/images/condition9.png'),
        text: 'Allergy Relief',
    },
    {
        id: 1,
        image: require('../assets/images/condition8.png'),
        text: 'Diabetes Care',
    },
    {
        id: 2,
        image: require('../assets/images/condition7.png'),
        text: 'Heart Health',
    },
    {
        id: 3,
        image: require('../assets/images/condition6.png'),
        text: 'Diabetes Care',
    },
    {
        id: 4,
        image: require('../assets/images/condition5.png'),
        text: 'Joint & Bone Health',
    },
    {
        id: 5,
        image: require('../assets/images/condition4.png'),
        text: 'Immune Support',
    },
    {
        id: 6,
        image: require('../assets/images/condition3.png'),
        text: 'Digestive Health',
    },
    {
        id: 7,
        image: require('../assets/images/condition2.png'),
        text: 'Respiratory Health',
    },
    {
        id: 8,
        image: require('../assets/images/condition1.png'),
        text: 'Mental Wellness',
    }
]

const allCategory = [
    {
        id: 0,
        image: require('../assets/images/all1.png'),
        text: 'Allergy Relief',
        subText: 'Top Diabetic Care, Vitam..',
        color: colors.lightPink,
    },
    {
        id: 1,
        image: require('../assets/images/all2.png'),
        text: 'Diabetes Care',
        subText: 'Homeopathy Care..',
        color: colors.darkPink,
    },
    {
        id: 2,
        image: require('../assets/images/all3.png'),
        text: 'Heart Health',
        subText: 'Glucometer, BP M...',
        color: colors.skin,
    },
    {
        id: 3,
        image: require('../assets/images/all4.png'),
        text: 'Diabetes Care',
        subText: 'Top Diabetic Care, Vitam..',
        color: colors.lightGreen2,
    },
    {
        id: 4,
        image: require('../assets/images/all5.png'),
        text: 'Joint & Bone Health',
        subText: 'Top Diabetic Care, Vitam..',
        color: colors.skyblue,
    },
    {
        id: 5,
        image: require('../assets/images/all6.png'),
        text: 'Immune Support',
        subText: 'Immunity Boosters..',
        color: colors.darkPink,
    },
    {
        id: 6,

        image: require('../assets/images/all7.png'),
        text: 'Digestive Health',
        subText: 'Diabetic & Ortho F..',
        color: colors.lightPink,
    },
    {
        id: 7,
        image: require('../assets/images/all8.png'),
        text: 'Respiratory Health',
        subText: 'Stomach care,Skin..',
        color: colors.lightPurple,
    }
]



const newSearch = [
    {
        id: 0,
        image: require('../assets/images/new1.png'),
        text: 'Multivitamins',
    },
    {
        id: 1,
        image: require('../assets/images/new2.png'),
        text: 'Magnesium',
    },
    {
        id: 2,
        image: require('../assets/images/new3.png'),
        text: 'Probiotics',
    },
    {
        id: 3,
        image: require('../assets/images/new3.png'),
        text: 'Respiratory',
    }
]

const recordData = [
    {
        id: 0,
        image: require('../assets/images/record1.png'),
        text: 'Medications',
    },
    {
        id: 1,
        image: require('../assets/images/record2.png'),
        text: 'Lab Report'
    }
]


const chatData = [
    {
        id: 0,
        name: 'Dr. Jii (Ai health assistance)',
        image: require('../assets/images/dr-ji.png'),
        pin: true,
    },
    {
        id: 1,
        name: 'Alis Smith',
        image: require('../assets/images/dash2.png'),
        pin: false,
    },
    {
        id: 2,
        name: 'Roomi',
        image: require('../assets/images/dash3.png'),
        pin: false,
    },
    {
        id: 3,
        name: 'Roomi',
        image: require('../assets/images/dash3.png'),
        pin: false,
    }
]

const tipData = [
    {
        id:0,
        text:'😀 ₹',
        price:20,
    },
    {
        id:1,
        text:'🤩 ₹',
        price:30,
        most:true,
    },
    {
        id:2,
        text:'😍 ₹',
        price:50,
    },
    {
        id:3,
        text:'👏 ₹',
        price:100,
    }
]

export const calculateAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Check if the birthday has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// const BaseUrl = "https://avijobackendtest-production-6295.up.railway.app";
const BaseUrl2 = "https://avijobackend-production.up.railway.app";



export {
    data,
    offerData,
    specialist,
    symptomData,
    consult,
    common,
    data2,
    consult2,
    article,
    tableOfContent,
    BaseUrl2,
    test,
    test1,
    men,
    women,
    shopCategory,
    product,
    profileOption,
    notiData,
    productCategory,
    hilight,
    conditions,
    allCategory,
    newSearch,
    detailOption,
    recordData,
    personalCare,
    chatData,
    tipData,
    hp,
    wp,
};