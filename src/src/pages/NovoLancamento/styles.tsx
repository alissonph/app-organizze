import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: (option?:object) => ({
      flex: 1,
      backgroundColor: (option == "Despesa" ? 'red' : (option == "Receita" ? '#34eb86' : '#999')),
      paddingTop: Constants.statusBarHeight,
    }),
    containerHeader: {
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center'
    },
    title: {
      fontSize: 23,
      color: 'white',
      fontWeight: 'bold',
    },
    btnVoltar: {
      marginRight: 10,
    },
    containerContent: {
      flex: 1,
      backgroundColor: '#EEE',
    },
    containerValue: (option?:object) => ({
      height: 90,
      backgroundColor: (option == "Despesa" ? 'red' : (option == "Receita" ? '#34eb86' : '#999')),
      //alignItems: 'flex-end',
      paddingHorizontal: 20,
    }),
    inputValue: {
      alignSelf: 'flex-end',
      fontSize: 30,
      color: "#FFF"
    },
    containerOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 15,
    },
    textOption: {
      color: '#FFF',
    },
    containerInput: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerFields: {
      paddingLeft: 20,
    },
    titleField: {
      fontSize: 12,
      paddingTop: 10,
    },
    inputField: {
      paddingLeft: 10,
    },
    floatSaveButton: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 60,
      height: 60,
      position: 'absolute',                                          
      bottom: 10,
      backgroundColor:'#2d7a1a',
      borderRadius:100,
    },
});