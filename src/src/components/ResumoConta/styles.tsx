import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    containerTitle: {
        flexDirection: 'row',
    },
    viewBankIcon:{
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
    name:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 10,
    },
    saldo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#12e5fc',
    },
});