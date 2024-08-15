import { StyleSheet } from "react-native";
import { colors, wp } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: '10%',
        alignSelf: 'center',
        padding: '5%',
        width: '100%',
        backgroundColor: colors.white,
        elevation: 5,
    },
    image1: {
        height: 96,
        width: 96,
        borderRadius: 8,
    },
    heading: {
        width: wp(75),
        fontSize: 22,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '5%',
        color: colors.black,
    },
    languageContainer: {
        paddingTop: '5%',
        paddingBottom: 10,
        width: '90%',
        alignSelf: 'center',
    },
    languageHeading: {
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        width:wp(90),
    },
    languageDetail: {
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        color: colors.darkGrey,
        width:wp(90)
    },
    languageButton: {
        borderWidth: 1,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5
    },
    languageButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '8%',
        width: '50%'
    },
    languageText: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold'
    },
    consultContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        backgroundColor: colors.white,
        paddingBottom: '5%',
        elevation: 5,
        backgroundColor: colors.white,
        padding: '5%'
    },
    uidTick: {
        height: 20,
        width: 20
    },
    tickContainer: {
        flexDirection: 'row'
    },
    consultHeading: {
        paddingLeft: '3%',
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        width: '90%'
    },
    consultDetail: {
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        paddingTop: '3%',
        color: colors.grey,
    },
    feeContainer: {
        flexDirection: 'row',
        marginTop: '8%',
        alignItems: 'center'
    },
    freeContainer: {
        width: '75%',
        backgroundColor: '#E3FAE8'
    },
    freeText: {
        fontSize: 10,
        fontFamily: 'Gilroy-SemiBold',
        padding: 10,
        color: colors.blue,
        paddingLeft: '5%',
    },
    feeButton: {
        borderWidth: 1,
        marginLeft: '5%',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        height: 30
    },
    fee: {
        fontSize: 20,
        fontFamily: 'Gilroy-Bold',
        color: colors.black,
    },
    privacyContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    },
    shieldContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    shield: {
        height: 22,
        width: 22
    },
    privacyHeading: {
        fontSize: 18,
        fontFamily: 'Gilroy-SemiBold',
        paddingLeft: '3%',
        color: colors.black,
    },
    privacyText: {
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        color: colors.darkGrey,
        paddingTop: '2%',
        alignItems:'center',
        justifyContent:'center'
    },
    bottomText: {
        fontSize: 12,
        fontFamily: 'Gilroy-SemiBold',
        color: colors.black,
        backgroundColor: '#E3FAE8',
        textAlign: 'left',
        padding: 2,
        marginTop: '2%',
        width: 285
    },
    buttonContainer: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: '5%',
        backgroundColor: colors.blue,
        marginBottom: '5%',
    },
    buttonFee: {
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
        color: colors.white,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
        color: colors.white,
    }
})

export default styles;