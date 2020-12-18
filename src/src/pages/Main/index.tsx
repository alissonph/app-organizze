import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Container, Header, Title, SubTitle, Form } from './styles';
import Contas from '../../components/Contas';

export default function App() {
  return (
    <Container>
        <ScrollView>
          <Header>
            <Title>Boa noite,</Title>
            <SubTitle>Alisson!</SubTitle>
          </Header>
          <Form>
            <Contas/>
            <Contas/>
          </Form>
 
        </ScrollView>
        <StatusBar />
    </Container>
  );
}
