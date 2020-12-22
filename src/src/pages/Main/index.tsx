import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
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
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
            <ResumoContas/>
            <ResumoCartoes/>
          </View>

        </ScrollView>
        <TouchableOpacity style={styles.floatAddButton} onPress={() => navigation.navigate("NovoLancamento")}>
          <Icon name="plus-thick" size={30} color="#FFF" />
        </TouchableOpacity>
        <StatusBar backgroundColor="transparent" translucent/>
    </SafeAreaView>
  );
}

