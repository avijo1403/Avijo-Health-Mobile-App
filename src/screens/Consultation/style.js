import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%', 
        alignItems:'center',
        backgroundColor:colors.white,
    },
    topContainer:{
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    topButton:{
        borderWidth:1,
        paddingLeft:'3%',
        paddingRight:'3%',
        height:40,
        borderRadius:12,
        justifyContent:'center'
    },
    topButtonText:{
        fontSize:16,
        fontFamily:'Gilroy-Medium'
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'80%',
        alignSelf:'flex-start',
        marginTop:'0%',
        marginBottom:"3%",
        marginLeft:'5%'
    },
    buttonSubContainer:{
        height:34,
        width:'48%',
        alignItems:'center',
        borderRadius:5,
        marginTop:'1%',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    }
})

export default styles;