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
      justifyContent: 'space-between',
      padding: 20,
      alignItems: 'center'
    },
    containerWelcome: {
      flexDirection: 'column',
    },
    title: {
      fontSize: 14,
      color: 'white',
    },
    subTitle: {
      fontSize: 23,
      color: 'white',
      fontWeight: 'bold'
    }
});