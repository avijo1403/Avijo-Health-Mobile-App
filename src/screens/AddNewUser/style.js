import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    input:{
        borderWidth:1,
        width:'90%',
        height:48,
        borderRadius:8,
        marginTop:'3%',
        borderColor:colors.grey,
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        paddingLeft:15,
    }
})
export default styles;