import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },
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
      backgroundColor: '#FFF',
    },
    containerValue: {
      height: 90,
      paddingHorizontal: 20,
    },
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
    containerOption: {
      paddingVertical: 10,
      paddingLeft: 20,
      backgroundColor: "#FFF",
      borderBottomWidth: 0.5,
      borderBottomColor: "#EEE",
    },
    titleField: {
      fontSize: 12,
      paddingBottom: 5,
    },
    containerInput: {
      flexDirection: 'row',
      alignItems: 'center',
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