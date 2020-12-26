import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalPicker from '../../components/ModalPicker';
import Moment from 'moment';
import { styles } from './styles';

import api from '../../services/api';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default function NovoLancamento({ navigation }) {
  const { account } = useSelector((store) => store);
  const dispatch = useDispatch();
  
  const [visibleCategoryModal, setVisibleCategoryModal] = useState(false);
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [categories, setCategories] = useState([]);
  const [accountOptions, setAccountOptions] = useState([]);
  const [saving, setSaving] = useState(false);

  const [visible, setVisible] = useState({
    visibleAccountModal: false
  });

  const [entry, setEntry] = useState({
    type: 'Despesa',
    value: 0,
    description: '',
    category: '',
    account: '',
    date: new Date(),
  })

  const onSave = () => {
    if(validateEntry()){
      setSaving(true);
      wait(2000).then(() => {
        setSaving(false)
        navigation.navigate('MainTabs');
      });
    }
  }

  const validateEntry = () => {
    let message = "";
    if(entry.value == 0){
      message = "Informe o valor.";
    }else if(entry.description == ""){
      message = "Informe a descrição.";
    }else if(entry.category == ""){
      message = "Informe a categoria.";
    }else if(entry.account == ""){
      message = "Informe a conta.";
    }else if(entry.date == ""){
      message = "Informe a data.";
    }

    if(message != ""){
      Alert.alert("Atenção", message, [{text: "OK"}]);
    }
    return message == "";
  }

  const loadCategories = async () => {
    try {
        let response = await api.get('/category');
        if(response){
            var categoriesOptions = [];
            response.data.map((item)=>{
                categoriesOptions.push({key: item.id, description: item.description})
            });
            setCategories(categoriesOptions);
        }
    } catch (error) {
        console.log("Erro:",error);
    }
  }

  const loadData = useCallback(() => {
    loadCategories();
  },[]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    var newAccountOptions = [];
    account?.data?.map((item) => {
      newAccountOptions.push({ key: item.id, description: item.name});
    });
    setAccountOptions(newAccountOptions);
  }, [account])

  const onSelectCategoryModal = (data) => {
    setVisibleCategoryModal(false);
    setEntry({...entry, category: data.description});
  }
  const onCancelCategoryModal = () => {
    setVisibleCategoryModal(false);
  }
  
  const onSelectAccountModal = (data) => {
    setVisible({...visible, visibleAccountModal: false});
    setEntry({...entry, account: data.description});
  }
  const onCancelAccountModal = () => {
    setVisible({...visible, visibleAccountModal: false});
  }


  return (
    <SafeAreaView style={{backgroundColor: (entry.type == "Despesa" ? 'red' : (entry.type == "Receita" ? '#34eb86' : '#999')), ...styles.container}}>
      
      <ModalPicker title="Selecione uma categoria" visible={visibleCategoryModal} options={categories} onSelect={onSelectCategoryModal} onCancel={onCancelCategoryModal} />
      <ModalPicker title="Selecione uma conta" visible={visible.visibleAccountModal} options={accountOptions} onSelect={onSelectAccountModal} onCancel={onCancelAccountModal} />

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} hitSlop={{top: 10, left: 15, bottom: 15, right: 15}}>
          <Icon name="keyboard-backspace" size={25} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Novo Lançamento</Text>
      </View>   
      <View style={styles.containerContent}>
        <View style={{ backgroundColor: (entry.type == "Despesa" ? 'red' : (entry.type == "Receita" ? '#34eb86' : '#999')), ...styles.containerValue}}>
          <TextInputMask type="money" 
            value={entry.value}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$ ',
            }}
            onChangeText={text => {
              setEntry({ ...entry, value: text});
              //console.log(text);
            }}
          style={styles.inputValue} keyboardType="numeric" />
          <View style={styles.containerOptions}>
            <TouchableOpacity onPress={() => setEntry({...entry, type:"Despesa"})} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: entry.type == 'Despesa' ? 'bold' : 'normal', ...styles.textOption}}>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setEntry({...entry, type:"Receita"})} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: entry.type == 'Receita' ? 'bold' : 'normal', ...styles.textOption}}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setEntry({...entry, type:"Transferencia"})} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: entry.type == 'Transferencia' ? 'bold' : 'normal', ...styles.textOption}}>Transferência</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.containerOption}>
            <Text style={styles.titleField}>Descrição</Text>
            <View style={styles.containerInput}>
              <MaterialIcons name="edit" size={20} color="#000" />
              <TextInput style={styles.inputField} placeholder="Adicione a descrição" onChangeText={text => setEntry({...entry, description: text})} value={entry.description}/>
            </View>
          </View>
          <View style={styles.containerOption}>
            <TouchableOpacity onPress={() => setVisibleCategoryModal(!visibleCategoryModal)}>
              <Text style={styles.titleField}>Categoria</Text>
              <View style={styles.containerInput}>
                <Icon name="format-list-bulleted" size={20} color="#000" />
                <Text style={styles.inputField}>{entry.category}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOption}>
            <TouchableOpacity onPress={() => setVisible(!visible.visibleAccountModal)}>
              <Text style={styles.titleField}>Pagar com</Text>
              <View style={styles.containerInput}>
                <Icon name="bank" size={20} color="#000" />
                <Text style={styles.inputField}>{entry.account}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOption}>
            <TouchableOpacity onPress={() => setVisibleDatePicker(!visibleDatePicker)}>
              <Text style={styles.titleField}>Data</Text>
              <View style={styles.containerInput}>
                <Icon name="calendar" size={20} color="#000" />
                <Text style={styles.inputField}>{Moment(entry.date).format("DD/MM/YYYY")}</Text>
                {visibleDatePicker && <DateTimePicker
                  value={entry.date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={(event, selectedDate)=> {
                    setVisibleDatePicker(false)
                    if(selectedDate){
                      setEntry({...entry, date: selectedDate})
                    }
                  }}
                />}
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <TouchableOpacity style={styles.floatSaveButton} onPress={onSave}>
        {saving && <ActivityIndicator size="large" color="#FFF" /> }
        {!saving && <Icon name="check" size={35} color="#FFF" /> }
      </TouchableOpacity>
    </SafeAreaView>
  );
}
