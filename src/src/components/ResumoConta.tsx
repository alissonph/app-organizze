import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { floatToMoney } from '../Utils';

export default function ResumoConta({ data, isBalanceHidden }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Lancamentos", {conta : data})}>
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <View style={styles.viewBankIcon}>
                        <Icon name="bank" size={20} color="#FFF"/>
                    </View>
                    <View>
                        <Text style={styles.name}>{data?.nome}</Text>
                        <Text style={styles.description}>{data?.tipo}</Text>
                    </View>
                </View>
                
                <Text style={styles.saldo}>R$ {!isBalanceHidden ? floatToMoney(data?.saldo) : '---'}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#EEE",
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