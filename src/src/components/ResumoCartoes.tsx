import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/api';

import ResumoCartao from './ResumoCartao';

//eye-off e eye-outline
export default function ResumoCartoes() {
    const [cards, setCards] = useState([]);
    const [loadingCards, setLoadingCards] = useState(false);

    const loadCards = async () => {
        setLoadingCards(true);
        try {
            let response = await api.get('/cards');
            if(response){
                setCards(response.data);
            }
        } catch (error) {
            console.log("Erro:",error);
        }

        setLoadingCards(false);
    }

    useEffect(() => {
        loadCards();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Cartões de crédito</Text>
                <TouchableOpacity style={styles.btnAddCartao} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Icon name="plus-thick" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>

            {loadingCards && <ActivityIndicator size="large" color="#a2faca"/> }

            {!loadingCards &&
                <View style={styles.list}>
                    {
                        cards.map((item) => {
                            return <ResumoCartao key={item.id} data={item} />
                        })
                    }
                </View>
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