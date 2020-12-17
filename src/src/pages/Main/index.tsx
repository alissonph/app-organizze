import React from 'react';
import { Text } from 'react-native';
import { Container, Title, Form } from './styles';
import Contas from '../../components/Contas';

export default function App() {
  return (
    <Container>
        <Title>Financeiro</Title>
        <Form>
            <Contas />
        </Form>
    </Container>
  );
}