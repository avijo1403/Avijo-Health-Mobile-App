import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%', 
        alignItems:'center',
        backgroundColor:colors.white,
    },
    topContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:'7%'
    },timeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        marginLeft: '5%',
        color: colors.darkGrey,
    },
    changeText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 14,
        color: colors.blue,
        width: '90%',
        marginTop: '5%'
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        marginTop:'5%'
    },
    buttonSubContainer:{
        height:44,
        width:'48%',
        alignItems:'center',
        borderRadius:8,
        marginTop:'5%',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:12,
        fontFamily:'Gilroy-SemiBold',
        color:colors.white,
    }
})
export default styles;