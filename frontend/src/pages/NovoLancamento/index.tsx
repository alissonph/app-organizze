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
import { showToast } from '../../Utils';
import { addEntry, RESET_ENTRY } from '../../actions/entry';

export default function NovoLancamento({ navigation }) {
  const { account, entry } = useSelector((store) => store);
  const dispatch = useDispatch();
  
  const [visibleCategoryModal, setVisibleCategoryModal] = useState(false);
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [categories, setCategories] = useState([]);
  const [accountOptions, setAccountOptions] = useState([]);
  const [saving, setSaving] = useState(false);

  const [visible, setVisible] = useState({
    visibleAccountModal: false
  });

  const [newEntry, setNewEntry] = useState({
    type: 'Despesa',
    value: 0,
    description: '',
    category: '',
    account: '',
    status: '',
    date: new Date(),
  })

  const onSave = async () => {
    if(validateEntry()){
      setSaving(true);
      await dispatch(await addEntry({
        type: newEntry.type,
        date: Moment(newEntry.date).format("DD/MM/YYYY"),
        icon: "silverware-fork-knife",
        description: newEntry.description,
        account: newEntry.account,
        value: newEntry.value,
        status: newEntry.status
      }));
      setSaving(false)
    }
  }

  useEffect(() => {
    if(entry?.error && entry?.errorMessage != ""){
      showToast(entry?.errorMessage.toString());
    }else if(entry?.success){
      dispatch({type: RESET_ENTRY});
      showToast("Lançamento incluído com sucesso!");
      navigation.navigate('MainTabs');
    }
  }, [entry])

  const validateEntry = () => {
    let message = "";
    if(newEntry.value == 0){
      message = "Informe o valor.";
    }else if(newEntry.description == ""){
      message = "Informe a descrição.";
    }else if(newEntry.category == ""){
      message = "Informe a categoria.";
    }else if(newEntry.account == ""){
      message = "Informe a conta.";
    }else if(newEntry.date == ""){
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
    setNewEntry({...newEntry, category: data.description});
  }
  const onCancelCategoryModal = () => {
    setVisibleCategoryModal(false);
  }
  
  const onSelectAccountModal = (data) => {
    setVisible({...visible, visibleAccountModal: false});
    setNewEntry({...newEntry, account: data.description});
  }
  const onCancelAccountModal = () => {
    setVisible({...visible, visibleAccountModal: false});
  }


  return (
    <SafeAreaView style={{backgroundColor: (newEntry.type == "Despesa" ? 'red' : (newEntry.type == "Receita" ? '#34eb86' : '#999')), ...styles.container}}>
      
      <ModalPicker title="Selecione uma categoria" visible={visibleCategoryModal} options={categories} onSelect={onSelectCategoryModal} onCancel={onCancelCategoryModal} />
      <ModalPicker title="Selecione uma conta" visible={visible.visibleAccountModal} options={accountOptions} onSelect={onSelectAccountModal} onCancel={onCancelAccountModal} />

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} hitSlop={{top: 10, left: 15, bottom: 15, right: 15}}>
          <Icon name="keyboard-backspace" size={25} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Novo Lançamento</Text>
      </View>   
      <View style={styles.containerContent}>
        <View style={{ backgroundColor: (newEntry.type == "Despesa" ? 'red' : (newEntry.type == "Receita" ? '#34eb86' : '#999')), ...styles.containerValue}}>
          <TextInputMask 
            type="money"
            style={styles.inputValue}
            keyboardType="numeric"
            value={newEntry.value}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$ ',
            }}
            includeRawValueInChangeText
            onChangeText={(maskedText, rawText) => {
              setNewEntry({ ...newEntry, value: rawText});
            }}
          />
          <TouchableOpacity onPress={() => setNewEntry({...newEntry, status: newEntry.status == 'pago' ? 'pendente' : 'pago'})} hitSlop={{top: 10, left: 5, bottom: 10, right: 10}}>
            <Icon name={newEntry.status == 'pago' ? 'thumb-up' : 'thumb-down'}size={25} color="#FFF"></Icon>
          </TouchableOpacity>
          
        </View>
          <View style={{ backgroundColor: (newEntry.type == "Despesa" ? 'red' : (newEntry.type == "Receita" ? '#34eb86' : '#999')), ...styles.containerOptions}}>
            <TouchableOpacity onPress={() => setNewEntry({...newEntry, type:"Despesa"})} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: newEntry.type == 'Despesa' ? 'bold' : 'normal', ...styles.textOption}}>Despesa</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setNewEntry({...newEntry, type:"Receita"})} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: newEntry.type == 'Receita' ? 'bold' : 'normal', ...styles.textOption}}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setNewEntry({...newEntry, type:"Transferencia"})} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
              <Text style={{fontWeight: newEntry.type == 'Transferencia' ? 'bold' : 'normal', ...styles.textOption}}>Transferência</Text>
            </TouchableOpacity>
          </View>

        <View>
          <View style={styles.containerOption}>
            <Text style={styles.titleField}>Descrição</Text>
            <View style={styles.containerInput}>
              <MaterialIcons name="edit" size={20} color="#000" />
              <TextInput style={styles.inputField} placeholder="Adicione a descrição" onChangeText={text => setNewEntry({...newEntry, description: text})} value={newEntry.description}/>
            </View>
          </View>
          <View style={styles.containerOption}>
            <TouchableOpacity onPress={() => setVisibleCategoryModal(!visibleCategoryModal)}>
              <Text style={styles.titleField}>Categoria</Text>
              <View style={styles.containerInput}>
                <Icon name="format-list-bulleted" size={20} color="#000" />
                <Text style={styles.inputField}>{newEntry.category}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOption}>
            <TouchableOpacity onPress={() => setVisible(!visible.visibleAccountModal)}>
              <Text style={styles.titleField}>Pagar com</Text>
              <View style={styles.containerInput}>
                <Icon name="bank" size={20} color="#000" />
                <Text style={styles.inputField}>{newEntry.account}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOption}>
            <TouchableOpacity onPress={() => setVisibleDatePicker(!visibleDatePicker)}>
              <Text style={styles.titleField}>Data</Text>
              <View style={styles.containerInput}>
                <Icon name="calendar" size={20} color="#000" />
                <Text style={styles.inputField}>{Moment(newEntry.date).format("DD/MM/YYYY")}</Text>
                {visibleDatePicker && <DateTimePicker
                  value={newEntry.date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={(event, selectedDate)=> {
                    setVisibleDatePicker(false)
                    if(selectedDate){
                      setNewEntry({...newEntry, date: selectedDate})
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
