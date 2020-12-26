import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import api from '../../services/api';
import { showToast } from '../../Utils';
import { getAccounts } from '../../actions/account';
import { getCards } from '../../actions/card';
import ResumoContas from '../../components/ResumoContas';
import ResumoCartoes from '../../components/ResumoCartoes';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default function Main({ navigation }) {
  const { account, card } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [loadingAccounts, setLoadingAccounts] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [cards, setCards] = useState([]);

  const loadAccounts = async () => {
    setLoadingAccounts(true);
    await dispatch(getAccounts());
    setLoadingAccounts(false);
  }

  useEffect(() => {
    if(account?.error && account?.errorMessage != ""){
      showToast(account?.errorMessage.toString());
    }else{
      setAccounts(account.data);
    }
  }, [account])

  const loadCards = async () => {
    setLoadingCards(true);
    await dispatch(getCards());
    setLoadingCards(false);
  }

  useEffect(() => {
    if(card?.error && card?.errorMessage != ""){
      showToast(card?.errorMessage.toString());
    }else{
      setCards(card.data);
    }
  }, [card])

  const loadData = useCallback(() => {
    loadAccounts();
    loadCards();
  },[]);

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

    loadData();
  }, []);

  const onRefresh = useCallback(() => {
    loadData();
  }, []);

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

