import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ResumoConta from './ResumoConta';

//eye-off e eye-outline
export default function ResumoContas() {
    const [isBalanceHidden, setBalanceHidden] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Meus Saldos</Text>
                <TouchableOpacity onPress={()=> setBalanceHidden(!isBalanceHidden)} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Icon name={isBalanceHidden ? 'eye-outline' : 'eye-off'} size={25} color="#999" />
                </TouchableOpacity>
            </View>
            <FlatList style={styles.list}
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                data={[
                    { 
                        id: 1,
                        nome: 'Nuconta',
                        tipo: 'Conta Corrente',
                        icone: '',
                        saldo : 9123.32,
                    },
                    { 
                        id: 2,
                        nome: 'Bradesco',
                        tipo: 'Conta Poupança',
                        icone: '',
                        saldo : 117234,
                    },
                    { 
                        id: 3,
                        nome: 'Easyinvest',
                        tipo: 'Investimentos',
                        icone: '',
                        saldo : 557432.7,
                    }
                ]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ResumoConta data={item} isBalanceHidden={isBalanceHidden}></ResumoConta>
                )}
            />
            <TouchableOpacity style={styles.btnSaldo}>
                <Text style={styles.textoSaldo}>Ajustar Saldo</Text>
            </TouchableOpacity>
        </View>
    );
}

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
    list: {
        marginTop: 20,
    },
    btnSaldo: {
        backgroundColor: '#a2faca',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingTop: 6,
        paddingBottom: 6,
    },
    textoSaldo: {
      color: '#1e661b',
      fontWeight: 'bold'
    },
});