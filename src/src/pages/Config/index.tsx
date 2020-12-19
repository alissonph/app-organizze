import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Config({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
          <Icon name="keyboard-backspace" size={25} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Configurações</Text>
      </View>
    </SafeAreaView>
  );
}

