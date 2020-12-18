import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import ResumoContas from '../../components/ResumoContas';
import ResumoCartoes from '../../components/ResumoCartoes';

import Icon from 'react-native-vector-icons/SimpleLineIcons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.containerHeader}>
            <View style={styles.containerWelcome}>
              <Text style={styles.title}>Boa noite,</Text>
              <Text style={styles.subTitle}>Alisson!</Text>
            </View>
            <TouchableOpacity hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
              <Icon name="settings" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View>
            <ResumoContas/>
            <ResumoCartoes/>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="transparent" translucent/>
    </SafeAreaView>
  );
}

