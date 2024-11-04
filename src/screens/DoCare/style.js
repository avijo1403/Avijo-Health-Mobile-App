import { StyleSheet } from "react-native"
import { colors, hp, wp } from "../../Theme/GlobalTheme"

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: '#F7F7F7',
    },
    tabContainer: {
        // borderWidth: 1,
        borderColor: colors.blue,
        padding: hp(1.8),
        marginRight: wp(3),
        width:'45%'
    }
})
export default styles;