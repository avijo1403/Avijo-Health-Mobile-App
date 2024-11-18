import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'white',
        flex:1
    },
    callContainer:{
        flexDirection:'row',
         alignItems:'center',
         marginTop:'3%'
         },
         callText:{
            fontSize:6, 
            fontFamily:'Gilroy-SemiBold', 
            paddingLeft:'2%',
            color: colors.black,
        },
        findContainer:{
            width:'90%',
            backgroundColor:colors.grey,
            borderRadius:3,
            marginTop:'10%',
            marginBottom:'5%',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'center',
            height:40
        },
        findText:{
            color:colors.white,
            paddingLeft:'5%',
            fontSize:16,
            fontFamily:'Gilroy-Medium',
        },
        viewAllContainer:{
            width:'90%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop:'5%',
        },
        viewText:{
         fontSize:14,
         fontFamily:'Gilroy-SemiBold',
         color:colors.black,   
        },
        specializeButtonContainer2:{
            borderWidth:1,
            padding:5,
            borderRadius:4,
            borderColor:colors.blue,
        },
        specializeButtonText2:{
            fontSize:10,
            fontFamily:'Gilroy-Medium',
            color:colors.blue,
        },
        heading:{
            fontSize:24,
            fontFamily:'Gilroy-SemiBol',
            alignSelf:'flex-start',
            marginLeft:'7%',
            marginBottom:'5%',
            color:colors.black,
        }
})

export default styles;