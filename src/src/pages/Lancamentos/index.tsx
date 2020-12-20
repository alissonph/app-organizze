import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Lancamentos({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
    </SafeAreaView>
  );
}

