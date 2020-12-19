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
    btnVoltar: {
      marginRight: 10,
    },
    title: {
      fontSize: 23,
      color: 'white',
      fontWeight: 'bold',
    }
});