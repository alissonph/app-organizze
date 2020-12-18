import React from 'react';
import { Container, Title, List, BotaoSaldo } from './styles';
import Conta from '../../components/Conta';
import { StyleSheet, Text } from 'react-native';

export default function Contas() {
    return (
        <Container>
            <Title>Meus Saldos</Title>
            <List
                keyboardShouldPersistTaps="handled"
                data={[
                    { 
                        id: 1,
                        nome: 'Nuconta',
                        tipo: 'Conta Corrente',
                        icone: '',
                        saldo : 'R$ 9.123,32',
                    },
                    { 
                        id: 2,
                        nome: 'Bradesco',
                        tipo: 'Conta Poupança',
                        icone: '',
                        saldo : 'R$ 117.234,00',
                    },
                    { 
                        id: 3,
                        nome: 'Easyinvest',
                        tipo: 'Investimentos',
                        icone: '',
                        saldo : 'R$ 557.432,00',
                    }
                ]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Conta data={item}></Conta>
                )}
            />
            <BotaoSaldo>
                <Text style={styles.textoSaldo}>Ajustar Saldo</Text>
            </BotaoSaldo>
        </Container>
    );
}

const styles = StyleSheet.create({
    textoSaldo: {
      color: '#1e661b',
      fontWeight: 'bold'
    },
});