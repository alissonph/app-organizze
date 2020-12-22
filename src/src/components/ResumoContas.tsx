import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../services/api';
import ResumoConta from './ResumoConta';

//eye-off e eye-outline
export default function ResumoContas() {
    const [isBalanceHidden, setBalanceHidden] = useState(false);
    const [loadingAccounts, setLoadingAccounts] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const loadAccounts = async () => {
        setLoadingAccounts(true);
        try {
            let response = await api.get('/accounts');
            if(response){
                setAccounts(response.data);
            }
        } catch (error) {
            console.log("Erro:",error);
        }

        setLoadingAccounts(false);
    }

    useEffect(() => {
        loadAccounts();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Meus Saldos</Text>
                <TouchableOpacity onPress={()=> setBalanceHidden(!isBalanceHidden)} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Icon name={isBalanceHidden ? 'eye-outline' : 'eye-off'} size={25} color="#999" />
                </TouchableOpacity>
            </View>

            {loadingAccounts && <ActivityIndicator size="large" color="#a2faca"/> }

            {!loadingAccounts && 
                <View style={styles.list}>
                    {
                        accounts.map((item) => {
                            return <ResumoConta key={item.id} data={item} isBalanceHidden={isBalanceHidden} />
                        })
                    }
                </View>
            }
            {!loadingAccounts && accounts?.length > 0 &&
                <TouchableOpacity style={styles.btnSaldo}>
                    <Text style={styles.textoSaldo}>Ajustar Saldo</Text>
                </TouchableOpacity>
            }
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