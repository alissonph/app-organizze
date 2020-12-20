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
    },
    containerContent: {
      flex: 1,
      backgroundColor: '#EEE',
    },
    titleOption: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 20,
      paddingLeft: 10,
      paddingBottom: 10,
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: "#FFF",
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderBottomWidth: 0.5,
      borderBottomColor: "#EEE",
    }
});