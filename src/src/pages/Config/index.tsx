import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import ResumoContas from '../../components/ResumoContas';
import ResumoCartoes from '../../components/ResumoCartoes';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function Config({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Configurações</Text>
      </View>
    </SafeAreaView>
  );
}

