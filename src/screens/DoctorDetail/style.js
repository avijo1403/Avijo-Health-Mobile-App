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
    availableContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '5%',
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
        alignSelf:'center'
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
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'5%',
        borderBottomWidth:1,
        borderColor:colors.grey,
        height:38
      },
      itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
        padding: 5,
      },
      dateText: {
        fontSize: 12,
        fontFamily: 'Gilroy-Medium',
        color:colors.black
      },
      arrowButton: {
        padding: 10,
      },
      moonContainer:{
          flexDirection:'row',
          alignItems:'center',
          width:'90%',
          marginTop:'5%'
      },
      moonText:{
          paddingLeft:'8%',
          fontSize:12,
          fontFamily:'Gilroy-Regular',
          color:colors.black
      },
      about:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        paddingTop:'5%'
      },
      aboutText:{
        fontSize:12,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        width:'90%'
      },
      specialization:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        color:colors.black,
        width:'90%',
        marginTop:'5%'
      },
      generalMedicine:{
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        color:colors.darkGrey,
        width:'90%',
        marginTop:'5%'
      }
})
export default styles;