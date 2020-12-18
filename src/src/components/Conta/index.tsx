import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Conta({ data }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Text style={styles.name}>{data?.nome}</Text>
                    <Text style={styles.description}>{data?.tipo}</Text>
                </View>
                <Text style={styles.saldo}>{data?.saldo}</Text>
            </View>
        </TouchableOpacity>
    );
}