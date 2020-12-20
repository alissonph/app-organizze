import React, { useEffect, useState } from 'react';
import { SafeAreaView, SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';
import { floatToMoney } from '../../Utils';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function Lancamentos({ route, navigation }) {
  const [ conta, setConta ] = useState({});
  const [ lancamentos, setLancamentos ] = useState([]);
  const [ meses, setMeses ] = useState([]);
  //const 
  
  useEffect(() => {
    if(route?.params?.conta){
      setConta(route.params.conta);
    }
    //console.log("conta",conta);
  }, [route?.params?.conta]);

  useEffect(() => {
    setLancamentos([
      {
        title: "1 de dezembro",
        data: [
          {
            id: 1,
            nome: "Cinema",
            origem: "Nuconta",
            valor: -33.5,
            status: "pago"
          },
          {
            id: 2,
            nome: "Padaria",
            origem: "Porto Seguro",
            valor: -35.5,
            status: "Fatura de dezembro"
          },
          {
            id: 3,
            nome: "Etanol",
            origem: "Azul",
            valor: -223.3,
            status: "Fatura de janeiro"
          } 
        ]
      },
      {
        title: "8 de dezembro",
        data: [
          {
            id: 1,
            nome: "Baguete",
            origem: "Nuconta",
            valor: -22,
            status: "pago"
          },
          {
            id: 2,
            nome: "Pizza",
            origem: "Bradesco",
            valor: -58.6,
            status: "pago"
          },
          {
            id: 3,
            nome: "Etanol",
            origem: "Porto Seguro",
            valor: -100,
            status: "Fatura de janeiro"
          } 
        ]
      },
      {
        title: "12 de dezembro",
        data: [
          {
            id: 1,
            nome: "Carne",
            origem: "Nuconta",
            valor: -20,
            status: "pago"
          },
          {
            id: 2,
            nome: "Vivo Controle",
            origem: "Azul",
            valor: -56.3,
            status: "Fatura de dezembro"
          },
          {
            id: 3,
            nome: "Etanol",
            origem: "Nuconta",
            valor: -210,
            status: "pago"
          } 
        ]
      },
      {
        title: "20 de dezembro",
        data: [
          {
            id: 1,
            nome: "Mercado",
            origem: "Nuconta",
            valor: -203.2,
            status: "pago"
          },
          {
            id: 2,
            nome: "Internet",
            origem: "Azul",
            valor: -99,
            status: "Fatura de dezembro"
          },
          {
            id: 3,
            nome: "Mercado",
            origem: "Nuconta",
            valor: -21,
            status: "pago"
          } 
        ]
      }
    ]);
  }, []);

  useEffect(() => {
    setMeses([
      {
        id: 1,
        descricao: "Outubro"
      },
      {
        id: 2,
        descricao: "Novembro"
      },
      {
        id: 3,
        descricao: "Dezembro"
      },
      {
        id: 4,
        descricao: "Jan de 2021"
      },
      {
        id: 5,
        descricao: "Fev de 2021"
      },
      {
        id: 6,
        descricao: "Mar de 2021"
      },
      {
        id: 7,
        descricao: "Abril de 2021"
      }
    ])
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
      <View style={styles.containerContent}>
        
        <View style={styles.containerMonth}>
          <FlatList
            contentContainerStyle={styles.monthList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={meses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.monthItem}>
                <Text style={styles.monthTitle}>{item.descricao}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <SectionList
          contentContainerStyle={styles.entryList}
          sections={lancamentos}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.entryContainer}>
              <View style={styles.entryTitleContainer}>
                <View style={styles.entryIcon}>
                  <Icon name="bus" size={16} color="#FFF"/>
                </View>
                <View>
                  <Text style={styles.entryTitle}>{item.nome}</Text>
                  <Text style={styles.entryOrigem}>{item.origem}</Text>
                </View>
              </View>
              <View style={styles.entryValueContainer}>
                <Text style={styles.entryValue}>{floatToMoney(item.valor)}</Text>
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
      </View>
    </SafeAreaView>
  );
}

