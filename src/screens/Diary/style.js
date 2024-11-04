import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.white,
    },
    slide: {
        backgroundColor: colors.white,
        padding: 5,
        paddingLeft: 15,
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: 160,
        borderWidth:1,
        borderRadius: 15,
        borderColor:colors.lightgrey,
        backgroundColor:colors.white,
        elevation:5,
        // flexDirection:'row',
        alignItems:'center'
      },
      image2: {
        width: '90%',
        height: 180,
        borderWidth:1,
        borderRadius: 15,
        borderColor:colors.lightgrey,
        backgroundColor:colors.white,
        elevation:5,
        // flexDirection:'row',
        alignItems:'center',
        marginTop:"5%"
      }
})
export default styles;