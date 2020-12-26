import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, RefreshControl, SafeAreaView, SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { floatToMoney } from '../../Utils';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

export default function Lancamentos({ route, navigation }) {
  //const [ conta, setConta ] = useState({});
  const [ loadingMonths, setLoadingMonths ] = useState(false);
  const [ loadingEntries, setLoadingEntries ] = useState(false);
  const [ entries, setEntries ] = useState([]);
  const [ months, setMonths ] = useState([]);
  
  const loadMonths = async () => {
    setLoadingMonths(true);

    try {
        let response = await api.get('/months');
        if(response){
            setMonths(response.data);
        }
    } catch (error) {
        console.log("Erro:",error);
    }

    setLoadingMonths(false);
  }

  const loadEntries = async () => {
    setLoadingEntries(true);

    try {
        let response = await api.get('/entries');
        if(response){
          setEntries(response.data);
        }
    } catch (error) {
        console.log("Erro:",error);
    }

    setLoadingEntries(false);
  }


  useFocusEffect(
    useCallback(() => {
      loadMonths();
      loadEntries();
    }, [])
  );

  /*useEffect(() => {
    if(route?.params?.conta){
      setConta(route.params.conta);
    }
  }, [route?.params?.conta]);*/

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
      <View style={styles.containerContent}>
        
        <View style={styles.containerMonth}>
          {loadingMonths && <ActivityIndicator style={{paddingVertical:20}} size="large" color="#34eb86" />}
          {!loadingMonths &&
            <FlatList
              contentContainerStyle={styles.monthList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={months}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.monthItem}>
                  <Text style={styles.monthTitle}>{item.description}</Text>
                </TouchableOpacity>
              )}
            />
          }
        </View>

        {loadingEntries && <ActivityIndicator style={{paddingTop:20}} size="large" color="#34eb86" />}
        
        {!loadingEntries &&
        
          <SectionList
            contentContainerStyle={styles.entryList}
            sections={entries}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={<RefreshControl refreshing={loadingEntries} onRefresh={loadEntries} />}
            renderItem={({ item }) => (
              <View style={styles.entryContainer}>
                <View style={styles.entryTitleContainer}>
                  <View style={styles.entryIcon}>
                    <Icon name={item.icon} size={16} color="#FFF"/>
                  </View>
                  <View>
                    <Text style={styles.entryTitle}>{item.name}</Text>
                    <Text style={styles.entryOrigem}>{item.origem}</Text>
                  </View>
                </View>
                <View style={styles.entryValueContainer}>
                  <Text style={styles.entryValue}>{floatToMoney(item.value)}</Text>
                  <Text  style={styles.entryStatus}>{item.status}</Text>
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.entrySectionTitle}>{title}</Text>
            )}
            ItemSeparatorComponent={
              () => (<View style={styles.separator} />)
            }
          />
        }
      </View>
    </SafeAreaView>
  );
}

