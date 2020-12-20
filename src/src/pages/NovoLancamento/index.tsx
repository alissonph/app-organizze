import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function NovoLancamento({ navigation }) {
  let [value, setValue] = useState(0);
  let [option, setOption] = useState("Despesa");
  let [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container(option)}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} hitSlop={{top: 10, left: 15, bottom: 15, right: 15}}>
          <Icon name="keyboard-backspace" size={25} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Novo Lançamento</Text>
      </View>   
      <View style={styles.containerContent}>
        <View style={styles.containerValue(option)}>
          <TextInputMask type="money" 
            value={value}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$ ',
            }}
            onChangeText={text => {
              setValue(text);
            }}
          style={styles.inputValue} keyboardType="numeric" />
          <View style={styles.containerOptions}>
            <TouchableOpacity onPress={() => setOption("Despesa")} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: option == 'Despesa' ? 'bold' : 'normal', ...styles.textOption}}>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setOption("Receita")} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: option == 'Receita' ? 'bold' : 'normal', ...styles.textOption}}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setOption("Transferencia")} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: option == 'Transferencia' ? 'bold' : 'normal', ...styles.textOption}}>Transferência</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerFields}>
          <Text style={styles.titleField}>Descrição</Text>
          <View style={styles.containerInput}>
            <MaterialIcons name="edit" size={20} color="#000" />
            <TextInput style={styles.inputField} placeholder="Adicione a descrição" onChangeText={text => setDescription(text)} value={description}/>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.floatSaveButton} onPress={() => navigation.navigate("NovoLancamento")}>
        <Icon name="check" size={30} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

