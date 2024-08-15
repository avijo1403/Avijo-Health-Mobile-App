import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    buttonSubContainer:{
        height:34,
        width:'48%',
        alignItems:'center',
        borderRadius:5,
        marginTop:'5%',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    },
    buttonSubContainer2:{
        flexDirection:'row',
        height:34,
        width:'80%',
        alignItems:'center',
        borderRadius:5,
        marginTop:'5%',
        justifyContent:'center'
    },
    buttonSubContainer3:{
        flexDirection:'row',
        height:34,
        width:'45%',
        alignItems:'center',
        borderRadius:5,
        marginTop:'5%',
        justifyContent:'center'
    }
})

export default styles;