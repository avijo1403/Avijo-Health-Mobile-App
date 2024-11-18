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
        width:'38%',
        alignItems:'center',
        borderRadius:5,
        marginTop:'5%',
        justifyContent:'center',
        alignSelf:'flex-start',
        marginLeft:'5%'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    }
})
export default styles;