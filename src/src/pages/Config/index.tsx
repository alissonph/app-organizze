import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Config({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
            <Icon name="keyboard-backspace" size={25} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.title}>Configurações</Text>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.titleOption}>Geral</Text>
          <TouchableOpacity style={styles.option}>
            <Text>Tema</Text>
            <Text>Claro ></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Pais</Text>
            <Text>Brasil ></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Idioma</Text>
            <Text>Português ></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Moeda</Text>
            <Text>BRL ></Text>
          </TouchableOpacity>
          <Text style={styles.titleOption}>Alertas e Notificações</Text>
          <TouchableOpacity style={styles.option}>
            <Text>Alertas</Text>
            <Text>></Text>
          </TouchableOpacity>
          <Text style={styles.titleOption}>Outras Opções</Text>
          <TouchableOpacity style={styles.option}>
            <Text>Excluir todas as minhas movimentações</Text>
            <Text>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Gerenciar assinaturas</Text>
            <Text>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Avalie</Text>
            <Text>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Sair</Text>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

