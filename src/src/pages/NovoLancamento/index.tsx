import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalPicker from '../../components/ModalPicker';

import api from '../../services/api';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default function NovoLancamento({ navigation }) {
  const [visibleCategoryModal, setVisibleCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(0);
  const [option, setOption] = useState("Despesa");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [entry, setEntry] = useState({category:'Outros'})

  const onSave = useCallback(() => {
    setSaving(true);

    wait(2000).then(() => setSaving(false));
  }, []);

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

  const onCancelCategoryModal = () => {
    setVisibleCategoryModal(false);
  }

  const onSelectCategoryModal = (data) => {
    setVisibleCategoryModal(false);
    setEntry({...entry, category: data.description});
  }

  return (
    <SafeAreaView style={{backgroundColor: (option == "Despesa" ? 'red' : (option == "Receita" ? '#34eb86' : '#999')), ...styles.container}}>
      
      <ModalPicker visible={visibleCategoryModal} options={categories} onSelect={onSelectCategoryModal} onCancel={onCancelCategoryModal} />
      
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()} hitSlop={{top: 10, left: 15, bottom: 15, right: 15}}>
          <Icon name="keyboard-backspace" size={25} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Novo Lançamento</Text>
      </View>   
      <View style={styles.containerContent}>
        <View style={{ backgroundColor: (option == "Despesa" ? 'red' : (option == "Receita" ? '#34eb86' : '#999')), ...styles.containerValue}}>
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
              console.log(text);
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

        <View>
          <View style={styles.containerOption}>
            <Text style={styles.titleField}>Descrição</Text>
            <View style={styles.containerInput}>
              <MaterialIcons name="edit" size={20} color="#000" />
              <TextInput style={styles.inputField} placeholder="Adicione a descrição" onChangeText={text => setDescription(text)} value={description}/>
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
            <TouchableOpacity>
              <Text style={styles.titleField}>Pagar com</Text>
              <View style={styles.containerInput}>
                <Icon name="bank" size={20} color="#000" />
                <Text style={styles.inputField}>Nuconta</Text>
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
