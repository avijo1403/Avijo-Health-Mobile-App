import { StyleSheet } from 'react-native';
import { colors } from '../../Theme/GlobalTheme';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        width:'100%'
    },
    messageContainer: {
        paddingVertical: 10,
        marginHorizontal: '2%',
    },
    message: {
        maxWidth: '70%',
        minWidth:'40%',
        alignSelf: 'flex-start',
        borderRadius: 8,
        padding: 5,
        marginVertical: 5,
    },
    sentMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#D3F1FF',
        borderBottomRightRadius:0,
        borderRadius:22,
    },
    receivedMessage: {
        backgroundColor: colors.lightgrey,
        borderTopLeftRadius:0,
        borderRadius:22
    },
    messageText: {
        fontSize: 14,
        fontFamily:'Gilroy-Medium',
        padding:10,
        paddingBottom:0
    },
    messageSender: {
        fontSize: 12,
        marginTop: 5,
        padding:10,
        paddingTop:0
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginBottom: '5%',
        paddingBottom:'2%',
        paddingTop:'5%',
        justifyContent:'space-between',
        backgroundColor:colors.white,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        marginRight: 10,
        color: 'black',
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        borderRadius:50,
        backgroundColor:colors.lightgrey,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkTitle:{
        fontSize:12,
        fontWeight:'bold',
        color:'white',
        width:150,
        paddingRight:'5%'
    },
    linkDescription:{
        fontSize:12,
        color:'white',
        width:150
    },
    linkImage:{
        height:50,
        width:50,
        borderRadius:5,
        marginLeft:'5%',

    },
    linkContainer:{
        flexDirection:'row',
        paddingRight:'10%',
        alignItems:'center',
        backgroundColor: 'darkblue',
    },
    descContainer:{
        flexDirection:'column',
        padding:'5%',
    }
});

export default styles;