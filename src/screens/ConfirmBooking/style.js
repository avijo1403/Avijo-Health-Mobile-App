import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:colors.white,
    },
    availableContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '5%'
    },
    available: {
        fontSize: 9,
        fontFamily: 'Gilroy-Medium',
        paddingLeft: '5%',
        color: colors.green,
    },
    buttonContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        backgroundColor:colors.blue,
        padding:'5%',
        marginTop:'15%',
        alignSelf:'center',
    },
    bText1:{
        color:colors.white,
        fontSize:8,
        fontFamily: 'Gilroy-SemiBold',
    },
    bText2:{
        color:colors.white,
        fontSize:6,
        fontFamily: 'Gilroy-SemiBold',
    },
    consultationContainer: {
        marginLeft: '5%',
        marginTop: '0%',
        height: 70, // Explicit height
        // flexDirection:'row'
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%'
    },
    addButton: {
        alignItems: 'center',
        padding: 5,
        marginRight: 10,
        height:70
    },
    addImage: {
        height: 22,
        width: 22.5,
        marginTop: '15%',
    },
    addText: {
        color: 'darkGrey',
        fontSize: 10,
        fontFamily: 'Gilroy-SemiBold',
        marginTop: 10,
    },
    itemButton: {
        alignItems: 'center',
        padding: 5,
        marginRight: 10,
    },
    tickImage: {
        height: 10,
        width: 10,
        position: 'absolute',
        zIndex: 2,
        marginTop: 7,
        right: '12%',
    },
    itemImage: {
        height: 35,
        width: 35,
        borderRadius: 30,
    },
    itemText: {
        color: 'darkGrey',
        fontSize: 10,
        fontFamily: 'Gilroy-SemiBold',
        marginTop: 5,
    },
    specialization:{
      fontSize:16,
      fontFamily:'Gilroy-SemiBold',
      color:colors.darkGrey,
      width:'90%',
      marginTop:'5%'
    },
    generalMedicine:{
      fontSize:12,
      fontFamily:'Gilroy-SemiBold',
      color:colors.black,
      width:'90%',
      marginTop:'5%'
    },
    totalOption:{
        fontFamily:'Gilroy-SemiBold',
        fontSize:14,
        color:colors.blue,
    },
    totalContainer:{
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:colors.lightgrey,
        padding:'3%',
        borderRadius:8,
        marginTop:'5%',
        alignSelf:'center',
    }
})

export default styles;