import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 6,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    btnAddCartao: {
        backgroundColor: '#34eb86',
        width: 33,
        height: 33,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        marginTop: 20,
    },
});