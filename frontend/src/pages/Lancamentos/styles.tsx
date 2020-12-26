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
    containerContent: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    containerMonth: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#EEE',
    },
    monthList: {
      paddingVertical: 10,
    },
    monthTitle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    monthItem: {
      marginHorizontal: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 50,
      backgroundColor: '#EEE',
    },
    entryContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
    entryTitleContainer:{
      flexDirection: 'row'
    },
    entryList:{
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    entrySectionTitle: {
      color: '#999',
      fontSize: 12,
      paddingBottom: 5,
    },
    entryIcon:{
      marginRight: 10,
      backgroundColor: '#59d3ff',
      color: '#FFF',
      borderRadius: 100,
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    entryTitle: {
      color: '#000',
      fontSize: 14,
    },
    entryOrigem: {
      color: '#999',
      fontSize: 12,
    },
    entryValueContainer: {
      alignItems: 'flex-end',
    },
    entryValue: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    entryStatus: {
      color: '#999',
      fontSize: 12,
    },
    separator: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#EEE',
    }
});