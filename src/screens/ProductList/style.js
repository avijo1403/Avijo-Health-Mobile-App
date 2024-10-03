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
        borderColor:colors.grey,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:'2%', 
        paddingLeft:'3%',
        paddingRight:'3%',
    },
    optionText:{
        color:colors.grey,
        fontSize:13,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    optionContainer2:{
        borderWidth:1,
        borderColor:colors.green,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:'2%',
        paddingLeft:'3%',
        paddingRight:'3%',
    },
    optionText2:{
        color:colors.green,
        fontSize:13,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    buttonSubContainer:{
        height:25,
        width:60,
        alignItems:'center',
        borderRadius:3,
        marginTop:'8%',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:8,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    }
})
export default styles;