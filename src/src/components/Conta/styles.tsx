import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 10px;
`;

export const ContainerTitulo = styled.View`
    flex-direction: column;
`;

export const Name = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: black;
`;

export const Description = styled.Text`
    font-size: 10px;
    color: black;
`;

export const Saldo = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #12e5fc;
`;
