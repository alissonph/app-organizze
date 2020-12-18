import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { floatToMoney } from '../../Utils';

export default function ResumoConta({ data, isBalanceHidden }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Text style={styles.name}>{data?.nome}</Text>
                    <Text style={styles.description}>{data?.tipo}</Text>
                </View>
                
                <Text style={styles.saldo}>R$ {!isBalanceHidden ? floatToMoney(data?.saldo) : '---'}</Text>
            </View>
        </TouchableOpacity>
    );
}