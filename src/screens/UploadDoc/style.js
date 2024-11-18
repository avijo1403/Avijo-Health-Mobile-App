import { StyleSheet } from "react-native";
import { colors } from "../../Theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%', 
        alignItems:'center',
        backgroundColor:colors.white,
    },
    modalContainer:{
      width:'100%', 
      flex:1, 
      backgroundColor:'rgba(0, 0, 0, 0.5)', 
      alignItems:'center', 
      justifyContent:'flex-end'
  },
  modalSubContainer:{
      width:'100%', 
      height:'25%', 
      backgroundColor:'white', 
      alignItems:'center',
  }
})

export default styles;