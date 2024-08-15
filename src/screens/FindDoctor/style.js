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
          width:wp(20),
          alignItems:'center',
          justifyContent:'center',
          borderRadius:3,
          backgroundColor:colors.blue,
          padding:hp(1),
        //   marginTop:'15%',
          alignSelf:'center',
      },
      bText1:{
          color:colors.white,
          fontSize:8,
          fontFamily: 'Gilroy-SemiBold',
      }
})

export default styles;