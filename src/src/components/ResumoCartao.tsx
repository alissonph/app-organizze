import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { floatToMoney } from '../Utils';

export default function ResumoCartao({ data }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Lancamentos")}>
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <View style={styles.viewCardIcon}>
                        <Icon name="credit-card" size={20} color="#FFF"/>
                    </View>
                    <View>
                        <Text style={styles.company}>{data?.company}</Text>
                        <Text style={styles.name}>{data?.name}</Text>
                    </View>
                </View>
                <View style={styles.containerValues}>
                    <View>
                        <Text>Disponível</Text>
                        <Text>R$ {floatToMoney(data?.availableLimit)}</Text>
                    </View>
                    <View>
                        <Text>Fatura Atual</Text>
                        <Text style={styles.fatura}>R$ {floatToMoney(data?.currentInvoice)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        margin: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: "#EEE",
    },
    containerTitle: {
        flexDirection: 'row',
    },
    viewCardIcon:{
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
    company:{
        fontSize: 13,
    },
    name:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    containerValues: {
        paddingLeft: 42,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fatura:{
        color: 'red',
        fontWeight: 'bold'
    }
});