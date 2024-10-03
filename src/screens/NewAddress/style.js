import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    optionContainer:{
        borderWidth:1,
        borderColor:colors.green,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:5, 
        paddingLeft:'5%',
        paddingRight:'5%',
        marginRight:10
    },
    optionText:{
        color:colors.green,
        fontSize:10,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    optionContainer2:{
        backgroundColor:colors.green,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        paddingLeft:'5%',
        paddingRight:'5%',
        marginRight:10
    },
    optionText2:{
        color:colors.white,
        fontSize:10,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
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
    },
    phoneContainer:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:'3%',
        marginTop:'3%'
    },
    phoneInput:{
        borderWidth:1,
        width:'67%',
        borderColor:colors.grey,
        borderRadius:3,
        height:47,
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        paddingLeft:15
    }
})
export default styles;