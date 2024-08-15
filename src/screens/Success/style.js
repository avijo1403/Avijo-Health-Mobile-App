import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
    },
    heading:{
        fontSize:20,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        paddingTop:'5%',
        marginBottom:'10%',
        width:'90%', 
        textAlign:'center'
    },
    docContainer:{
        width:'80%',
        padding:10,
        elevation:5,
        backgroundColor:colors.white,
    },
    docHeading:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
        paddingBottom:'5%'
    },
    image:{
        height:72,
        width:72,
        borderRadius:10
    },
    imageContainer:{
        flexDirection:'row',
    },
    name:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
    },
    textContainer:{
        paddingLeft:'5%',
        width:'75%'
    },
    detail:{
        fontSize:12,
        fontFamily:'Gilroy-SemiBold',
        color:colors.darkGrey,
        paddingTop:'5%',
        width:'100%',
    }
})

export default styles;