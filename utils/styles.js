import { StyleSheet } from 'react-native'
import { white, black, red, green, shadow } from './colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerTop: {
        backgroundColor: white,
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    blackBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: black,
        borderColor: black,
        width: 200,
        margin: 5,
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    whiteBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white,
        borderColor: black,
        width: 200,
        margin: 5,
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    redBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: red,
        borderColor: red,
        width: 200,
        margin: 5,
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    greenBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: green,
        borderColor: green,
        width: 200,
        margin: 5,
        borderWidth: 2,
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
    redTxt: {
        color: red,
    },
    whiteTxt: {
        fontSize: 20,
        color: white,
    },
    blackTxt: {
        fontSize: 20,
        color: black,
    },
    txtField: {
        maxHeight: 50, 
        margin: 5, 
        width: 250, 
        borderColor: black, 
        borderRadius: 3,
        borderWidth: 2,
    },
    bigTitle: { 
        fontSize: 30,
        fontWeight: 'bold',        
        padding: 10,
    },
    title: { 
        fontWeight: 'bold',        
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16, 
        color: red,
        textAlign: 'center'
    },
    deck:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 10,
        padding: 10,
        borderColor: shadow,    
        borderBottomWidth: 1,
        maxHeight: 90,
      }
  });
  
export default styles