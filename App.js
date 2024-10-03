import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import OtpVerify from './src/screens/OtpVerify';
import CreateAccount from './src/screens/CreateAccount';
import Home from './src/screens/Home';
import BottomNav from './src/navigations/BottomNav';
import OnlineConsult from './src/screens/OnlineConsult';
import Profile from './src/screens/Profile';
import New from './src/screens/New';
import UHIID from './src/screens/UHIID';
import AddPayment from './src/screens/AddPayment';
import PaymentItem from './src/components/PaymentItem';
import PaymentMethod from './src/screens/PaymentMethod';
import Success from './src/screens/Success';
import Detail from './src/screens/Detail';
import Reschedule from './src/screens/Reschedule';
import Consultation from './src/screens/Consultation';
import Chat from './src/screens/Chat';
import FindDoctor from './src/screens/FindDoctor';
import DoctorDetail from './src/screens/DoctorDetail';
import ConfirmBooking from './src/screens/ConfirmBooking';
import AppointmentConfirm from './src/screens/AppointmentConfirm';
import AppointmentCancel from './src/screens/AppointmentCancel';
import VideoChat from './src/screens/VideoChat';
import ConsultDetail from './src/screens/ConsultDetail';
import Articles from './src/screens/Articles';
import HealthArticles from './src/screens/HealthArticles';
import Support from './src/screens/Support';
import Address from './src/screens/Address';
import NewAddress from './src/screens/NewAddress';
import ManageAddress from './src/screens/ManageAddress';
import HealthRecords from './src/screens/HealthRecords';
import AddNewUser from './src/screens/AddNewUser';
import SaveUser from './src/screens/SaveUser';
import UploadDoc from './src/screens/UploadDoc';
import AssignDoc from './src/screens/AssignDoc';
import Wallet from './src/screens/Wallet';
import Order from './src/screens/Order';
import OrderDetail from './src/screens/OrderDetail';
import Reviews from './src/screens/Reviews';
import Lab from './src/screens/Lab';
import LabOrder from './src/screens/LabOrder';
import LabReview from './src/screens/LabReview';
import LabCart from './src/screens/LabCart';
import Slot from './src/screens/Slot';
import OnlineMedicine from './src/screens/OnlineMedicine';
import AttachPrescription from './src/screens/AttachPrescription';
import OrderReview from './src/screens/OrderReview';
import ProductList from './src/screens/ProductList';
import MyCart from './src/screens/MyCart';
import ProductDetail from './src/screens/ProductDetail';
import AbhaLogin from './src/screens/AbhaLogin';
import AbhaPhone from './src/screens/AbhaPhone';
import AbhaOtp from './src/screens/AbhaOtp';
import AbhaSelect from './src/screens/AbhaSelect';
import AbhaSuccess from './src/screens/AbhaSuccess';
import AbhaTerms from './src/screens/AbhaTerms';
import AbhaQR from './src/screens/AbhaQR';
import AbhaRegister from './src/screens/AbhaRegister';
import AbhaPassword from './src/screens/AbhaPassword';
import ScanScreen from './src/screens/ScanScreen';
import AddQuestion from './src/screens/AddQuestion';
import UserProfile from './src/screens/UserProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='OtpVerify' component={OtpVerify} options={{ headerShown: false }} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name='BottomNav' component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name='OnlineConsult' component={OnlineConsult} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='New' component={New} options={{ headerShown: false }} />
        <Stack.Screen name='UHIID' component={UHIID} options={{ headerShown: false }} />
        <Stack.Screen name='AddPayment' component={AddPayment} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name='Success' component={Success} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name='Reschedule' component={Reschedule} options={{ headerShown: false }} />
        <Stack.Screen name='Consultation' component={Consultation} options={{ headerShown: false }} />
        <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name='FindDoctor' component={FindDoctor} options={{ headerShown: false }} />
        <Stack.Screen name='DoctorDetail' component={DoctorDetail} options={{ headerShown: false }} />
        <Stack.Screen name='ConfirmBooking' component={ConfirmBooking} options={{ headerShown: false }} />
        <Stack.Screen name='AppointmentConfirm' component={AppointmentConfirm} options={{ headerShown: false }} />
        <Stack.Screen name='AppointmentCancel' component={AppointmentCancel} options={{ headerShown: false }} />
        <Stack.Screen name='VideoChat' component={VideoChat} options={{ headerShown: false }} />
        <Stack.Screen name='ConsultDetail' component={ConsultDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Articles' component={Articles} options={{ headerShown: false }} />
        <Stack.Screen name='HealthArticles' component={HealthArticles} options={{ headerShown: false }} />
        <Stack.Screen name='Support' component={Support} options={{ headerShown: false }} />
        <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
        <Stack.Screen name='NewAddress' component={NewAddress} options={{ headerShown: false }} />
        <Stack.Screen name='ManageAddress' component={ManageAddress} options={{ headerShown: false }} />
        <Stack.Screen name='HealthRecords' component={HealthRecords} options={{ headerShown: false }} />
        <Stack.Screen name='AddNewUser' component={AddNewUser} options={{ headerShown: false }} />
        <Stack.Screen name='SaveUser' component={SaveUser} options={{ headerShown: false }} />
        <Stack.Screen name='UploadDoc' component={UploadDoc} options={{ headerShown: false }} />
        <Stack.Screen name='AssignDoc' component={AssignDoc} options={{ headerShown: false }} />
        <Stack.Screen name='Wallet' component={Wallet} options={{ headerShown: false }} />
        <Stack.Screen name='Order' component={Order} options={{ headerShown: false }} />
        <Stack.Screen name='OrderDetail' component={OrderDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Reviews' component={Reviews} options={{ headerShown: false }} />
        <Stack.Screen name='Lab' component={Lab} options={{ headerShown: false }} />
        <Stack.Screen name='LabOrder' component={LabOrder} options={{ headerShown: false }} />
        <Stack.Screen name='LabReview' component={LabReview} options={{ headerShown: false }} />
        <Stack.Screen name='LabCart' component={LabCart} options={{ headerShown: false }} />
        <Stack.Screen name='Slot' component={Slot} options={{ headerShown: false }} />
        <Stack.Screen name='OnlineMedicine' component={OnlineMedicine} options={{ headerShown: false }} />
        <Stack.Screen name='AttachPrescription' component={AttachPrescription} options={{ headerShown: false }} />
        <Stack.Screen name='OrderReview' component={OrderReview} options={{ headerShown: false }} />
        <Stack.Screen name='ProductList' component={ProductList} options={{ headerShown: false }} />
        <Stack.Screen name='MyCart' component={MyCart} options={{ headerShown: false }} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaLogin' component={AbhaLogin} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaPhone' component={AbhaPhone} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaOtp' component={AbhaOtp} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaSelect' component={AbhaSelect} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaSuccess' component={AbhaSuccess} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaTerms' component={AbhaTerms} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaQR' component={AbhaQR} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaRegister' component={AbhaRegister} options={{ headerShown: false }} />
        <Stack.Screen name='AbhaPassword' component={AbhaPassword} options={{ headerShown: false }} />
        <Stack.Screen name='ScanScreen' component={ScanScreen} options={{ headerShown: false }} />
        <Stack.Screen name='AddQuestion' component={AddQuestion} options={{ headerShown: false }} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})