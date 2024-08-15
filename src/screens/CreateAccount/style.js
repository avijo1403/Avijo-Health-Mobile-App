import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    heading:{
        color:colors.blue,
        fontSize:32,
        fontFamily:'Gilroy-Bold',
        alignSelf:'flex-start',
        marginLeft:'5%',
        bottom:'2%'
    },
    otpHeading:{
        fontSize:12,
        fontFamily:'Gilroy-Medium',
        alignSelf:'flex-start',
        marginLeft:'5%',
        marginTop:'10%'
    },
    otpTextContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        margin:15,
        top:'1%'
    },
    otpText:{
        fontSize:10,
        fontFamily:'Gilroy-Medium',
        color:colors.grey,
    },
    change:{
        fontSize:12,
        fontFamily:'Gilroy-SemiBold',
        color:colors.maroon
    }
})

export default styles;