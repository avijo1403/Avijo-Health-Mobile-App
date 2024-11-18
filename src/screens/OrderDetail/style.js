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
    detailContainer:{
        flexDirection:'row',
        width:'90%',
        paddingTop:'3%',
        alignItems:'center',
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    detailOption:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        // color:colors.grey,
    },
    detail:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        // color:colors.black,
        paddingTop:'1%'
    },
    totalOption:{
        fontFamily:'Gilroy-SemiBold',
        fontSize:14,
        color:colors.lightGreen,
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
    }
})
export default styles;