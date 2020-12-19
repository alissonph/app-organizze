import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
        margin: 0,
    },
    containerTitle: {
        flexDirection: 'row',
    },
    viewCardIcon:{
        marginRight: 10,
        backgroundColor: '#CCC',
        color: '#FFF',
        borderRadius: 100,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    company:{
        fontSize: 13,
    },
    name:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    containerValues: {
        paddingLeft: 42,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fatura:{
        color: 'red',
        fontWeight: 'bold'
    }
});