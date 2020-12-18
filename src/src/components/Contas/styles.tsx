import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #444;
`;

export const Container = styled.View`
    flex: 1;
    padding: 20px 20px;
    background: #FFF;
    border-radius: 6px;
    margin: 0px 20px 10px 20px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const BotaoSaldo = styled.TouchableOpacity`
    background: #a2faca;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 6px 0;
`;