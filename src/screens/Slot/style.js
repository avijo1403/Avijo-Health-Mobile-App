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
        padding: hp(1),
        borderRadius: 8,
        marginRight: wp(3),
        width: '23%',
        paddingTop: '5%',
        paddingBottom: '5%',
        alignItems: 'center'
    }
})

export default styles;