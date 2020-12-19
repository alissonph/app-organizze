import React, { useState } from 'react';
import { styles } from './styles';
import ResumoCartao from '../ResumoCartao';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//eye-off e eye-outline
export default function ResumoCartoes() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Cartões de crédito</Text>
                <TouchableOpacity style={styles.btnAddCartao} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Icon name="plus-thick" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>
            <FlatList style={styles.list}
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                data={[
                    { 
                        id: 1,
                        empresa: 'Visa',
                        nome: 'Porto Seguro',
                        limiteDisponivel: 5000,
                        faturaAtual : -98.88,
                    },
                    { 
                        id: 2,
                        empresa: 'Nubank',
                        nome: 'Nubank',
                        limiteDisponivel: 6055.23,
                        faturaAtual : -1045.88,
                    },
                    { 
                        id: 3,
                        empresa: 'Visa',
                        nome: 'Azul',
                        limiteDisponivel: 4500.22,
                        faturaAtual : -30.00,
                    }
                ]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ResumoCartao data={item}></ResumoCartao>
                )}
            />
        </View>
    );
}

