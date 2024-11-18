import { Dimensions, StyleSheet } from "react-native";
import { colors, hp, wp } from "../../Theme/GlobalTheme";


const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        // height:height,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
        
        justifyContent:'space-between'
    },
    tabContainer: {
        // borderWidth: 1,
        borderColor: colors.black,
        padding: hp(1),
        marginRight: wp(3),
        width:'45%'
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