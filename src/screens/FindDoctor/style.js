import { StyleSheet } from "react-native";
import { colors, hp, wp } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center', 
        backgroundColor:colors.white,
    },
    optionContainer:{
        borderWidth:1,
        borderColor:colors.blue,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:7, 
        marginRight:10
    },
    optionText:{
        color:colors.blue,
        fontSize:8,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    optionContainer2:{
        backgroundColor:colors.blue,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        padding:7,
        marginRight:10
    },
    optionText2:{
        color:colors.white,
        fontSize:8,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold'
    },
    mapHeading:{
        color:colors.white,
        backgroundColor:colors.blue,
        width:'100%',
        padding:'2%',
        paddingLeft:'5%',
        marginTop:'5%',
        fontSize:12,
        fontFamily:'Gilroy-Medium',
    },
    map:{
        width:'100%',
        height:80
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
      buttonContainer:{
          width:'95%',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:3,
          backgroundColor:colors.blue,
          height:30,
          marginTop:'10%',
          alignSelf:'center',
          flexDirection:'row',
      },
      buttonContainer1:{
          width:'95%',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:3,
          backgroundColor:colors.grey,
          height:30,
          paddingLeft:10,
          paddingRight:10,
        //   marginTop:'3%',
          alignSelf:'center',
          flexDirection:'row',
      },
      bText1:{
          color:colors.white,
          fontSize:7,
          fontFamily: 'Gilroy-SemiBold',
      },
      bText2:{
          color:colors.white,
          fontSize:6,
          fontFamily: 'Gilroy-SemiBold',
      },
      available: {
          fontSize: 7,
          fontFamily: 'Gilroy-SemiBold',
          paddingLeft: '5%',
          color: colors.green,
      },
      availableContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'flex-end',
        marginBottom: '10%'
    }
})

export default styles;