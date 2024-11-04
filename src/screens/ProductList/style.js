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
        color:colors.black,
        fontSize:13,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    optionContainer2:{
        borderWidth:1,
        borderColor:colors.grey,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:'2%',
        paddingLeft:'3%',
        paddingRight:'3%',
    },
    optionText2:{
        color:colors.black,
        fontSize:13,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    buttonSubContainer: {
        // padding:10,
        width:'30%',
        height:16,
        alignItems: 'center',
        borderRadius: 3,
        marginTop: '8%',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:colors.green,
    },
    buttonText: {
        fontSize: 8,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.green,
    }
})
export default styles;