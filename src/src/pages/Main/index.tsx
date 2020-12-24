import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import api from '../../services/api';
import ResumoContas from '../../components/ResumoContas';
import ResumoCartoes from '../../components/ResumoCartoes';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default function Main({ navigation }) {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loadingAccounts, setLoadingAccounts] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [loadingCards, setLoadingCards] = useState(false);
  const [cards, setCards] = useState([]);

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

  const loadData = useCallback(() => {
    loadAccounts();
    loadCards();
  },[]);

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = useCallback(() => {
    loadData();
  }, []);

  useEffect(() => {
    var date = new Date();
    var currentHour = date.getHours();

    if(currentHour < 12) {
      setWelcomeMessage("Bom dia");
    }else if(currentHour < 18){
      setWelcomeMessage("Boa tarde");
    }else{
      setWelcomeMessage("Boa noite");
    }
  });

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={<RefreshControl refreshing={loadingAccounts || loadingCards} onRefresh={onRefresh} />}
        >
          <View style={styles.containerHeader}>
            <View style={styles.containerWelcome}>
              <Text style={styles.title}>{welcomeMessage},</Text>
              <Text style={styles.subTitle}>Alisson!</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Config")} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
              <SimpleLineIcons name="settings" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View>
            <ResumoContas loadingAccounts={loadingAccounts} accounts={accounts}/>
            <ResumoCartoes loadingCards={loadingCards} cards={cards}/>
          </View>

        </ScrollView>
        <TouchableOpacity style={styles.floatAddButton} onPress={() => navigation.navigate("NovoLancamento")}>
          <Icon name="plus-thick" size={30} color="#FFF" />
        </TouchableOpacity>
        <StatusBar backgroundColor="transparent" translucent/>
    </SafeAreaView>
  );
}

