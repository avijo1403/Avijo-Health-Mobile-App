import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontSize: 14,
        fontFamily: 'Gilroy-SemiBold',
        marginLeft: '5%',
        color: colors.darkGrey,
    },
    topContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    changeText: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 14,
        color: colors.blue,
        width: '90%',
        marginTop: '5%'
    },
    availableContainer: {
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '5%'
    },
    available: {
        fontSize: 10,
        fontFamily: 'Gilroy-Medium',
        paddingLeft: '2%',
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
    heading:{
        fontSize:17, 
        fontFamily:'Gilroy-SemiBold',
        width:'90%',
        color:colors.black,
        marginTop:'5%'
    },
    address:{
        fontSize:12,
        fontFamily:'Gilroy-Medium',
        width:'90%',
        marginTop:'3%'
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
      arrowText: {
        fontSize: 24,
      },
      buttonSubContainer:{
          height:44,
          width:'48%',
          alignItems:'center',
          borderRadius:8,
          marginTop:'5%',
          justifyContent:'center'
      },
      buttonText:{
          fontSize:14,
          fontFamily:'Gilroy-SemiBold',
          color:colors.white,
      },
      buttonContainer2:{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          width:'90%'
      },
      callContainer:{
          flexDirection:'row',
          height:45, 
          width:'90%',
          borderWidth:1,
          borderColor:colors.blue,
          borderRadius:5,
          alignItems:'center',
          justifyContent:'center',
          marginTop:"5%",
          marginBottom:'5%'
      },
      call:{
          fontFamily:'Gilroy-SemiBold',
          fontSize:14,
          paddingLeft:'3%',
          color:colors.blue,
      }

})

export default styles;