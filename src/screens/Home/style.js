import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:colors.white,
        alignItems:'center',
    },
    heading:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        alignSelf:'flex-start',
        marginLeft:'4%',
        marginBottom:'3%',
        paddingTop:'5%',
        color:colors.black,
    },
    viewAllContainer:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'5%',
        marginBottom:'3%'
    },
    viewText:{
     fontSize:20,
     fontFamily:'Gilroy-SemiBold',
     color:colors.black,   
    },
    view:{
        color:colors.blue,
        fontSize:12,
        fontFamily:'Gilroy-SemiBold',
    },
    specializeButtonContainer:{
        borderWidth:1,
        borderColor:colors.blue,
        padding:5,
        borderRadius:3,
        alignSelf:'flex-end',
        margin:'5%'
    },
    specializeButtonText:{
        fontSize:8,
        fontFamily:'Gilroy-Medium',
        color:colors.blue,

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
    slide: {
        backgroundColor: colors.white,
        padding: 5,
        paddingLeft: 15,
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: 119,
        borderRadius: 15,
      }
})

export default styles;