import { StyleSheet } from "react-native";
import { colors, hp, wp } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    tabContainer: {
        borderWidth: 1,
        borderColor: colors.blue,
        padding: hp(1),
        borderRadius: 8,
        marginRight: wp(3)
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
    }
})
export default styles;