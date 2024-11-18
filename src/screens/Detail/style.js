import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    detailHeading:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        marginTop:'5%',
        alignSelf:'center'
    },
    patientContainer:{
        flexDirection:'row',
        width:'90%',
        padding:'5%',
        paddingLeft:'0%',
        alignSelf:'center'
    },
    subPatient:{
        marginLeft:'5%',
        width:'90%',
    },
    patientName:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
    },
    genderContainer:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'3%'
    },
    gender:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.blue,
    },
    genderDetail:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
    },
    detailContainer:{
        flexDirection:'row',
        width:'90%',
        paddingTop:'3%',
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center'
    },
    detailOption:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
    },
    detail:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
    },
    callContainer:{
        flexDirection:'row',
        height:45, 
        width:'90%',
        borderWidth:1,
        borderColor:colors.blue,
        borderRadius:13,
        alignItems:'center',
        justifyContent:'center',
        marginTop:"5%", 
        alignSelf:'center'
    },
    call:{
        fontFamily:'Gilroy-SemiBold',
        fontSize:14,
        paddingLeft:'3%',
        color:colors.blue,
    },
    totalOption:{
        fontFamily:'Gilroy-SemiBold',
        fontSize:14,
        color:colors.blue,
    },
    totalContainer:{
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:colors.lightgrey,
        padding:'3%',
        borderRadius:8,
        marginTop:'5%',
        alignSelf:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center'
    },
    buttonSubContainer:{
        height:44,
        width:'48%',
        alignItems:'center',
        borderRadius:8,
        marginTop:'5%',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    }
})

export default styles;