import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    phoneContainer:{
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-start',
        marginLeft:'2%',
        marginTop:'10%'
    },
    input:{
        width:'100%',
        height:52,
        backgroundColor:colors.white,
        borderRadius:6,
        borderColor:colors.grey,
        paddingLeft:15,
        fontSize:13,
    },
    heading:{
        color:colors.blue,
        fontSize:32,
        fontFamily:'Gilroy-Bold',
        alignSelf:'flex-start',
        marginLeft:'5%',
    },
    textContainerStyle:{ 
        backgroundColor: colors.white, 
        borderBottomWidth:1,
    },
    codeTextStyle:{ 
        color: colors.black, 
        fontSize: 14, 
        fontFamily: 'Poppins-Regular', 
    },
    textInputStyle:{ 
        color: colors.black, 
        fontSize: 14, 
        fontFamily: 'Poppins-Regular', 
        height: 48 
    },
    text:{
        color:colors.grey,
        width:'90%',
        marginTop:'5%',
        },
    phoneText:{
        fontSize:12,
        fontFamily:'Gilroy-SemiBold',
        alignSelf:'flex-start',
        marginLeft:'5%',
        color:colors.blue,
    },
    orContainer:{
      flexDirection:'row',
      width:'90%',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:'10%'
    },
    line:{
        width:'43%',
        height:1,
        backgroundColor:colors.black,
    },
    or:{
        fontSize:16,
        color:colors.black,
    },
    iconContainer:{
        marginTop:'10%',
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        height:23,
        width:23
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