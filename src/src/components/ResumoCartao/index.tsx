import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { floatToMoney } from '../../Utils';

export default function ResumoCartao({ data }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <View style={styles.viewCardIcon}>
                        <Icon name="credit-card" size={20} color="#FFF"/>
                    </View>
                    <View>
                        <Text style={styles.company}>{data?.empresa}</Text>
                        <Text style={styles.name}>{data?.nome}</Text>
                    </View>
                </View>
                <View style={styles.containerValues}>
                    <View>
                        <Text>Disponível</Text>
                        <Text>R$ {floatToMoney(data?.limiteDisponivel)}</Text>
                    </View>
                    <View>
                        <Text>Fatura Atual</Text>
                        <Text style={styles.fatura}>R$ {floatToMoney(data?.faturaAtual)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}