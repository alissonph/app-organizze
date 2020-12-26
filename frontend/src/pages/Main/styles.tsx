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
    },
    floatAddButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      position: 'absolute',                                          
      bottom: 10,                                                    
      right: 10,
      backgroundColor:'#2d7a1a',
      borderRadius:100,
    },
});