import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
        flex:1
    },
    heading:{
        width:330,
        fontSize:22,
        fontFamily:'Gilroy-SemiBold',
        paddingTop:'5%',
        color:colors.blue,
        textAlign:'left',
    }
})
export default styles;