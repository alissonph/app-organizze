import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import Contas from '../../components/Contas';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Boa noite,</Text>
            <Text style={styles.subTitle}>Alisson!</Text>
          </View>
          <View>
            <Contas/>
          </View>
        </ScrollView>
        <StatusBar />
    </SafeAreaView>
  );
}

