import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        paddingBottom:'5%'
    },
    buttonSubContainer:{
        height:44,
        width:'48%',
        alignItems:'center',
        borderRadius:5,
        marginTop:'10%',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    },
    buttonText1:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.blue,
    }
})
export default styles;