import { StyleSheet } from "react-native";
import { colors, hp, wp } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    tabContainer: {
        borderWidth: 1,
        borderColor: colors.green,
        padding: hp(1),
        borderRadius: 8,
        marginRight: wp(3)
    }
})
export default styles;