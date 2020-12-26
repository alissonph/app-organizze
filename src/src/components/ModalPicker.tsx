import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, Alert, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ModalPicker({ visible, title, options, onSelect, onCancel }) {
    const [ searchValue, setSearchValue] = useState('');
    const [ filteredOptions, setFilteredOptions ] = useState([]);

    const loadOptions = () => { 
        let newOptions = [];
        if(options){
            newOptions = options.filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase()));
        }
        setFilteredOptions(newOptions);
    }
    useEffect(() => {
        loadOptions();
    }, [searchValue]);

    useEffect(() => {
        setSearchValue('');
    }, [visible]);

    return (
        <Modal
            animationType="slide"
            onShow={loadOptions}
            transparent={true}
            visible={visible}
            supportedOrientations="portrait"
            onRequestClose={onCancel}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={styles.containerHeader}>
                    <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={onCancel} hitSlop={{top: 5, left: 5, bottom: 5, right: 5}}>
                            <Icon name="close" color="#CCC" size={25}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.searchInput} placeholder="Pesquisar..." onChangeText={text => setSearchValue(text)} value={searchValue}/>

                    <FlatList style={styles.containerList}
                        contentContainerStyle={styles.list}
                        showsHorizontalScrollIndicator={false}
                        data={filteredOptions}
                        ItemSeparatorComponent={
                            () => (<View style={styles.separator} />)
                        }
                        keyExtractor={(item) => item.key.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.option} onPress={() => onSelect(item)}>
                                <Text style={styles.optionDescription}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                        />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: 'white',
      height: '80%',
      width: '100%',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    separator: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#EEE',
    },
    containerHeader:{
        width: '100%',
        paddingBottom: 10,
    },
    title: {
        color: '#AAA',
        alignSelf: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    searchInput: {
        backgroundColor: 'white',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 5,
        fontSize: 16,
        width: '90%',
        elevation: 5,
    },
    containerList:{
        width: '100%',
        paddingTop: 10,
    },
    list: {
      backgroundColor: 'white'
    },
    option: {
        padding: 15,
    },
    optionDescription:{
        fontSize: 14,
    },
});