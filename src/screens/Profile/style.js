import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        backgroundColor:colors.white,
    },
    profileContainer:{
        flexDirection:'row',
        width:'90%',
        alignSelf:'center',
        borderBottomWidth:1,
        paddingBottom:'5%',
        borderColor:colors.grey,
    },
    profile:{
        height:72,
        width:72,
        marginLeft:'5%'
    },
    textContainer:{
        flexDirection:'column'
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'5%'
    },
    tick:{
        height:20,
        width:20,
        marginLeft:'5%'
    },
    copy:{
        height:22,
        width:22,
        marginLeft:'5%'
    },
    name:{
        fontSize:32,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
    },
    number:{
        fontSize:16,
        fontFamily:'Gilroy-Medium',
        color:colors.grey,
    },
    addContainer:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop:'5%',
        alignItems:'center',
        width:'90%',
        justifyContent:'space-between'
    },
    addText:{
        fontSize:24,
        fontFamily:'Gilroy-Bold',
        color:colors.black,
    },
    blueRight:{
        width:24,
        height:24,
        marginLeft:'5%'
    },
    qr:{
        height:264,
        width:240,
        resizeMode:'contain',
    },
    qrContainer:{
        marginTop:"10%",
        width:'70%',
        alignSelf:'center',
        alignItems:'center',
    },
    shareContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        height:44,
        width:'48%',
        justifyContent:'center',
        borderRadius:50,
        borderColor:colors.grey,
    },
    share:{
        height:22,
        width:22, 
        marginRight:'2%'
    },
    shareText:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.grey,
    }
})

export default styles;