import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, ContainerTitulo, Name, Description, Saldo } from './styles';

export default function Conta({ data }) {
    return (
        <TouchableOpacity>
            <Container>
                <ContainerTitulo>
                    <Name>{data?.nome}</Name>
                    <Description>{data?.tipo}</Description>
                </ContainerTitulo>
                <Saldo>{data?.saldo}</Saldo>
            </Container>
        </TouchableOpacity>
    );
}