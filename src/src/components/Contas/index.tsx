import React from 'react';
import { styles } from './styles';
import Conta from '../../components/Conta';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function Contas() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Saldos</Text>
            <FlatList style={styles.list}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                data={[
                    { 
                        id: 1,
                        nome: 'Nuconta',
                        tipo: 'Conta Corrente',
                        icone: '',
                        saldo : 'R$ 9.123,32',
                    },
                    { 
                        id: 2,
                        nome: 'Bradesco',
                        tipo: 'Conta Poupança',
                        icone: '',
                        saldo : 'R$ 117.234,00',
                    },
                    { 
                        id: 3,
                        nome: 'Easyinvest',
                        tipo: 'Investimentos',
                        icone: '',
                        saldo : 'R$ 557.432,00',
                    }
                ]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Conta data={item}></Conta>
                )}
            />
            <TouchableOpacity style={styles.btnSaldo}>
                <Text style={styles.textoSaldo}>Ajustar Saldo</Text>
            </TouchableOpacity>
        </View>
    );
}

