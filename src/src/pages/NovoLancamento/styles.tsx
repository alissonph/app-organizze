import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#34eb86',
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
      backgroundColor: '#EEE',
    },
    containerValue: {
      height: 50,
      backgroundColor: '#34eb86',
      alignItems: 'flex-end',
      paddingHorizontal: 20,
    },
    inputValue: {
      fontSize: 30,
    }
});