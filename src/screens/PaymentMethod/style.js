import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    headerContainer:{
        flexDirection:'row',
        width:'100%',
        padding:'5%',
        paddingTop:'10%',
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        fontFamily:'Gilroy-SemiBold',
        paddingLeft:'20%',
        color:colors.black,
    },
    input:{
        borderWidth:1,
        width:'90%',
        height:48,
        borderRadius:8,
        marginTop:'5%',
        borderColor:colors.grey,
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        paddingLeft:15,
    },
    bottomText:{
        fontSize:18,
        fontFamily:'Gilroy-SemiBold',
        width:'90%',
        marginTop:'5%'
    }
})

export default styles;